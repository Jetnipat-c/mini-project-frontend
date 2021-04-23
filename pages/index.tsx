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
      <div className="grid grid-cols-1 md:grid-cols-2  w-full text-center">
        <div className="flex justify-center w-full">
          <LastTransaction token={token} />
        </div>
        <div className="flex justify-center w-full">
          <CreateTransaction />
        </div>
      </div>
    </Layout>
  );
};
export default withAuth(Home);

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "", frame: "555" } };
}
