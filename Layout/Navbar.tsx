import { useTheme } from "next-themes";
import { Switch } from "antd";
import { useEffect, useState } from "react";
import Image from "next/image";
const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  };
  return (
    <div className="flex justify-between items-center bg-bgnav">
      <div className="pl-5  items-center justify-self-start flex-grow">
        <Image
          src="/logo-cut.png"
          alt="Picture of the logo"
          width={100}
          height={50}
        />
      </div>
      <div className="pr-5">username</div>
      <div className="pr-5">
        <Switch
          checkedChildren={theme}
          unCheckedChildren={theme}
          defaultChecked
          onClick={switchTheme}
        />
      </div>
    </div>
  );
};
export default Navbar;
