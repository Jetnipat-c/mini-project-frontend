import { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="">
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
