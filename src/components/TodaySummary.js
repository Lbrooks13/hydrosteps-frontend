import { useEffect, useState } from 'react';

function TodaySummary({ refreshKey }) {
  const [summary, setSummary] = useState({ steps: 0, water: 0 });

  useEffect(() => {
    fetch('http://localhost:8000/api/entries/', {
      method: 'GET',
      credentials: 'include',
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
  }, [refreshKey]); // 👈 Re-run this effect when refreshKey changes

  return (
    <div className="mt-4">
      <h5>Today's Summary</h5>
      <p>🚶 Steps: {summary.steps}</p>
      <p>💧 Water Intake: {summary.water} ml</p>
    </div>
  );
}

export default TodaySummary;
