import Layout from "../Layout/layout";
import withAuth from "../Layout/withAuth";
import { UserStore } from "../store";
import { useEffect, useState } from "react";
import axios from "axios";
import GetTransaction from "../components/GetTransaction";
import ManageTransaction from "../components/ManageTransaction";
const Admin = ({ token }) => {
  const { setUsername } = UserStore();
  useEffect(() => {
    profileUser();
  }, []);

  const profileUser = async () => {
    try {
      const users = await axios.get(`http://localhost:6969/api/auth/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsername(users.data.username);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="">
      <Layout>
        <div className="flex justify-around flex-wrap">
          <div className="">
            <GetTransaction />
          </div>
          <div className="">
            <ManageTransaction />
          </div>
        </div>
      </Layout>
    </div>
  );
};
export default withAuth(Admin);

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
