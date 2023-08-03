import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Splash from "./Splash";
import ProjectController from "./ProjectsController";
import '../App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/projects" element={<ProjectController />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
