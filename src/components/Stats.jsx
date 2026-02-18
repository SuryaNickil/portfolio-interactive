import React from 'react';
import './Stats.css';

export default function Stats({ summary }) {
  return (
    <div className="stats">
      <h2>Summary Stats</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Total Agents</div>
          <div className="stat-value">{summary.agents || 15}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Simulation Runs</div>
          <div className="stat-value">{summary.runs || 1}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Avg P&L</div>
          <div className="stat-value">${summary.avg_pnl?.toFixed(2) || 0}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Total P&L</div>
          <div className="stat-value">${summary.total_pnl?.toFixed(2) || 0}</div>
        </div>
      </div>
    </div>
  );
}
