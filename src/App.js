import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/Single/About/About";
import Contact from "./components/Pages/Single/Contact/Contact";
import PageNotFound from "./components/Pages/Error/PageNotFound";
import Login from "./components/Pages/Login/Login";
import Registration from "./components/Pages/Registration/Registration";
import Dashboard from "./components/Pages/User/Dashboard";
import PrivateRoute from "./components/Routes/PrivateRoutes";
import ForgotPassword from "./components/Pages/ForgotPassword/ForgotPassword";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./components/Pages/Admin/AdminDashboard";
import Cards from "./components/Pages/User/Cards";
import SingleCard from "./components/Pages/User/SingleCard";
import UpdateCard from "./components/Pages/User/UpdateCard";
import Search from "./components/Pages/Search";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="/about" element={<About></About>}></Route>
        <Route path="/dashboard" element={<PrivateRoute></PrivateRoute>}>
          <Route path="user" element={<Dashboard></Dashboard>}></Route>
          <Route path="user/search" element={<Search></Search>}></Route>
          <Route
            path="user/update/:slug"
            element={<UpdateCard></UpdateCard>}
          ></Route>
          <Route path="user/cards" element={<Cards></Cards>}></Route>
          <Route
            path="user/cards/:slug"
            element={<SingleCard></SingleCard>}
          ></Route>
        </Route>
        <Route path="/dashboard" element={<AdminRoute></AdminRoute>}>
          <Route
            path="admin"
            element={<AdminDashboard></AdminDashboard>}
          ></Route>
        </Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>
        <Route
          path="/forgot-password"
          element={<ForgotPassword></ForgotPassword>}
        ></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </>
  );
}

export default App;
