import { Routes, Route } from "react-router-dom";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Contact from "./pages/contacts/contacts";
import Register from "./pages/register/register";
import Header from "./components/header/header";
<<<<<<< HEAD
// import Footer from "./components/footer/footer";
=======
import Footer from "./components/footer/footer";
>>>>>>> mark_dev

function App() {
  return(
    <>
<<<<<<< HEAD
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
      </Routes>
=======
    <Header />
    <hr />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    <hr />
    <Footer />
>>>>>>> mark_dev
    </>
  );
}

export default App;