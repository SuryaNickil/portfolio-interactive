import React, { useState } from 'react';
import './Stats.css';

export default function Stats({ summary }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const stats = [
    { label: 'Total Agents', value: summary.agents || 15, icon: '🤖' },
    { label: 'Simulation Runs', value: summary.runs || 1, icon: '🔄' },
    { label: 'Avg P&L', value: `$${(summary.avg_pnl || 0).toFixed(0)}`, icon: '📈' },
    { label: 'Total P&L', value: `$${(summary.total_pnl || 0).toFixed(0)}`, icon: '💰' }
  ];

  return (
    <div className="stats">
      <h2>📊 Summary Stats</h2>
      <div className="stats-grid">
        {stats.map((stat, idx) => (
          <div 
            key={idx}
            className="stat-card"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>{stat.icon}</div>
            <div className="stat-label">{stat.label}</div>
            <div className="stat-value">{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
