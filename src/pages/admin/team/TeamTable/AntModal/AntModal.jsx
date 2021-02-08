import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Modal, Button } from "antd";

function AntModal({ userEmail, userLink, userName, userTelegram, userImage }) {
  const { t }= useTranslation();
  const [visible, setvisible] = useState(false);

  const showModal = () => {
    setvisible(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setvisible(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setvisible(false);
  };

  return (
    <div>
      <Button onClick={showModal}>{t(`team.Titul4`)}</Button>
      <Modal
        centered={true}
        title={userName}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p> {userEmail} </p>
        <p> {userLink} </p>
        <p> {userTelegram} </p>
      </Modal>
    </div>
  );
}

export default AntModal;
