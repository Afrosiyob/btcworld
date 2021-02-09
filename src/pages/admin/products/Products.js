import React, { useEffect } from "react";
import { Button, Col, Row, Table } from "antd";
import { useDispatch } from "react-redux";
import { getProducts } from "../../../store/products/action";
import { useTranslation } from "react-i18next";
import HelmetTitle from "../../../components/Halmet/HelmetTitle";

function Products() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const columns = [
    {
      title: t(`products.Titul`),
      dataIndex: "product",
      key: "product",
    },
    {
      title: t(`products.Titul2`),
      dataIndex: "price",
      key: "price",
    },

    {
      title: t(`products.Titul3`),
      key: "solded",
      dataIndex: "solded",
    },
    {
      title: t(`products.Titul4`),
      key: "reviews",
      dataIndex: "reviews",
    },

    {
      title: t(`products.Titul5`),
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
          <Button size="large"> {t(`products.Titul6`)} </Button>
        </Col>
      </Row>

      <Table columns={columns} scroll={{ x: "auto" }} />
    </div>
  );
}

export default Products;
