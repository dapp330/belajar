import React, { useState } from "react";
import { Menu, Image } from "antd";
import {
  HomeOutlined,
  AppstoreFilled,
  SettingFilled,
  WhatsAppOutlined,
  InstagramFilled,
  FacebookFilled,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const NavbarComponent = () => {
  const [current, setcurrent] = useState("home");
  const handleClick = (e) => {
    console.log("click", e);
    setcurrent({ current: e.key });
  };
  return (
    <Menu
      theme="dark"
      onClick={handleClick}
      selectedKeys={[]}
      mode="horizontal"
    >
      <Menu.Item key="home" icon={<HomeOutlined />}>
        HOME
      </Menu.Item>
      <Menu.Item key="galery" icon={<AppstoreFilled />}>
        Galery
      </Menu.Item>
      <SubMenu key="SubMenu" icon={<SettingFilled />} title="Contact">
        <Menu.Item
          key="Wa"
          icon={
            <WhatsAppOutlined style={{ fontSize: "150%", color: "#4bcb79" }} />
          }
        >
          0899654422
        </Menu.Item>
        <Menu.Item
          key="Ig"
          icon={<InstagramFilled style={{ fontSize: "150%" }} />}
        >
          <a
            href="https://www.instagram.com/"
            target="blank"
            rel="noopener referrer"
          >
            daffaaditya516
          </a>
        </Menu.Item>
        <Menu.Item
          key="Fb"
          icon={
            <FacebookFilled style={{ fontSize: "150%", color: "#0287cc" }} />
          }
        >
          <a
            href="https://id-id.facebook.com/"
            target="__blank"
            rel="noopener noreferrer"
          >
            daffaaditya
          </a>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default NavbarComponent;
