import { Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Login from "./pages/login";
import Contact from "./pages/contact";

function App() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;