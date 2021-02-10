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
import HelmetTitle from "../../../components/Halmet/HelmetTitle";
import { useTranslation } from "react-i18next";
import Icon from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { InboxOutlined } from "@ant-design/icons";
import { editUser } from "../../../store/auth/action";

function Setting() {
  const UserIcon = () => <span>👨🏻‍💼</span>;
  const BalansIcon = () => <span>💰</span>;
  const TimeIcon = () => <span>⏱</span>;
  const UserIconSmall = () => <span>👤</span>;
  const { t } = useTranslation();

  const {
    userData: { user },
  } = useSelector((state) => state.userReducer);

  const { Dragger } = Upload;
  // const { user } = userData;
  const dispatch = useDispatch();
  const [state, setState] = useState({ fileListTwo: [] });
  const { fileListTwo } = state;
  const [form] = Form.useForm();

  if (user) {
    form.setFieldsValue({
      first_name: user.first_name,
      last_name: user.last_name,
      about_me: user.about_me,
      social_link: user.social_link,
      phone: user.phone,
      username: user.username,
      email: user.email,
      telegram: user.telegram,
    });
  }

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

  const onFinish = (values) => {
    // console.log("Success:", values);
    const { fileListTwo } = state;

    let formData = new FormData();

    formData.append("first_name", values.first_name);
    formData.append("last_name", values.last_name);

    formData.append("image", fileListTwo[0]);
    formData.append("about_me", values.about_me);
    formData.append("social_link", values.social_link);
    formData.append("telegram", values.telegram);
    formData.append("phone", values.phone);
    formData.append("email", values.email);
    formData.append("username", values.username);
    // formData.append("qr_code", values.qr_code);

    dispatch(editUser(formData));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <HelmetTitle title={t(`Admin.Titul6`)} />
      <h2 className="w-100 text-muted mb-3">{t(`Admin.Titul6`)}</h2>

      <Row gutter={[8, 8]}>
        <Col sm={24} md={6}>
          <h4 className="w-100 text-muted mb-3">{t(`settings.Titul`)}</h4>
          <Card>
            <Image src={user ? user.image : ""} />

            <Divider />
            <div className="user-information">
              <div className="information-item mb-2">
                <h6 className="text-muted ">
                  {t(`label.username`)} {user ? user.first_name : ""}
                </h6>
                <p className="font-weight-bolder ml-2">
                  <Icon component={UserIcon} className="text-muted mr-2" />{" "}
                  {user ? user.username : ""}
                </p>
              </div>
              <div className="information-item mb-2">
                <h6 className="text-muted">{t(`label.email`)}</h6>
                <p className="font-weight-bolder ml-2">
                  <i className="fas fa-at text-muted mr-2"></i>{" "}
                  {user ? user.email : ""}
                </p>
              </div>
              <div className="information-item mb-2">
                <h6 className="text-muted ">{t(`settings.Titul3`)}</h6>
                <p className="font-weight-bolder ml-2">
                  <Icon
                    component={BalansIcon}
                    className="fas fa-at text-muted mr-2"
                  />{" "}
                  {user ? user.balance : ""} sum
                </p>
              </div>{" "}
              <div className="information-item mb-2">
                <h6 className="text-muted ">{t(`settings.Titul4`)}</h6>
                <p className="font-weight-bolder ml-2">
                  <i className="fas fa-shield-alt text-muted mr-2"></i>{" "}
                  {user ? user.status_plan : ""}
                </p>
              </div>
              <div className="information-item mb-2">
                <h6 className="text-muted ">{t(`settings.Titul5`)}</h6>
                <p className="font-weight-bolder ml-2">
                  <Icon
                    component={TimeIcon}
                    className="fas fa-at text-muted mr-2"
                  />{" "}
                  {user ? user.date_joined : ""}{" "}
                </p>
              </div>
            </div>
          </Card>
        </Col>
        <Col sm={24} md={18}>
          <h4 className="w-100 text-muted mb-3">{t(`settings.Titul2`)}</h4>
          <Card>
            <Form
              form={form}
              name="basic"
              onFinish={onFinish}
              layout="vertical"
              onFinishFailed={onFinishFailed}
            >
              <Form.Item label={t(`settings.Titul8`)} name="image">
                <Dragger {...propsFileTwo}>
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">{t(`settings.Titul6`)}</p>
                  <p className="ant-upload-hint">{t(`settings.Titul7`)}</p>
                </Dragger>
              </Form.Item>

              <Row gutter={[8, 8]}>
                <Col sm={24} md={12}>
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
                      prefix={<UserIconSmall className="site-form-item-icon" />}
                    />
                  </Form.Item>
                </Col>
                <Col sm={24} md={12}>
                  <Form.Item
                    label={t(`settings.Titul9`)}
                    name="first_name"
                    rules={[
                      {
                        required: true,
                        message: t(`message.firstname`),
                      },
                    ]}
                  >
                    <Input
                      className="rounded-pill"
                      prefix={<UserIconSmall className="site-form-item-icon" />}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[8, 8]}>
                <Col sm={24} md={12}>
                  <Form.Item
                    label={t(`settings.Titul10`)}
                    name="last_name"
                    rules={[
                      {
                        required: true,
                        message: t(`message.lastname`),
                      },
                    ]}
                  >
                    <Input
                      className="rounded-pill"
                      prefix={<UserIconSmall className="site-form-item-icon" />}
                    />
                  </Form.Item>
                </Col>
                <Col sm={24} md={12}>
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
                      prefix={<UserIconSmall className="site-form-item-icon" />}
                      placeholder={t(`label.email`)}
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={[8, 8]}>
                <Col sm={24} md={12}>
                  <Form.Item
                    label={t(`settings.Titul11`)}
                    name="about_me"
                    rules={[
                      {
                        required: true,
                        message: t(`message.about_me`),
                      },
                    ]}
                  >
                    <Input.TextArea
                      className="rounded"
                      prefix={<UserIconSmall className="site-form-item-icon" />}
                    />
                  </Form.Item>
                </Col>
                <Col sm={24} md={12}>
                  <Form.Item
                    name="social_link"
                    label={t(`settings.Titul12`)}
                    rules={[
                      {
                        type: "email",
                        message: t(`message.social_link`),
                      },
                      {
                        required: true,
                        message: t(`message.social_link2`),
                      },
                    ]}
                  >
                    <Input
                      className="rounded-pill"
                      prefix={<UserIconSmall className="site-form-item-icon" />}
                      placeholder={t(`settings.Titul12`)}
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={[8, 8]}>
                <Col sm={24} md={12}>
                  <Form.Item
                    label={t(`team.Titul2`)}
                    name="telegram"
                    rules={[
                      {
                        required: true,
                        message: t(`message.telegram`),
                      },
                    ]}
                  >
                    <Input
                      className="rounded-pill"
                      prefix={<UserIconSmall className="site-form-item-icon" />}
                    />
                  </Form.Item>
                </Col>
                <Col sm={24} md={12}>
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
                      prefix={<UserIconSmall className="site-form-item-icon" />}
                    />
                  </Form.Item>
                </Col>
              </Row>

              {/* <Row gutter={[8, 8]}>
                <Col sm={24} md={12}>
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
                </Col>
              </Row> */}

              <Form.Item>
                <Button
                  type="primary"
                  className="rounded-pill"
                  htmlType="submit"
                >
                  {t(`settings.Titul13`)}
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
