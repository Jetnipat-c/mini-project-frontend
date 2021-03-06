import React, { useEffect, useState } from "react";
import Router from "next/router";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { UserStore } from "../store";
import axios from "axios";

export default (WarpComponent) => {
  const withAuth = (props) => {
    const { id, setId, setUsername } = UserStore();
    const [isAuthen, setIsAuthen] = useState(false);
    const [token, setToken] = useState<string>(props?.token || '');
    const antIcon = <LoadingOutlined style={{ fontSize: 45 }} spin />;
    useEffect(() => {
      checkAuthentication(token);
    }, []);
    const checkAuthentication = async (token) => {
      if (token) {
        let res = await axios.get(`http://localhost:6969/api/auth/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res && res.status === 200) {
          setIsAuthen(true);
          setId(res.data.id)
          setUsername(res.data.username)
          //Router.push("/Home");
        } else {
          localStorage.removeItem("token");
          Router.push("/signin");
        }
      } else {
        Router.push("/signin");
      }
    };
    return (
      <>
        {isAuthen ? (
          <div className="text-white">
            <WarpComponent {...props} />
          </div>
        ) : (
          <div className="text-center h-screen">
            <Spin indicator={antIcon} />
          </div>
        )}
      </>
    );
  };
  return withAuth;
};
