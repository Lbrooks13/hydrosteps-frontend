import { useState } from 'react';
import EntryForm from '../components/EntryForm';
import TodaySummary from '../components/TodaySummary';

function DashboardPage() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div>
      <h2>Dashboard</h2>
      <EntryForm onEntryAdded={() => setRefreshKey(prev => prev + 1)} />
      <TodaySummary refreshKey={refreshKey} />
    </div>
  );
}

export default DashboardPage;
