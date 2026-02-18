import React from 'react';
import Leaderboard from './Leaderboard';
import Top3 from './Top3';
import Stats from './Stats';
import './Dashboard.css';

export default function Dashboard({ data }) {
  return (
    <div className="dashboard">
      <Top3 agents={data.leaderboard?.slice(0, 3) || []} />
      <Stats summary={data.summary || {}} />
      <Leaderboard agents={data.leaderboard || []} />
    </div>
  );
}
