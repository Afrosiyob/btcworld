import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Routes from "./routes/Routes";
import { userAutoLogin } from "./store/auth/action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userAutoLogin());
  }, [dispatch]);

  return <Routes />;
}

export default App;
