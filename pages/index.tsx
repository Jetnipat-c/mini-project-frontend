import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Layout from "../Layout/layout";
import { UserStore } from "../store";
import LastTransaction from "../components/LastTransaction";
import CreateTransaction from "../components/CreateTransaction";
import withAuth from "../Layout/withAuth";
const Home = ({ token }) => {
  //console.log("token index: ",token)
  const { setUsername } = UserStore();

  const [data, setData] = useState();
  console.log("data : ", data);

  useEffect(() => {
    profileUser();
  }, []);

  const profileUser = async () => {
    try {
      // console.log('token: ', token)
      const users = await axios.get(`http://localhost:6969/api/auth/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (users) {
        setUsername(users.data.username);
        console.log(users.data.id);
        await getTransactions(users.data.id);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getTransactions = async (id) => {
    try {
      const transaction = await axios.get(
        `http://localhost:6969/api/transaction/byuser/${id}`
      );
      console.log(transaction.data);
      setData(transaction.data);
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
export default withAuth(Home);

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
