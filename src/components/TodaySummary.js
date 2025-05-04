import { useEffect, useState } from 'react';

function TodaySummary({ refreshKey }) {
  const [summary, setSummary] = useState({ steps: 0, water: 0 });

  useEffect(() => {
    const token = localStorage.getItem('token');

    fetch('http://localhost:8000/api/entries/', {
      method: 'GET',
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const today = new Date().toISOString().split('T')[0];
        const todaysEntries = data.filter(entry => entry.date === today);
        const totalSteps = todaysEntries.reduce((sum, entry) => sum + entry.step_count, 0);
        const totalWater = todaysEntries.reduce((sum, entry) => sum + entry.water_intake, 0);
        setSummary({ steps: totalSteps, water: totalWater });
      })
      .catch((err) => {
        console.error("Failed to fetch today's summary:", err);
      });
  }, [refreshKey]);

  return (
    <div className="card p-4 shadow-sm bg-light">
      <h5 className="mb-3">Today's Summary</h5>
      <p>Steps: <strong>{summary.steps}</strong></p>
      <p>Water Intake: <strong>{summary.water} ml</strong></p>
    </div>
  );
  
}

export default TodaySummary;
