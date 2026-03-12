import DetailLayout from '../DetailLayout';

const AgileErp = () => {
  return (
    <DetailLayout
      category="Solution"
      title="Agile ERP Ordering"
      subtitle="Run high-speed ordering and fulfillment with mobile-first workflows, synchronized inventory, and proactive notifications."
      highlights={[
        {
          title: 'Lean Orchestrator',
          description: 'Simplified ERP execution layer designed for fast-moving order operations.',
        },
        {
          title: 'Mobile-First Ordering',
          description: 'Enable teams to create and process orders from any device in real time.',
        },
        {
          title: 'Automated Notifications',
          description: 'Trigger alerts for order states, vendor updates, and stock thresholds automatically.',
        },
      ]}
      outcomes={[
        { value: '3x', label: 'Faster order handling' },
        { value: 'Real-Time', label: 'Stock synchronization' },
        { value: 'Lower', label: 'Manual follow-ups' },
      ]}
    />
  );
};

export default AgileErp;
