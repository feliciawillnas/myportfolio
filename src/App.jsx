import { useRef, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SvgFilters from "./components/SvgFilters";
import { GlobalStyles } from "./GlobalStyles";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Works from "./pages/Works";
import { darkTheme, lightTheme } from "./theme";

export default function App() {
  // Cursor state
  const starRef = useRef(null);
  const [cursorActive, setCursorActive] = useState(false);

  // Darkmode state
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
      <SvgFilters />
      <GlobalStyles />
      <Router>
        <HeaderPathProp
          toggleTheme={toggleTheme}
          isDarkMode={isDarkMode}
          onStarRef={(node) => (starRef.current = node)}
          cursorActive={cursorActive}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/contact"
            element={
              <Contact starRef={starRef} onCursorActive={setCursorActive} />
            }
          />
          <Route path="/works" element={<Works />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

function HeaderPathProp({ toggleTheme, isDarkMode, onStarRef, cursorActive }) {
  const location = useLocation();
  return (
    <Header
      currentPath={location.pathname}
      toggleTheme={toggleTheme}
      isDarkMode={isDarkMode}
      onStarRef={onStarRef}
      cursorActive={cursorActive}
    />
  );
}
