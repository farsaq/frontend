import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Courses from "./pages/Courses";
import AdminDashboard from "./pages/AdminDashboard";

const ADMIN_EMAIL = "nizamanisaqib692@gmail.com";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    if (token && email) {
      setLoggedIn(true);
      setIsAdmin(email === ADMIN_EMAIL);
    }
  }, []);

  const handleLogin = (email) => {
    localStorage.setItem("email", email);
    setLoggedIn(true);
    setIsAdmin(email === ADMIN_EMAIL);
  };

  const handleLogout = () => {
    localStorage.clear();
    setLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    <>
      <Navbar isLoggedIn={loggedIn} onLogout={handleLogout} />

      {!loggedIn && (
        <>
          <Login onLogin={handleLogin} />
          <Register onRegister={handleLogin} />
        </>
      )}

      {loggedIn && !isAdmin && <Courses />}

      {loggedIn && isAdmin && <AdminDashboard />}
    </>
  );
}
