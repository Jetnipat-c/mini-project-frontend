import Layout from "../Layout/layout";
import withAuth from "../Layout/withAuth";
import { UserStore } from "../store";
import { useEffect, useState } from "react";
import axios from "axios";
import GetTransaction from "../components/GetTransaction";
import ManageTransaction from "../components/ManageTransaction";
const Admin = ({ token }) => {

  return (
    <div className="">
      <Layout>
        <div className="flex justify-around flex-wrap">
          <div className="">
            <GetTransaction token={token}/>
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
