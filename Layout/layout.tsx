import { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="text-center">
      <Navbar />

      <h1 className="text:2xl">Dark mode with Tailwind and Next- themes</h1>
      <div>{children}</div>
    </div>
  );
}
