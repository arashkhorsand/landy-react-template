import React from 'react';
import { Row, Col, Card, Button } from 'antd';

const pricingData = [
  {
    title: 'Basic',
    price: '$10/month',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  {
    title: 'Standard',
    price: '$20/month',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
  },
  {
    title: 'Premium',
    price: '$30/month',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
  },
];

const Pricing: React.FC = () => (
  <div id="pricing" style={{ padding: '50px 0', textAlign: 'center' }}>
    <h2>Pricing Plans</h2>
    <Row gutter={[16, 16]} justify="center">
      {pricingData.map((plan, index) => (
        <Col xs={24} sm={12} md={8} key={index}>
          <Card title={plan.title} bordered={false}>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{plan.price}</p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <Button type="primary">Choose Plan</Button>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);

export default Pricing;
