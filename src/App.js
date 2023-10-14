import Home from "./pages/Home/Home"
import "./App.css"
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/editProfile/EditProfile";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import {
    BrowserRouter,
    Link,
    Route,
    Routes,
  } from "react-router-dom";
  import "./style/dark.css"
import { useContext } from "react";
import { DarkModeContext } from "./Context/darkModeContext";

function App() {
   const {darkMode} = useContext(DarkModeContext)
   return <div className= {darkMode? "app dark" :"app"}>
    <BrowserRouter>
      <Routes>
        <Route path="/">
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route index element={<Home/>}/>
            <Route path="profile">
                <Route path=":userId" element= {<Profile/>}/>
                <Route path=":userId/edit" element= {<EditProfile/>}/>
            </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>

}

export default App;
