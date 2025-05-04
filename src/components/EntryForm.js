import { useState } from 'react';

function EntryForm({ onEntryAdded }) {
  const [steps, setSteps] = useState('');
  const [water, setWater] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    const response = await fetch('http://localhost:8000/api/entries/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({
        step_count: steps,
        water_intake: water,
      }),
    });

    if (response.ok) {
      setSteps('');
      setWater('');
      if (onEntryAdded) onEntryAdded();
    } else {
      console.error('Failed to submit entry');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 shadow-sm mb-4">
      <h4 className="mb-3">Log Today’s Activity</h4>
      <div className="mb-3">
        <label className="form-label">Step Count</label>
        <input
          type="number"
          className="form-control"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Water Intake (ml)</label>
        <input
          type="number"
          className="form-control"
          value={water}
          onChange={(e) => setWater(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">Add Entry</button>
    </form>
  );
}

export default EntryForm;
