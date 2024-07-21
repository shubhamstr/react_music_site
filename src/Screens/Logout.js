import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout(props) {
  const history = useNavigate();

  useEffect(() => {
    localStorage.removeItem("music-site-token");
    props.setIsAuth(false);
    history("/");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export default Logout;
