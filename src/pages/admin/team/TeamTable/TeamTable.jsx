import React from "react";

import { Table } from "antd";
import AntModal from "./AntModal/AntModal";
import TeamData from "../TeamData/TeamData";
import { useTranslation } from "react-i18next";

// rowSelection objects indicates the need for row selection

export function TeamTable({ treeData, getLoading }) {
  const { t }= useTranslation();

  const columns = [
    {
      title: t(`label.username`),
      dataIndex: "login",
      key: "login",
      fixed: "left",
    },
    {
      title: t(`team.Titul2`),
      dataIndex: "telegram",
      key: "telegram",
    },
    {
      title: t(`label.email`),
      dataIndex: "link",
      key: "link",
    },

    {
      title: t(`team.Titul3`),
      dataIndex: "partners",
      key: "partners",
      width: "10%",
    },
    {
      title: t(`homeFooter.Titul3`),
      dataIndex: "about",
      key: "about",
      width: "10%",
      fixed: "right",
    },
  ];

  let fakeData = [];

  const createChildrens = (items) => {
    let newData = [];

    items.forEach((item, i) => {
      newData.push({
        key: item.id,
        login: (
          <TeamData
            image={process.env.REACT_APP_SERVER_URL + item.image}
            name={item.username}
          />
        ),
        link: item.email,
        telegram: item.telegram,
        username: item.username,
        about: (
          <AntModal
            userEmail={item.email}
            userLink={item.social_link}
            userName={item.username}
            userTelegram={item.telegram}
            userImage={item.image}
          />
        ),
        children:
          item.children && item.children.length
            ? createChildrens(item.children)
            : null,
      });
    });

    return newData;
  };

  if (treeData && treeData.children) {
    treeData.children.forEach((item, index) => {
      fakeData.push({
        key: item.id,
        login: (
          <TeamData
            image={process.env.REACT_APP_SERVER_URL + item.image}
            name={item.username}
          />
        ),
        link: item.email,
        telegram: item.telegram,
        username: item.username,
        about: (
          <AntModal
            userEmail={item.email}
            userLink={item.social_link}
            userName={item.username}
            userTelegram={item.telegram}
            userImage={item.image}
          />
        ),
        children:
          item.children && item.children.length
            ? createChildrens(item.children)
            : null,
      });
    });
  }

  return (
    <>
      <Table
        columns={columns}
        dataSource={fakeData}
        loading={getLoading}
        scroll={{ x: "auto" }}
      />
    </>
  );
}
