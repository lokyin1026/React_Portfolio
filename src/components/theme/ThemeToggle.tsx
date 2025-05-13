import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import { IconButton } from "@mui/material";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      sx={{ mr: 0.5 }}
      onClick={toggleTheme}
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </IconButton>
  );
};

export default ThemeToggle;
