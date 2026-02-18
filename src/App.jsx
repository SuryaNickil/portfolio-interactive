import { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDashboard();
    const interval = setInterval(fetchDashboard, 60000); // Refresh every 60s
    return () => clearInterval(interval);
  }, []);

  const fetchDashboard = async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL || '/api';
      const response = await fetch(`${apiUrl}/dashboard`);
      if (!response.ok) throw new Error('Failed to fetch dashboard');
      const json = await response.json();
      setData(json);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>🤖 Agent Performance Dashboard</h1>
        <p className="subtitle">Live trading agent simulator leaderboard</p>
      </header>
      
      <main className="main">
        {loading && <div className="loading">Loading...</div>}
        {error && <div className="error">Error: {error}</div>}
        {data && <Dashboard data={data} />}
      </main>

      <footer className="footer">
        <p>Auto-refreshes every 60 seconds • Last update: {data?.timestamp || 'loading'}</p>
      </footer>
    </div>
  );
}

export default App;
