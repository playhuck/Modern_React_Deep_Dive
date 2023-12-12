import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  BrowserRouter as Router,
} from "react-router-dom";
import CleanUp from "./2023.11/CleanUp";
import UseMemoPrac from "./2023.12/UseMemoPrac";
import UseCallback from "./2023.12/useCallback/UseCallback";
import UseRefPrac from "./2023.12/UseRefPrac";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/clean-up" element={<CleanUp></CleanUp>}></Route>
          <Route path="/use-memo" element={<UseMemoPrac></UseMemoPrac>}></Route>
          <Route path="/use-callback" element={<UseCallback></UseCallback>}></Route>
          <Route path="/use-ref" element={<UseRefPrac></UseRefPrac>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
