import React from "react";
import { Button, Col, Row, Table } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

function Products() {
  const columns = [
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },

    {
      title: "Solded",
      key: "solded",
      dataIndex: "solded",
    },
    {
      title: "Reviews",
      key: "reviews",
      dataIndex: "reviews",
    },

    {
      title: "Action",
      key: "action",
      dataIndex: "action",
    },
  ];
  return (
    <div>
      <Row
        gutter={[8, 8]}
        className="mb-3"
        justify="space-between"
        align="middle"
      >
        <Col>
          <h2 className="w-100 text-muted mb-3">Products</h2>
        </Col>

        <Col>
          <Button size="large"> add product</Button>
        </Col>
      </Row>

      <Table columns={columns} scroll={{ x: "auto" }} />
    </div>
  );
}

export default Products;
