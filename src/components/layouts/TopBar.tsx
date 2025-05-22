import { Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { About } from "../pages/About";
import { Projects } from "../pages/Projects";
import { Contact } from "../pages/Contact";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "../theme/ThemeToggle";

function TopBar() {
  const [activePage, setActivePage] = useState("about"); // Default to 'home'

  const renderPage = () => {
    switch (activePage) {
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <>
      <div className="tw:top-1 tw:flex tw:items-center tw:justify-between">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          sx={{ ml: 0.5 }}
        >
          <MenuIcon />
        </IconButton>
        <div className="tw:inline-flex tw:gap-2">
          <Button color="inherit" onClick={() => setActivePage("about")}>
            About
          </Button>
          <Button color="inherit" onClick={() => setActivePage("projects")}>
            Projects
          </Button>
          <Button color="inherit" onClick={() => setActivePage("contact")}>
            Contact
          </Button>
        </div>
        <ThemeToggle />
      </div>
      <div className="tw:p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage} // Unique key to trigger animation on page change
            initial={{ opacity: 0, x: 20 }} // Start slightly transparent and shifted right
            animate={{ opacity: 1, x: 0 }} // Fade in and slide to position
            exit={{ opacity: 0, x: -20 }} // Fade out and slide left when exiting
            transition={{ duration: 0.3 }} // Animation duration (0.3 seconds)
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default TopBar;
