import { useState, useEffect } from 'react';

function DailyTargetForm({ onTargetsUpdated }) {
  const [stepTarget, setStepTarget] = useState('');
  const [waterTarget, setWaterTarget] = useState('');

  useEffect(() => {
    const savedStep = localStorage.getItem('stepTarget') || '';
    const savedWater = localStorage.getItem('waterTarget') || '';
    setStepTarget(savedStep);
    setWaterTarget(savedWater);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('stepTarget', stepTarget);
    localStorage.setItem('waterTarget', waterTarget);
    if (onTargetsUpdated) onTargetsUpdated();
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 shadow-sm mb-4">
      <h4 className="mb-3">Set Your Daily Targets</h4>
      <div className="mb-3">
        <label className="form-label">Step Target</label>
        <input
          type="number"
          className="form-control"
          value={stepTarget}
          onChange={(e) => setStepTarget(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Water Target (ml)</label>
        <input
          type="number"
          className="form-control"
          value={waterTarget}
          onChange={(e) => setWaterTarget(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-success w-100">Save Targets</button>
    </form>
  );
}

export default DailyTargetForm;
