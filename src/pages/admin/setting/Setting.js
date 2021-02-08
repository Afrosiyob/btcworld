import {
  Card,
  Col,
  Divider,
  Image,
  Row,
  Form,
  Input,
  Button,
  Upload,
} from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { UserOutlined, InboxOutlined } from "@ant-design/icons";
import HelmetTitle from "../../../components/Halmet/HelmetTitle";
import { useTranslation } from "react-i18next";

function Setting() {
  const { t }= useTranslation();
  const { userData } = useSelector((state) => state.userReducer);
  const { Dragger } = Upload;
  const { user } = userData;
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [state, setState] = useState({ fileListTwo: [] });
  const { fileListTwo } = state;
  const propsFileTwo = {
    listType: "picture",
    multiple: false,
    maxCount: 1,

    onRemove: (file) => {
      setState((state) => {
        const index = state.fileListTwo.indexOf(file);
        const newFileList = state.fileListTwo.slice();
        newFileList.splice(index, 1);
        return {
          fileListTwo: newFileList,
        };
      });
    },
    beforeUpload: (file) => {
      setState((state) => ({
        fileListTwo: [...state.fileListTwo, file],
      }));
      return false;
    },
    fileListTwo,
  };

  return (
    <div>
    <HelmetTitle title={t(`Admin.Titul6`)} />
      <h2 className="w-100 text-muted mb-3">Products</h2>

      <Row gutter={[8, 8]}>
        <Col sm={24} md={6}>
          <h4 className="w-100 text-muted mb-3">Basic info</h4>
          <Card>
            <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />

            <Divider />
            <div className="user-information">
              <div className="information-item mb-2">
                <h6 className="text-muted ">Username {user.first_name}</h6>
                <p className="font-weight-bolder ml-2">
                  <i className="fas fa-user text-muted mr-2"></i>{" "}
                  {user.username}
                </p>
              </div>
              <div className="information-item mb-2">
                <h6 className="text-muted">Email</h6>
                <p className="font-weight-bolder ml-2">
                  <i className="fas fa-at text-muted mr-2"></i> {user.email}
                </p>
              </div>
              <div className="information-item mb-2">
                <h6 className="text-muted ">Balans</h6>
                <p className="font-weight-bolder ml-2">
                  <i className="fas fa-wallet text-muted mr-2"></i>{" "}
                  {user.balance} sum
                </p>
              </div>{" "}
              <div className="information-item mb-2">
                <h6 className="text-muted ">Status</h6>
                <p className="font-weight-bolder ml-2">
                  <i className="fas fa-shield-alt text-muted mr-2"></i>{" "}
                  {user.status_plan}
                </p>
              </div>
              <div className="information-item mb-2">
                <h6 className="text-muted ">Time</h6>
                <p className="font-weight-bolder ml-2">
                  <i className="fas fa-user-clock text-muted mr-2"></i>{" "}
                  {user.date_joined}{" "}
                </p>
              </div>
            </div>
          </Card>
        </Col>
        <Col sm={24} md={18}>
          <h4 className="w-100 text-muted mb-3">Changing</h4>
          <Card>
            <Form
              name="basic"
              onFinish={onFinish}
              layout="vertical"
              onFinishFailed={onFinishFailed}
            >
              <Form.Item label="User Photo" name="profile_image">
                <Dragger {...propsFileTwo}>
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from
                    uploading company data or other band files
                  </p>
                </Dragger>
              </Form.Item>

              <Row gutter={[8, 8]}>
                <Col sm={24} md={12}>
                  <Form.Item
                    label="username"
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
                    />
                  </Form.Item>
                </Col>
                <Col sm={24} md={12}>
                  <Form.Item
                    label="first_name"
                    name="first_name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your first_name!",
                      },
                    ]}
                  >
                    <Input
                      className="rounded-pill"
                      prefix={<UserOutlined className="site-form-item-icon" />}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[8, 8]}>
                <Col sm={24} md={12}>
                  <Form.Item
                    label="last_name"
                    name="last_name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your last_name!",
                      },
                    ]}
                  >
                    <Input
                      className="rounded-pill"
                      prefix={<UserOutlined className="site-form-item-icon" />}
                    />
                  </Form.Item>
                </Col>
                <Col sm={24} md={12}>
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
                <Col sm={12} md={24}>
                  <Form.Item
                    label="about_me"
                    name="about_me"
                    rules={[
                      {
                        required: true,
                        message: "Please input your about_me!",
                      },
                    ]}
                  >
                    <Input
                      className="rounded-pill"
                      prefix={<UserOutlined className="site-form-item-icon" />}
                    />
                  </Form.Item>
                </Col>
                <Col sm={12} md={24}>
                  <Form.Item
                    name="social_link"
                    label="E-social_link"
                    rules={[
                      {
                        type: "social_link",
                        message: "The input is not valid E-social_link!",
                      },
                      {
                        required: true,
                        message: "Please input your E-social_link!",
                      },
                    ]}
                  >
                    <Input
                      className="rounded-pill"
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="E-social_link"
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={[8, 8]}>
                <Col sm={12} md={24}>
                  <Form.Item
                    label="telegram"
                    name="telegram"
                    rules={[
                      {
                        required: true,
                        message: "Please input your telegram!",
                      },
                    ]}
                  >
                    <Input
                      className="rounded-pill"
                      prefix={<UserOutlined className="site-form-item-icon" />}
                    />
                  </Form.Item>
                </Col>
                <Col sm={12} md={24}></Col>
              </Row>

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
                  prefix={<UserOutlined className="site-form-item-icon" />}
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Setting;
