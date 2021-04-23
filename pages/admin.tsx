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
        <div className="grid grid-cols-1 md:grid-cols-2  w-full text-center">
          <div className="flex justify-center w-full">
            <GetTransaction token={token}/>
          </div>
          <div className="flex justify-center w-full">
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
