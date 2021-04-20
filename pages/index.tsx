import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Layout from "../Layout/layout";
import { UserStore } from "../store";
const Home = ({ token }) => {
  
  
  const { setUsername, setToken } = UserStore()
  useEffect(() => {
    profileUser();
  }, []);

  const profileUser = async () => {
    try {
      // console.log('token: ', token)
      const users = await axios.get(`http://localhost:6969/api/auth/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // console.log('user: ', users.data)
      //setUser(users.data.username);
      setUsername(users.data.username)
      setToken(token)
    } catch (e) {
      console.log(e);
    }
  };

  return <Layout >index</Layout>;
};
export default Home;

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
