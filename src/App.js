import "./App.css";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  let flag = localStorage.getItem("react-music-site-login-flag");
  if (flag) {
    setIsAuth(flag);
  }

  return (
    <>{isAuth && isAuth ? <Dashboard /> : <Login setIsAuth={setIsAuth} />}</>
  );
}

export default App;
