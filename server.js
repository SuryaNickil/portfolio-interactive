import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.static('dist'));

// Read performance data
function getDashboardData() {
  const resultsPath = path.join(__dirname, 'agent_performance.jsonl');
  
  if (!fs.existsSync(resultsPath)) {
    return {
      timestamp: new Date().toISOString(),
      leaderboard: [],
      summary: {}
    };
  }

  const lines = fs.readFileSync(resultsPath, 'utf-8')
    .split('\n')
    .filter(line => line.trim());
  
  const agentStats = {};
  
  lines.forEach(line => {
    const data = JSON.parse(line);
    for (const [agentId, agentData] of Object.entries(data.agents || {})) {
      if (!agentStats[agentId]) {
        agentStats[agentId] = {
          id: agentId,
          name: agentData.name,
          total_roi: 0,
          total_pnl_usd: 0,
          total_wins: 0,
          total_losses: 0,
          total_trades: 0,
          run_count: 0
        };
      }
      agentStats[agentId].total_roi += agentData.roi_percent || 0;
      agentStats[agentId].total_pnl_usd += agentData.total_pnl_usd || 0;
      agentStats[agentId].total_wins += agentData.wins || 0;
      agentStats[agentId].total_losses += agentData.losses || 0;
      agentStats[agentId].total_trades += agentData.trades || 0;
      agentStats[agentId].run_count += 1;
    }
  });

  // Calculate averages
  Object.values(agentStats).forEach(stats => {
    if (stats.run_count > 0) {
      stats.roi_percent = stats.total_roi / stats.run_count;
      stats.win_rate = stats.total_trades > 0 
        ? (stats.total_wins / stats.total_trades * 100)
        : 0;
    }
  });

  // Sort by ROI
  const leaderboard = Object.values(agentStats)
    .sort((a, b) => b.roi_percent - a.roi_percent);

  const totalPnL = leaderboard.reduce((sum, a) => sum + a.total_pnl_usd, 0);
  
  return {
    timestamp: new Date().toISOString(),
    leaderboard,
    summary: {
      agents: leaderboard.length,
      runs: lines.length,
      total_pnl: totalPnL,
      avg_pnl: leaderboard.length > 0 ? totalPnL / leaderboard.length : 0
    }
  };
}

function getPaperTradingData() {
  const paperTradingPath = '../paper_trading_log.jsonl';
  
  if (!fs.existsSync(paperTradingPath)) {
    return null;
  }

  const lines = fs.readFileSync(paperTradingPath, 'utf-8')
    .split('\n')
    .filter(line => line.trim());
  
  if (lines.length === 0) return null;
  
  // Get the latest paper trading session
  const latestSession = JSON.parse(lines[lines.length - 1]);
  return latestSession;
}

app.get('/api/dashboard', (req, res) => {
  try {
    const data = getDashboardData();
    const paperTrading = getPaperTradingData();
    
    res.json({
      ...data,
      paperTrading
    });
  } catch (error) {
    console.error('Error fetching dashboard:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Dashboard server running on http://localhost:${PORT}`);
});
