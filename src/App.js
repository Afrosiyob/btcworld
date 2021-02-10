import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./App.css";
import Routes from "./routes/Routes";
import { userAutoLogin } from "./store/auth/action";

function App() {
  const dispatch = useDispatch();
  let history = useHistory();
  useEffect(() => {
    dispatch(userAutoLogin(history));
  }, [dispatch, history]);

  return <Routes />;
}

export default App;
