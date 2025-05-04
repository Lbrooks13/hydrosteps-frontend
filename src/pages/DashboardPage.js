import EntryForm from '../components/EntryForm';
import TodaySummary from '../components/TodaySummary';
import { useState } from 'react';

function DashboardPage() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div className="container py-4">
      <div className="row justify-content-center mb-4">
        <div className="col-lg-8">
          <h2 className="text-center mb-4">Welcome to Your Dashboard</h2>
          <EntryForm onEntryAdded={() => setRefreshKey(prev => prev + 1)} />
          <TodaySummary refreshKey={refreshKey} />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
