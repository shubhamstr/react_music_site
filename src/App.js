/* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Logout from "./Screens/Logout";
import Dashboard from "./Screens/Main/Dashboard";
import Songs from "./Screens/Main/Songs";
import Layout from "./Compo/Layout";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const Protected = ({ isLoggedIn, children }) => {
    if (!isLoggedIn) {
      return (
        <Layout>
          <Navigate to="/" replace />
        </Layout>
      );
    }
    return <Layout>{children}</Layout>;
  };

  useEffect(() => {
    const token = localStorage.getItem("rest-music-site");
    if (token) {
      var decoded = jwt_decode(token);
      console.log(decoded);
    } else {
      localStorage.removeItem("rest-music-site");
      setIsAuth(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="body_height_bg_gradient">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />}
          />
          <Route
            exact
            path="/register"
            element={<Register isAuth={isAuth} setIsAuth={setIsAuth} />}
          />
          <Route
            exact
            path="/login"
            element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />}
          />
          <Route
            exact
            path="/logout"
            element={<Logout isAuth={isAuth} setIsAuth={setIsAuth} />}
          />

          <Route
            exact
            path="/dashboard"
            element={
              <Protected isLoggedIn={isAuth}>
                <Dashboard isAuth={isAuth} setIsAuth={setIsAuth} />
              </Protected>
            }
          />
          <Route
            exact
            path="/songs"
            element={
              <Protected isLoggedIn={isAuth}>
                <Songs isAuth={isAuth} setIsAuth={setIsAuth} />
              </Protected>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
