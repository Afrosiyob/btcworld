import React from "react";
import { Col, Form, Input, Row } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { useDispatch } from "react-redux";
import { regUser } from "../../../store/auth/action";

function SignUp() {
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
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input
              className="rounded-pill"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
        </Col>
        <Col md={12} sm={24}>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input
              className="rounded-pill"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="E-mail"
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[8, 8]}>
        <Col md={12} sm={24}>
          <Form.Item
            label="Password"
            name="password1"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              className="rounded-pill"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
        </Col>
        <Col md={12} sm={24}>
          <Form.Item
            label="Password"
            name="password2"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              className="rounded-pill"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[8, 8]}>
        <Col md={12} sm={24}>
          <Form.Item
            label="phone"
            name="phone"
            rules={[
              {
                required: true,
                message: "Phone",
              },
            ]}
          >
            <Input
              className="rounded-pill"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
        </Col>
        <Col md={12}>
          <Form.Item
            label="Parent"
            name="parent"
            rules={[
              {
                required: true,
                message: "Parent!",
              },
            ]}
          >
            <Input
              className="rounded-pill"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
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
          Sign Up
        </button>
      </Form.Item>
    </Form>
  );
}

export default SignUp;
