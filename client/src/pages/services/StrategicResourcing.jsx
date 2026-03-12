import DetailLayout from '../DetailLayout';

const StrategicResourcing = () => {
  return (
    <DetailLayout
      category="Service"
      title="Strategic Resourcing"
      subtitle="Expand delivery capacity quickly with curated SAP and product engineering talent for mission-critical initiatives."
      highlights={[
        {
          title: 'SAP Technical Architects',
          description: 'Lead design and implementation across complex enterprise programs.',
        },
        {
          title: 'Fiori & UI5 Specialists',
          description: 'Accelerate user-focused SAP application delivery with experienced frontend experts.',
        },
        {
          title: 'Functional Module Leads',
          description: 'Support cross-functional SAP domains with proven operational and process expertise.',
        },
      ]}
      outcomes={[
        { value: '200+', label: 'Consultants network' },
        { value: '24h', label: 'Typical response window' },
        { value: 'Flexible', label: 'Engagement models' },
      ]}
    />
  );
};

export default StrategicResourcing;
