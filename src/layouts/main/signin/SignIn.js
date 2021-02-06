import React from "react";
import { Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./SignIn.scss";
import { useDispatch } from "react-redux";
import { userLogin } from "../../../store/auth/action";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";


function SignIn() {
  const [ t ] = useTranslation();

  const dispatch = useDispatch();

  let history = useHistory();

  const onFinish = (values) => {
    console.log("Success:", values);

    const formData = new FormData();

    formData.append("username", values.username);
    formData.append("password", values.password);

    dispatch(userLogin(formData, history));
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

      <Form.Item
        label="Password"
        name="password"
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

      <Form.Item>
        <button
          style={{ width: "100%" }}
          className="form-btn px-3 py-1 rounded-pill"
          htmlType="submit"
        >
          {t(`homeLogin.Titul`)}
        </button>
      </Form.Item>
    </Form>
  );
}

export default SignIn;
