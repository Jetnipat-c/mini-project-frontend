import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Layout from "../Layout/layout";
import { UserStore } from "../store";
import LastTransaction from "../components/LastTransaction";
import CreateTransaction from "../components/CreateTransaction";
const Home = ({ token }) => {
  //console.log("token index: ",token)
  const { setUsername } = UserStore();
  useEffect(() => {
    profileUser();
  }, []);

  const profileUser = async () => {
    try {
      // console.log('token: ', token)
      const users = await axios.get(`http://localhost:6969/api/auth/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsername(users.data.username);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Layout>
      <div className="flex justify-around flex-wrap">
        <div className="">
          <LastTransaction />
        </div>
        <div className="">
          <CreateTransaction />
        </div>
      </div>
    </Layout>
  );
};
export default Home;

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
