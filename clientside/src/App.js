// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserRoute from "./Modules/user/Route/UserRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
    
        <Route exact path="/*" element={<UserRoute />}/>

          
          


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
