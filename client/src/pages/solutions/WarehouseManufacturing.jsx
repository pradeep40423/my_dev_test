import DetailLayout from '../DetailLayout';

const WarehouseManufacturing = () => {
  return (
    <DetailLayout
      category="Solution"
      title="IoT Warehouse & Manufacturing"
      subtitle="Transform warehouse and manufacturing operations with real-time tracking, sensor intelligence, and AI-assisted decision making."
      highlights={[
        {
          title: 'BLE Edge Tracking',
          description: 'Track materials and assets with meter-level precision across storage and production zones.',
        },
        {
          title: 'Gen AI Assistant',
          description: 'Use conversational workflows for inventory lookups, status checks, and exception handling.',
        },
        {
          title: 'WIP Intelligence',
          description: 'Monitor work-in-progress continuously using sensor streams and event-driven visibility.',
        },
      ]}
      outcomes={[
        { value: '30%', label: 'Lower cycle-time variance' },
        { value: '24/7', label: 'Operational visibility' },
        { value: 'Faster', label: 'Exception response' },
      ]}
    />
  );
};

export default WarehouseManufacturing;
