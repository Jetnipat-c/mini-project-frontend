import React, { useEffect, useState } from "react";
import Router from "next/router";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { UserStore } from "../store";
export default (WarpComponent) => {
  const withAuth = (props) => {
    const { username, token } = UserStore();
    const [isAuthen, setIsAuthen] = useState(false);
    const antIcon = <LoadingOutlined style={{ fontSize: 45 }} spin />;

    const checkAuthentication = async () => {
      if (token !== null && token !== "") {
        setIsAuthen(true);
      } else {
        Router.push("/signup");
      }
    };
    return (
      <>
        {isAuthen ? (
          <WarpComponent {...props} />
        ) : (
          <div>
            <Spin indicator={antIcon} />
          </div>
        )}
      </>
    );
  };
  return withAuth
};
