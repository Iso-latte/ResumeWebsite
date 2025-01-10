import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Projects from "./Projects";
import Timeline from "./Timeline";
import Connect from "./Connect";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;