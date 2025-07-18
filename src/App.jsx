import { Routes, Route } from "react-router-dom";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Contact from "./pages/contacts/contacts";
import Register from "./pages/register/register";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Catalog from "./pages/catalog/catalog";
import PetCard from './components/petcard/pet_card';
import UserProfile from "./components/userprofile/user_profile";

function App() {
  return (
    <>
      <Header />
      <hr />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/" element={<Catalog />} />
        <Route path="/pet/:id" element={<PetCard />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
      <hr />
      <Footer />
    </>
  );
}

export default App;