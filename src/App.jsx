import "./App.css";
import Navbar from "./components/pages/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import SignUp from './components/pages/SignUp/SignUp';
import Footer from "./components/pages/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home}></Route>
        <Route path="/services" Component={Services}></Route>
        <Route path="/products" Component={Products}></Route>
        <Route path="/sign-up" Component={SignUp}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
