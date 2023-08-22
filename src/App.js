import { BrowserRouter, Route, Routes } from "react-router-dom";
// import page components
import Login from "./pages/Login";
import Layout from "./pages/Layout";

import { Button } from "antd";
function App() {
  return (
    // router config
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* Create router path and relationship */}
          <Route path="/" element={<Layout />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
