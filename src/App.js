import Home from "./pages/Home/Home"
import "./App.css"
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/editProfile/EditProfile";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import {
    BrowserRouter,
    Link,
    Navigate,
    Route,
    RouterProvider,
    Routes,
    createBrowserRouter
  } from "react-router-dom";
  import "./style/dark.css"
import { useContext } from "react";
import { DarkModeContext } from "./Context/darkModeContext";
import { AuthContext } from "./Context/AuthContext";
import AuthorityLogin from "./pages/AuthorityLogin/AuthorityLogin";
import AuthorityHome from "./pages/AuthorityHome/AuthorityHome";
import TrainPNRStatus from "./pages/TrainPNRStatus/TrainPNRStatu";
import TrainDetails from "./pages/TrainDetails/TrainDetails";
import SeatAvailability from "./pages/SeatAvailability/SeatAvailability";
import FareComponent from "./pages/FareComponent/FareComponent";
import AuthorityRegister from "./pages/AuthorityRegister/AuthorityRegister";
import ImageToggle from "./pages/StationMap/stationmap";
import LiveTrainStatus from "./pages/LiveStatus/LiveStatus";

function App() {
   const {darkMode} = useContext(DarkModeContext)
   const {currentUser}= useContext(AuthContext)

   const AuthRoute = ({children})=>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children
   }

   const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>
    },
    {
      path: "/",
      element:<AuthRoute>  <Home/> </AuthRoute>
    },
    {
      path: "/profile/:username",
      element:<AuthRoute>  <Profile/>  </AuthRoute>
    },
    {
      path: "/profile/:username/edit",
      element:  <AuthRoute><EditProfile/></AuthRoute>
    },
    {
      path: "/AuthorityLogin",
      element: <AuthorityLogin/>
    },
    {
      path: "/AuthorityHome",
      element: <AuthorityHome/>
    },
    {
      path: "/TrainPNRStatus",
      element: <TrainPNRStatus/>
    },
    {
      path: "/TrainDetails",
      element: <TrainDetails/>
    },
    {
      path: "/SeatAvailability",
      element: <SeatAvailability/>
    },
    {
      path: "/FareComponent",
      element: <FareComponent/>
    },
    {
      path: "/AuthorityRegister",
      element: <AuthorityRegister />
    },
    {
      path: "/StationMap",
      element: <ImageToggle />
    },
    {
      path: "/LiveStatus",
      element: <LiveTrainStatus/>
    }
   ])
   return <div className= {darkMode? "app dark" :"app"}>
    <RouterProvider router={router}/>
    </div>

}

export default App;
