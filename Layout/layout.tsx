import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useTheme } from "next-themes";

export default function Layout({ children }) {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "Pink" : "light");
    }
  };
  return (
    <div className="text-center">
      <Navbar />
      <h1 className="text:2xl">Dark mode with Tailwind and Next- themes</h1>
      <div>{children}</div>
      <button onClick={switchTheme}>Change theme</button>
    </div>
  );
}
