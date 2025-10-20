import { useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { GlobalStyles } from "./GlobalStyles";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Works from "./pages/Works";
import { darkTheme, lightTheme } from "./theme";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const themeState = !prev;
      localStorage.setItem("darkMode", themeState);
      return themeState;
    });
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Router>
        <HeaderPathProp toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* <FooterPathProp /> */}
        {/* <FooterPathProp toggleTheme={toggleTheme} isDarkMode={isDarkMode} /> */}
      </Router>
    </ThemeProvider>
  );
}

function HeaderPathProp({ toggleTheme, isDarkMode }) {
  const location = useLocation();
  return (
    <Header
      currentPath={location.pathname}
      toggleTheme={toggleTheme}
      isDarkMode={isDarkMode}
    />
  );
}

function FooterPathProp() {
  const location = useLocation();

  return (
    <Footer
      currentPath={location.pathname}
      // toggleTheme={toggleTheme}
      // isDarkMode={isDarkMode}
    />
  );
}
