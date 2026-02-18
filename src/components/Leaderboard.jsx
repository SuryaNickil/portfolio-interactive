import React from 'react';
import './Leaderboard.css';

export default function Leaderboard({ agents }) {
  return (
    <div className="leaderboard">
      <h2>Full Leaderboard</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Agent</th>
              <th>Avg ROI</th>
              <th>Total P&L</th>
              <th>Win Rate</th>
              <th>Trades</th>
            </tr>
          </thead>
          <tbody>
            {agents.map((agent, idx) => (
              <tr key={idx} className={idx < 3 ? 'top-agent' : ''}>
                <td className="rank">#{idx + 1}</td>
                <td className="name">{agent.name || `Agent ${agent.id}`}</td>
                <td className={`roi ${agent.roi_percent > 0 ? 'positive' : 'negative'}`}>
                  {agent.roi_percent?.toFixed(2) || 0}%
                </td>
                <td className={`pnl ${agent.total_pnl_usd > 0 ? 'positive' : 'negative'}`}>
                  ${agent.total_pnl_usd?.toFixed(2) || 0}
                </td>
                <td className="win-rate">{agent.win_rate?.toFixed(1) || 0}%</td>
                <td className="trades">{agent.trades || 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
