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
import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";

import "./Admin.scss";
import Statistics from "./statistics/Statistics";
import Plans from "./plans/Plans";
import Setting from "./setting/Setting";
import Team from "./team/Team";
import Products from "./products/Products";

function Admin() {
  const { Header, Content, Footer, Sider } = Layout;

  const [state, setState] = useState({
    collapsed: false,
  });

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setState({ ...state, collapsed });
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
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
              <svg
                style={{ width: "100%", margin: "20px 0px" }}
                width="157"
                height="35"
                viewBox="0 0 157 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.54 10.24C26.612 8.288 25.268 6.784 23.508 5.728C21.748 4.64 19.7 4.096 17.364 4.096C15.028 4.096 12.916 4.64 11.028 5.728C9.172 6.784 7.7 8.32 6.612 10.336C5.556 12.32 5.028 14.624 5.028 17.248C5.028 19.872 5.556 22.176 6.612 24.16C7.7 26.144 9.172 27.68 11.028 28.768C12.916 29.824 15.028 30.352 17.364 30.352C20.628 30.352 23.316 29.376 25.428 27.424C27.54 25.472 28.772 22.832 29.124 19.504H15.78V15.952H33.78V19.312C33.524 22.064 32.66 24.592 31.188 26.896C29.716 29.168 27.78 30.976 25.38 32.32C22.98 33.632 20.308 34.288 17.364 34.288C14.26 34.288 11.428 33.568 8.868 32.128C6.308 30.656 4.276 28.624 2.772 26.032C1.3 23.44 0.564 20.512 0.564 17.248C0.564 13.984 1.3 11.056 2.772 8.464C4.276 5.84 6.308 3.808 8.868 2.368C11.428 0.895998 14.26 0.159998 17.364 0.159998C20.916 0.159998 24.052 1.04 26.772 2.8C29.524 4.56 31.524 7.04 32.772 10.24H27.54ZM74.4914 0.783998V34H70.1234V9.232L59.0834 34H56.0114L44.9234 9.184V34H40.5554V0.783998H45.2594L57.5474 28.24L69.8354 0.783998H74.4914ZM116.835 0.783998V34H112.467V9.232L101.427 34H98.3551L87.2671 9.184V34H82.8991V0.783998H87.6031L99.8911 28.24L112.179 0.783998H116.835ZM150.587 10.24C149.659 8.288 148.315 6.784 146.555 5.728C144.795 4.64 142.747 4.096 140.411 4.096C138.075 4.096 135.963 4.64 134.075 5.728C132.219 6.784 130.747 8.32 129.659 10.336C128.603 12.32 128.075 14.624 128.075 17.248C128.075 19.872 128.603 22.176 129.659 24.16C130.747 26.144 132.219 27.68 134.075 28.768C135.963 29.824 138.075 30.352 140.411 30.352C143.675 30.352 146.363 29.376 148.475 27.424C150.587 25.472 151.819 22.832 152.171 19.504H138.827V15.952H156.827V19.312C156.571 22.064 155.707 24.592 154.235 26.896C152.763 29.168 150.827 30.976 148.427 32.32C146.027 33.632 143.355 34.288 140.411 34.288C137.307 34.288 134.475 33.568 131.915 32.128C129.355 30.656 127.323 28.624 125.819 26.032C124.347 23.44 123.611 20.512 123.611 17.248C123.611 13.984 124.347 11.056 125.819 8.464C127.323 5.84 129.355 3.808 131.915 2.368C134.475 0.895998 137.307 0.159998 140.411 0.159998C143.963 0.159998 147.099 1.04 149.819 2.8C152.571 4.56 154.571 7.04 155.819 10.24H150.587Z"
                  fill="white"
                />
              </svg>
            </div>

            <Menu theme="dark" defaultSelectedKeys={["2"]} mode="inline">
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                <Link to="/"> home </Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
                <Link to="/admin/statistics">Statistics</Link>
              </Menu.Item>

              <Menu.Item key="3" icon={<DesktopOutlined />}>
                <Link to="/admin/team">team</Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<DesktopOutlined />}>
                <Link to="/admin/products">products</Link>
              </Menu.Item>
              <Menu.Item key="5" icon={<DesktopOutlined />}>
                <Link to="/admin/plans">plans</Link>
              </Menu.Item>
              <Menu.Item key="6" icon={<DesktopOutlined />}>
                <Link to="/admin/setting">setting</Link>
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
                    defaultValue="uz"
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
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default Admin;
