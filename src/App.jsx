import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/detail/:kode" element={<Detail />}></Route>
    </Routes>
  );
};

export default App;
