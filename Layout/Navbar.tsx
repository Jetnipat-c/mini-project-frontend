import { useTheme } from "next-themes";
import { Switch } from "antd";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };
  return (
    <div>
      <Switch
        checkedChildren={theme}
        unCheckedChildren={theme}
        defaultChecked
        onClick={switchTheme}
      />
    </div>
  );
};
export default Navbar;
