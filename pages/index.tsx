import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Layout from "../Layout/layout";
import { UserStore } from "../store";
import LastTransaction from "../components/LastTransaction";
import CreateTransaction from "../components/CreateTransaction";
import withAuth from "../Layout/withAuth";
const Home = ({ token }) => {

  return (
    <Layout>
      <div className="flex justify-around flex-wrap">
        <div className="">
          <LastTransaction token={token}/>
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
  return { props: { token: req.cookies.token || "" , frame:"555"} };
}
