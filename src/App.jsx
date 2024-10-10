import { Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
function App() {
  return (
    <>
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}>
           </Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </>
  );
}

export default App;
