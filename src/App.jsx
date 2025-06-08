import { BrowserRouter as Switch, Routes, Route } from "react-router-dom";
import About from "./pages/about/about";
import Home from "./pages/home";
import Login from "./pages/login";
import Contact from "./pages/contact";
import Register from "./pages/register";
import Header from "./components/header";

function App() {
  return(
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;