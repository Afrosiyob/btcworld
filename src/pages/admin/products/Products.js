import React, { useEffect } from "react";
import { Button, Col, Row, Table } from "antd";
import { useDispatch } from "react-redux";
import { getProducts } from "../../../store/products/action";
import { useTranslation } from "react-i18next";
import HelmetTitle from "../../../components/Halmet/HelmetTitle";

function Products() {
  const { t }= useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

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
    <HelmetTitle title={t(`Admin.Titul4`)} />
      <Row
        gutter={[8, 8]}
        className="mb-3"
        justify="space-between"
        align="middle"
      >
        <Col>
          <h2 className="w-100 text-muted mb-3">{t(`Admin.Titul4`)}</h2>
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
