import { useState } from 'react';

function EntryForm() {
  const [steps, setSteps] = useState('');
  const [water, setWater] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Steps:', steps);
    console.log('Water (ml):', water);
    // Later: send this data to backend API
    setSteps('');
    setWater('');
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
