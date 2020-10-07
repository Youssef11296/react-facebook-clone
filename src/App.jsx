import React from "react";
import "./App.css";
import Feed from "./comps/Feed";
import Header from "./comps/Header";
import Sidebar from "./comps/Sidebar";
import Login from "./comps/Login";
import { useStateContext } from "./context/StateContext";

function App() {
  const [{ user }, dispatch] = useStateContext();

  return !user ? (
    <Login />
  ) : (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
