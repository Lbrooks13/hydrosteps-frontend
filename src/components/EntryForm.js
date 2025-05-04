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
          Authorization: `Token ${token}`,  // Send token here
        },
        body: JSON.stringify({
          step_count: steps,
          water_intake: water,
        }),
      });

  
    if (response.ok) {
      console.log('Entry submitted successfully!');
      setSteps('');
      setWater('');
      if (onEntryAdded) {
        onEntryAdded(); // Tell parent to refresh the summary
      }
    }
    
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="steps" className="form-label">Step Count</label>
        <input
          type="number"
          className="form-control"
          id="steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="water" className="form-label">Water Intake (ml)</label>
        <input
          type="number"
          className="form-control"
          id="water"
          value={water}
          onChange={(e) => setWater(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">Add Entry</button>
    </form>
  );
}

export default EntryForm;
