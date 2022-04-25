import Register from "./components/Register"
import Login from "./components/Login"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar";


function App() {
  return (
    <Router>
      <Navbar/>
    <div className="App">
      <Routes>
        <Route path="Register" element={<Register />}></Route>
        <Route path="Login" element={<Login/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
