import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Slideshow from "./Slideshow";

const Layout = () => (
  <>
    <NavBar />
    <Slideshow />
    <Outlet />
  </>
);

export default Layout;
