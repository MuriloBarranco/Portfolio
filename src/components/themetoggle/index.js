import React, { useEffect, useState } from "react";

import { Icon, ThemeToggler } from "./styles";

const Themetoggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeToggler className="nav_ac" onClick={toggleTheme}>
      <Icon />
    </ThemeToggler>
  );
};

export default Themetoggle;
