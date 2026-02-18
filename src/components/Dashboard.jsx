import React from 'react';
import Leaderboard from './Leaderboard';
import Top3 from './Top3';
import Stats from './Stats';
import PaperTrading from './PaperTrading';
import './Dashboard.css';

export default function Dashboard({ data }) {
  return (
    <div className="dashboard">
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: '#60a5fa', fontSize: '1rem', marginBottom: '1rem', fontWeight: '600' }}>
          📊 Simulator Results (Historical Average)
        </h3>
        <Top3 agents={data.leaderboard?.slice(0, 3) || []} />
        <Stats summary={data.summary || {}} />
        <Leaderboard agents={data.leaderboard || []} />
      </div>

      {data.paperTrading && (
        <PaperTrading data={data.paperTrading} />
      )}
    </div>
  );
}
