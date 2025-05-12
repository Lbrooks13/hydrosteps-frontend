import { useEffect, useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

function HistoryPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    fetch('https://hydrosteps-backend-c9c9ddb6aa93.herokuapp.com/api/entries/', {
      method: 'GET',
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((res) => res.json())
      .then((entries) => {
        const grouped = {};

        entries.forEach(entry => {
          if (!grouped[entry.date]) {
            grouped[entry.date] = { date: entry.date, steps: 0, water: 0 };
          }
          grouped[entry.date].steps += entry.step_count;
          grouped[entry.date].water += entry.water_intake;
        });

        const formatted = Object.values(grouped).sort((a, b) =>
          a.date.localeCompare(b.date)
        );

        setData(formatted);
      });
  }, []);

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Your Activity History</h2>
      <div className="card p-4 shadow-sm">
        {data.length === 0 ? (
          <p>No data yet. Start logging your activity!</p>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="steps" fill="#8884d8" name="Steps" />
              <Bar dataKey="water" fill="#82ca9d" name="Water (ml)" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}

export default HistoryPage;
