import DetailLayout from '../DetailLayout';

const SpidexPlatform = () => {
  return (
    <DetailLayout
      category="Solution"
      title="SPIDEX IoT Platform"
      subtitle="Connect any device to cloud infrastructure with secure onboarding, lifecycle management, and integration-ready APIs."
      highlights={[
        {
          title: 'Device Management',
          description: 'Provision, monitor, diagnose, and update gateways and endpoints at scale.',
        },
        {
          title: 'Solution Stack',
          description: 'Accelerate delivery with reusable platform modules for telemetry, alerts, and workflows.',
        },
        {
          title: 'Identity & Access',
          description: 'Protect platform resources through secure API access and policy-based controls.',
        },
      ]}
      outcomes={[
        { value: '45 Days', label: 'Pilot-ready implementation' },
        { value: 'Scalable', label: 'Multi-device architecture' },
        { value: 'Secure', label: 'Enterprise API posture' },
      ]}
    />
  );
};

export default SpidexPlatform;
