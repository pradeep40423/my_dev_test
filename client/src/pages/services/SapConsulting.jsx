import DetailLayout from '../DetailLayout';

const SapConsulting = () => {
  return (
    <DetailLayout
      category="Service"
      title="SAP Industry 4.0 Consulting"
      subtitle="Modernize enterprise operations with advisory and implementation support across SAP landscapes and digital programs."
      highlights={[
        {
          title: 'BTP & S/4HANA Roadmaps',
          description: 'Define practical migration and innovation paths aligned to business priorities.',
        },
        {
          title: 'M&A / Divestiture Support',
          description: 'Handle transition complexity with integration playbooks and execution leadership.',
        },
        {
          title: 'Compliance Automation',
          description: 'Design controls and workflows for global invoicing and process compliance.',
        },
      ]}
      outcomes={[
        { value: '99.9%', label: 'Compliance confidence' },
        { value: '40%', label: 'Faster migrations' },
        { value: '20+ Years', label: 'Enterprise SAP expertise' },
      ]}
    />
  );
};

export default SapConsulting;
