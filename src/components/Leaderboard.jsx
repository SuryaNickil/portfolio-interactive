import React, { useState } from 'react';
import './Leaderboard.css';

export default function Leaderboard({ agents }) {
  const [sortBy, setSortBy] = useState('roi');
  
  const sorted = [...agents].sort((a, b) => {
    switch(sortBy) {
      case 'roi': return b.roi_percent - a.roi_percent;
      case 'pnl': return b.total_pnl_usd - a.total_pnl_usd;
      case 'winrate': return b.win_rate - a.win_rate;
      default: return 0;
    }
  });

  return (
    <div className="leaderboard">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
        <h2>📊 Full Leaderboard</h2>
        <div style={{ display: 'flex', gap: '0.4rem' }}>
          <button 
            onClick={() => setSortBy('roi')}
            style={{ 
              padding: '0.4rem 0.8rem',
              borderRadius: '6px',
              border: sortBy === 'roi' ? '1px solid #60a5fa' : '1px solid #334155',
              background: sortBy === 'roi' ? 'rgba(96, 165, 250, 0.2)' : 'transparent',
              color: '#e2e8f0',
              cursor: 'pointer',
              fontSize: '0.75rem',
              fontWeight: '600',
              transition: 'all 0.2s ease'
            }}
          >
            ROI
          </button>
          <button 
            onClick={() => setSortBy('pnl')}
            style={{ 
              padding: '0.4rem 0.8rem',
              borderRadius: '6px',
              border: sortBy === 'pnl' ? '1px solid #60a5fa' : '1px solid #334155',
              background: sortBy === 'pnl' ? 'rgba(96, 165, 250, 0.2)' : 'transparent',
              color: '#e2e8f0',
              cursor: 'pointer',
              fontSize: '0.75rem',
              fontWeight: '600',
              transition: 'all 0.2s ease'
            }}
          >
            P&L
          </button>
          <button 
            onClick={() => setSortBy('winrate')}
            style={{ 
              padding: '0.4rem 0.8rem',
              borderRadius: '6px',
              border: sortBy === 'winrate' ? '1px solid #60a5fa' : '1px solid #334155',
              background: sortBy === 'winrate' ? 'rgba(96, 165, 250, 0.2)' : 'transparent',
              color: '#e2e8f0',
              cursor: 'pointer',
              fontSize: '0.75rem',
              fontWeight: '600',
              transition: 'all 0.2s ease'
            }}
          >
            Win %
          </button>
        </div>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Agent</th>
              <th>ROI</th>
              <th>P&L</th>
              <th>Win %</th>
              <th>Trades</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((agent, idx) => (
              <tr key={idx} className={idx < 3 ? 'top-agent' : ''}>
                <td className="rank">#{idx + 1}</td>
                <td className="name">{agent.name || `Agent ${agent.id}`}</td>
                <td className={`roi ${agent.roi_percent > 0 ? 'positive' : 'negative'}`}>
                  {agent.roi_percent?.toFixed(2) || 0}%
                </td>
                <td className={`pnl ${agent.total_pnl_usd > 0 ? 'positive' : 'negative'}`}>
                  ${agent.total_pnl_usd?.toFixed(0) || 0}
                </td>
                <td className="win-rate">{agent.win_rate?.toFixed(1) || 0}%</td>
                <td className="trades">{agent.total_trades || 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
