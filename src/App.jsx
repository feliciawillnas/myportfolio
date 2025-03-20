import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Works from "./pages/Works";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/works" element={<Works />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
