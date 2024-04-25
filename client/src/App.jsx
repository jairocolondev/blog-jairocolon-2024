import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import SingUp from "./pages/SingUp";
import SingIn from "./pages/SingIn";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mi" element={<About />} />
        <Route path="/registrarse" element={<SingUp />} />
        <Route path="/iniciar-sesion" element={<SingIn />} />
        <Route path="/panel" element={<Dashboard />} />
        <Route path="/proyectos" element={<Projects />} />
      </Routes>
    </Router>
  );
}
