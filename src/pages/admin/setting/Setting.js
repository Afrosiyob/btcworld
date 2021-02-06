import { Card, Col, Descriptions, Image, Row } from "antd";
import React from "react";

function Setting() {
  return (
    <div>
      <h2 className="w-100 text-muted mb-3">Products</h2>

      <Row gutter={[8, 8]}>
        <Col sm={24} md={6}>
          <h4 className="w-100 text-muted mb-3">Basic info</h4>
          <Card>
            <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
            <Descriptions title="User Info" layout="vertical" bordered>
              <Descriptions.Item label="Product">
                Cloud Database
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>
        <Col sm={24} md={18}>
          <h4 className="w-100 text-muted mb-3">Changing</h4>
          <Card>wefew</Card>
        </Col>
      </Row>
    </div>
  );
}

export default Setting;
