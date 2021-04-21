import { useTheme } from "next-themes";
import { Menu, Dropdown, Switch } from "antd";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { UserStore } from "../store";
import Router from "next/router";
const Navbar = () => {
  const { username, token } = UserStore();
  const [visible, setVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  };
  const handleMenuClick = (e) => {
    if (e.key === "3") {
      setVisible(false);
    }
  };
  const handleVisibleChange = (flag) => {
    setVisible(flag);
  };
  const logout = async () => {
    let result = await axios
      .get("http://localhost:6969/api/auth/logout", { withCredentials: true })
      .then(() => {
        Router.push("/signin");
      }).catch ((e)=> {
        console.log(e)
      }) 
    //console.log(result);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" onClick={() => Router.push("/")}>หน้าหลัก</Menu.Item>
      <Menu.Item key="2" onClick={() => Router.push("/admin")}>
        จัดการบัญชี
      </Menu.Item>
      <Menu.Item key="3" onClick={logout}>
        ออกจากระบบ
      </Menu.Item>
      <Menu.Item key="4">
        <Switch
          checkedChildren={theme}
          unCheckedChildren={theme}
          defaultChecked
          onClick={switchTheme}
        />
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="flex justify-between items-center  bg-white text-bgx dark:bg-bgnav dark:text-primary">
      <div className="pl-5  items-center justify-self-start flex-grow">
        <Image
          src="/logo-cut.png"
          alt="Picture of the logo"
          width={100}
          height={50}
        />
      </div>
      <div className="pr-5">
        <span className="pr-5 text-md text-primary font-semibold">
          {username}
        </span>
        <Dropdown
          overlay={menu}
          onVisibleChange={handleVisibleChange}
          visible={visible}
        >
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            <MenuOutlined style={{ fontSize: "20px" }} />
          </a>
        </Dropdown>
      </div>
      <div className="pr-5"></div>
    </div>
  );
};
export default Navbar;
