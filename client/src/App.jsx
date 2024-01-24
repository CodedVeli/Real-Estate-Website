import { useState, useEffect } from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Property from "./pages/Property";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/check_session').then((response) => {
      if (response.ok){
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user){
    setUser(user);
  }

  function handleLogout(){
    setUser(null)
  }


  return (
    <div>
      <Router>
        <Navbar user={user} onLogout={handleLogout}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/property" element={<Property />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/login"
            element={
              user ? (
                <Navigate to="/" replace />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
