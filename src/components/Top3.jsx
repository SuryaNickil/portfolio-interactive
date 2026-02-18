import React, { useState } from 'react';
import './Top3.css';

export default function Top3({ agents }) {
  const medals = ['🥇', '🥈', '🥉'];
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="top3">
      <h2>🏆 Top 3 Performers</h2>
      <div className="podium">
        {agents.map((agent, idx) => (
          <div 
            key={idx} 
            className={`podium-item rank-${idx + 1}`}
            onClick={() => setExpanded(expanded === idx ? null : idx)}
            style={{ cursor: 'pointer' }}
          >
            <div className="medal">{medals[idx]}</div>
            <div className="name">{agent.name || `Agent ${agent.id}`}</div>
            <div className="roi">{agent.roi_percent?.toFixed(2) || 0}%</div>
            <div className="pnl">${agent.total_pnl_usd?.toFixed(2) || 0}</div>
            <div className="win-rate">{agent.win_rate?.toFixed(1) || 0}% Win</div>
            {expanded === idx && (
              <div style={{ 
                marginTop: '0.6rem', 
                paddingTop: '0.6rem', 
                borderTop: '1px solid rgba(96, 165, 250, 0.2)',
                fontSize: '0.8rem',
                color: '#cbd5e1'
              }}>
                <div>Trades: {agent.total_trades}</div>
                <div>Wins: {agent.total_wins}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
