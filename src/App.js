import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Single from "./components/pages/Single";
import Write from "./components/pages/Write";
import Settings from "./components/pages/Settings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/register"
          exact
          element={user ? <Home /> : <Register />}
        />
        <Route
          path="/login"
          exact
          element={user ? <Home /> : <Login />}
        ></Route>
        <Route
          path="/write"
          exact
          element={user ? <Write /> : <Register />}
        ></Route>
        <Route path="/post/:postId" exact element={<Single />} />
        <Route
          path="/settings"
          exact
          element={user ? <Settings /> : <Login />}
        />
      </Routes>
    </Router>
  );
}

export default App;
