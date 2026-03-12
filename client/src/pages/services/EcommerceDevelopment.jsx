import DetailLayout from '../DetailLayout';

const EcommerceDevelopment = () => {
  return (
    <DetailLayout
      category="Service"
      title="E-Commerce Development"
      subtitle="Launch scalable B2B and B2C commerce platforms connected to ERP, logistics, and real-world fulfillment."
      highlights={[
        {
          title: 'Marketplace Architecture',
          description: 'Build extensible commerce foundations tailored to growth and multi-channel expansion.',
        },
        {
          title: 'ERP & Logistics Integration',
          description: 'Unify product, order, and shipment data across backend business systems.',
        },
        {
          title: 'Performance Optimization',
          description: 'Improve storefront speed, search relevance, and end-to-end buyer experience.',
        },
      ]}
      outcomes={[
        { value: '3x', label: 'Conversion uplift potential' },
        { value: '50+', label: 'Integration patterns supported' },
        { value: 'Scalable', label: 'Production-ready storefronts' },
      ]}
    />
  );
};

export default EcommerceDevelopment;
