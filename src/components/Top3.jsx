import React from 'react';
import './Top3.css';

export default function Top3({ agents }) {
  const medals = ['🥇', '🥈', '🥉'];

  return (
    <div className="top3">
      <h2>Top 3 Performers</h2>
      <div className="podium">
        {agents.map((agent, idx) => (
          <div key={idx} className={`podium-item rank-${idx + 1}`}>
            <div className="medal">{medals[idx]}</div>
            <div className="name">{agent.name || `Agent ${agent.id}`}</div>
            <div className="roi">{agent.roi_percent?.toFixed(2) || 0}%</div>
            <div className="pnl">${agent.total_pnl_usd?.toFixed(2) || 0}</div>
            <div className="win-rate">{agent.win_rate?.toFixed(1) || 0}% Win</div>
          </div>
        ))}
      </div>
    </div>
  );
}
