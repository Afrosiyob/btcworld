import React from "react";
import { Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./SignIn.scss";
import { useDispatch } from "react-redux";
import { userLogin } from "../../../store/auth/action";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

function SignIn({ sendLoading }) {
  const [t] = useTranslation();

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
          placeholder= {t(`homeLogin.Titul3`)}
        />
      </Form.Item>

      <Form.Item
        label={t(`label.pass`)}
        name="password"
        rules={[
          {
            required: true,
            message:  t(`message.pass`),
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
