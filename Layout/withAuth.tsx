import React, { useEffect, useState } from "react";
import Router from "next/router";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { UserStore } from "../store";
import axios from "axios";

export default (WarpComponent) => {
  const withAuth = (props) => {
    const [isAuthen, setIsAuthen] = useState(false);
    const antIcon = <LoadingOutlined style={{ fontSize: 45 }} spin />;
    useEffect(() => {
      checkAuthentication();
    }, []);
    const checkAuthentication = async () => {
      let token = await localStorage.getItem("token");
      if (token) {
        let res = await axios.get(`http://localhost:6969/api/auth/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res && res.status === 200) {
          setIsAuthen(true);
          //Router.push("/Home");
        } else {
          localStorage.removeItem("token");
          Router.push("/Signin");
        }
      } else {
        Router.push("/Signin");
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
