import React, { useState } from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import {
  Layout,
  Menu,
  Affix,
  Avatar,
  Image,
  Row,
  Col,
  Tooltip,
  Select,
} from "antd";
import Icon from "@ant-design/icons";
import "./Admin.scss";
import Statistics from "./statistics/Statistics";
import Plans from "./plans/Plans";
import Setting from "./setting/Setting";
import Team from "./team/Team";
import Products from "./products/Products";
import { useTranslation } from "react-i18next";

function Admin() {
  const HomeIcon = () => <span>🏠</span>;
  const ChartIcon = () => <span>📈</span>;
  const TeamIcon = () => <span>👩‍👩‍👧‍👧</span>;
  const ProductIcon = () => <span>🛍</span>;
  const PlansIcon = () => <span>🗒</span>;
  const SettingsIcon = () => <span>⚙️</span>;
  const { i18n, t } = useTranslation();
  const { Header, Content, Footer, Sider } = Layout;

  const [state, setState] = useState({
    collapsed: false,
  });

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setState({ ...state, collapsed });
  };

  const handleChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  const { collapsed } = state;
  const { Option } = Select;

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Affix offsetTop={0}>
          <Sider
            collapsible
            collapsed={collapsed}
            style={{
              overflowY: "auto",
              overflowX: "hidden",
              backgroundColor: "#14142B",
              height: "100vh",
            }}
            onCollapse={onCollapse}
          >
            <div className="logo">
              <h3 className="w-100 text-center m-0 py-3">BTC</h3>
            </div>

            <Menu theme="dark" defaultSelectedKeys={["2"]} mode="inline">
              <Menu.Item key="1" icon={<Icon component={HomeIcon} />}>
                <Link to="/"> {t(`Admin.Titul`)} </Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<Icon component={ChartIcon} />}>
                <Link to="/admin/statistics"> {t(`Admin.Titul2`)}</Link>
              </Menu.Item>

              <Menu.Item key="3" icon={<Icon component={TeamIcon} />}>
                <Link to="/admin/team"> {t(`Admin.Titul3`)}</Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<Icon component={ProductIcon} />}>
                <Link to="/admin/products"> {t(`Admin.Titul4`)}</Link>
              </Menu.Item>
              <Menu.Item key="5" icon={<Icon component={PlansIcon} />}>
                <Link to="/admin/plans"> {t(`Admin.Titul5`)}</Link>
              </Menu.Item>
              <Menu.Item key="6" icon={<Icon component={SettingsIcon} />}>
                <Link to="/admin/setting"> {t(`Admin.Titul6`)}</Link>
              </Menu.Item>
            </Menu>
          </Sider>
        </Affix>

        <Layout className="site-layout">
          <Affix offsetTop={0}>
            <Header
              className="site-layout-background shadow-lg "
              style={{ padding: 0 }}
            >
              <Row
                justify="end"
                align="middle"
                style={{ paddingRight: "16px" }}
              >
                <Col>
                  <Select
                    className="mr-3"
                    defaultValue={localStorage.getItem("i18nextLng")}
                    style={{ width: 80 }}
                    onChange={handleChange}
                  >
                    <Option value="uz">uz</Option>
                    <Option value="ru">ru</Option>
                  </Select>
                </Col>
                <Col>
                  <Tooltip placement="topLeft" title={"admin"}>
                    <Avatar
                      size={40}
                      src={
                        <Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      }
                    />
                  </Tooltip>
                </Col>
              </Row>
            </Header>
          </Affix>

          <Content style={{ margin: "16px" }}>
            <div style={{ padding: 24 }}>
              <Switch>
                <Redirect exact from="/admin" to="/admin/statistics" />
                <Route path="/admin/statistics" component={Statistics} />
                <Route path="/admin/plans" component={Plans} />
                <Route path="/admin/setting" component={Setting} />
                <Route path="/admin/team" component={Team} />
                <Route path="/admin/products" component={Products} />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Created by LEO BEE 🐝 ©2018
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default Admin;
