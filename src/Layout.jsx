import NavBar from "./Navbar";
import Intro from "./Routes/Homepagecomponents.jsx/Intro";
import CodeBlock from "./Routes/Homepagecomponents.jsx/CodeBlock";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="relative bg-[url(./assets/ashutosh.png)] bg-contain bg-no-repeat bg-left h-screen">
            <NavBar />
            

            {/* This is where route pages will render */}
            <Outlet />
        </div>
    );
};

export default Layout;