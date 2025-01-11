import NavBar from "./componets/NavBar";
import Education from "./componets/Education";
import TechSkills from "./componets/TechSkills";
import Experience from "./componets/Experience";
import Title from "./componets/Title";
import About from "./componets/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return <div>
          <NavBar/>
          <Title/>
          <About/>
          <Education/>
          <TechSkills/>
          <Experience/>
        </div>
}

export default App;
