import { Button, Card, Col, Radio, Modal } from "antd";

import React, { useState } from "react";
import ClickLogo from "../../../../assets/images/clickModal.png";
import PaymeLogo from "../../../../assets/images/payme.png";
function PlanCard({ item, index, getLoading }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [value, setValue] = useState("click");
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onChange = (e) => {
    setValue(e.target.value);
    console.log(" cahnge ====================================");
    console.log(value);
    console.log("====================================");
  };
  return (
    <Col sm={12} md={8} lg={6}>
      <Card
        loading={getLoading}
        className="shadow-sm text-center rounded"
        headStyle={{
          backgroundColor: "#002140",
          textTransform: "uppercase",
          color: "white",
        }}
        title={item.name}
        bordered={false}
      >
        <h2>
          {item.price} <small>so'm</small>
        </h2>
        <p>~ {item.description}</p>
        <button className="header-btn rounded-pill px-5" onClick={showModal}>
          Sotib olish
        </button>
      </Card>
      <Modal
        centered
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Bekor qilish
          </Button>,
          <Button
            key="submit"
            type="primary"
            //   loading={modalLoading}
            onClick={handleOk}
          >
            Sotib olish
          </Button>,
        ]}
      >
        <Radio.Group
          onChange={onChange}
          value={value}
          size="large"
          className="w-100 d-flex justify-content-center"
        >
          <Radio.Button value="click" style={{ margin: "10px" }}>
            <img
              style={{ width: "80px", height: "auto" }}
              src={ClickLogo}
              alt="click"
            />
          </Radio.Button>
          <Radio.Button value="payme" style={{ margin: "10px" }}>
            <img
              style={{ width: "80px", height: "auto" }}
              src={PaymeLogo}
              alt="payme"
            />
          </Radio.Button>
        </Radio.Group>
      </Modal>
    </Col>
  );
}

export default PlanCard;
