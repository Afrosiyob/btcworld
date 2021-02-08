import React from "react";
import { Col, Form, Input, Row } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { useDispatch } from "react-redux";
import { regUser } from "../../../store/auth/action";
import { useTranslation } from "react-i18next";

function SignUp({ regLoading, toggleModal }) {
  const [t] = useTranslation();

  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log("Success:", values);

    const formData = new FormData();

    formData.append("username", values.username);
    formData.append("password1", values.password1);
    formData.append("password2", values.password2);
    formData.append("email", values.email);
    formData.append("phone", values.phone);
    formData.append("parent", values.parent);

    toggleModal();

    dispatch(regUser(formData));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      className="sign-in-form"
      name="basic"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Row gutter={[8, 8]}>
        <Col md={12} sm={24}>
          <Form.Item
            label={t(`label.username`)}
            name="username"
            rules={[
              {
                required: true,
                message: t(`message.username`),
              },
            ]}
          >
            <Input
              className="rounded-pill"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder={t(`homeLogin.Titul3`)}
            />
          </Form.Item>
        </Col>
        <Col md={12} sm={24}>
          <Form.Item
            name="email"
            label={t(`label.email`)}
            rules={[
              {
                type: "email",
                message: t(`message.email`),
              },
              {
                required: true,
                message: t(`message.email2`),
              },
            ]}
          >
            <Input
              className="rounded-pill"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder={t(`homeLogin.Titul5`)}
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[8, 8]}>
        <Col md={12} sm={24}>
          <Form.Item
            label={t(`label.pass`)}
            name="password1"
            rules={[
              {
                required: true,
                message: t(`message.pass`),
              },
            ]}
          >
            <Input.Password
              className="rounded-pill"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder={t(`homeLogin.Titul4`)}
            />
          </Form.Item>
        </Col>
        <Col md={12} sm={24}>
          <Form.Item
            label={t(`label.repass`)}
            name="password2"
            rules={[
              {
                required: true,
                message: t(`message.pass`),
              },
            ]}
          >
            <Input.Password
              className="rounded-pill"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder={t(`homeLogin.Titul6`)}
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[8, 8]}>
        <Col md={12} sm={24}>
          <Form.Item
            label={t(`label.phone`)}
            name="phone"
            rules={[
              {
                required: true,
                message: t(`message.phone`),
              },
            ]}
          >
            <Input
              className="rounded-pill"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder={t(`homeLogin.Titul7`)}
            />
          </Form.Item>
        </Col>
        <Col md={12}>
          <Form.Item
            label={t(`label.partner`)}
            name="parent"
            rules={[
              {
                required: true,
                message: t(`message.partner`),
              },
            ]}
          >
            <Input
              className="rounded-pill"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder={t(`homeLogin.Titul8`)}
            />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <button
          style={{ width: "100%" }}
          className="form-btn px-3 py-1 rounded-pill"
          htmlType="submit"
        >
          {t(`homeLogin.Titul2`)}
        </button>
      </Form.Item>
    </Form>
  );
}

export default SignUp;
