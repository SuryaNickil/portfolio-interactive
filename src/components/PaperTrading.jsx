import React, { useState } from 'react';
import './PaperTrading.css';

export default function PaperTrading({ data }) {
  if (!data || !data.agents) return null;

  const agents = Object.entries(data.agents).map(([id, agent]) => ({
    id,
    ...agent
  })).sort((a, b) => b.roi_percent - a.roi_percent);

  const portfolio = data.portfolio || {};

  return (
    <div className="paper-trading">
      <div className="section-header">
        <h2>📄 Live Paper Trading Results</h2>
        <span className="badge">
          {new Date(data.timestamp).toLocaleDateString()} 
          {' '} 
          {new Date(data.timestamp).toLocaleTimeString()}
        </span>
      </div>

      <div className="trading-grid">
        <div className="trading-card info-card">
          <div className="info-item">
            <div className="info-label">Total P&L</div>
            <div className={`info-value ${portfolio.total_pnl_usd >= 0 ? 'positive' : 'negative'}`}>
              ${portfolio.total_pnl_usd?.toFixed(2) || 0}
            </div>
          </div>
          <div className="info-item">
            <div className="info-label">Portfolio ROI</div>
            <div className={`info-value ${portfolio.roi_percent >= 0 ? 'positive' : 'negative'}`}>
              {portfolio.roi_percent?.toFixed(2) || 0}%
            </div>
          </div>
          <div className="info-item">
            <div className="info-label">Win Rate</div>
            <div className="info-value">{portfolio.win_rate?.toFixed(1) || 0}%</div>
          </div>
          <div className="info-item">
            <div className="info-label">Trades</div>
            <div className="info-value">{portfolio.total_trades || 0}</div>
          </div>
        </div>

        {agents.map((agent, idx) => (
          <div key={agent.id} className="trading-card agent-card">
            <div className="agent-header">
              <div className="agent-name">{agent.name}</div>
              <div className={`agent-roi ${agent.roi_percent >= 0 ? 'positive' : 'negative'}`}>
                {agent.roi_percent?.toFixed(2) || 0}%
              </div>
            </div>
            
            <div className="agent-stats">
              <div className="stat">
                <span className="stat-label">P&L</span>
                <span className={`stat-value ${agent.total_pnl_usd >= 0 ? 'positive' : 'negative'}`}>
                  ${agent.total_pnl_usd?.toFixed(2) || 0}
                </span>
              </div>
              
              <div className="stat">
                <span className="stat-label">Win Rate</span>
                <span className="stat-value">{agent.win_rate?.toFixed(1) || 0}%</span>
              </div>
              
              <div className="stat">
                <span className="stat-label">Trades</span>
                <span className="stat-value">{agent.trades || 0}</span>
              </div>
              
              <div className="stat">
                <span className="stat-label">Capital</span>
                <span className="stat-value">${(agent.capital || 0).toFixed(0)}</span>
              </div>
            </div>

            <div className="wins-losses">
              <div className="wins">
                ✅ {agent.wins || 0} wins
              </div>
              <div className="losses">
                ❌ {agent.losses || 0} losses
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="trading-disclaimer">
        ⚠️ Paper trading results. No real capital at risk. For educational purposes only.
      </div>
    </div>
  );
}
