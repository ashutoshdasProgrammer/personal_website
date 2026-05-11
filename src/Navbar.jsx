import { NavLink } from "react-router-dom";

function NavBar() {
  
  // dont use eventlistner. useEffect() + useRef()

  return (
    <>
      <nav className="absolute left-1/2 transform -translate-x-1/2 pt-4">

        <div id="desktop_menu" className="hidden md:flex ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md transition-all duration-200 ${isActive
                ? "bg-white text-black font-semibold"
                : "text-gray-300 hover:text-white hover:bg-gray-800"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/discover"
            className={({ isActive }) =>
              ` px-4 py-2 rounded-md transition-all duration-200 ${isActive ? "bg-white text-black font-semibold" : "text-gray-300 hover:text-white hover:bg-gray-800"}`
            }
          >
            Discover
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-4 py-2 transition-all rounded-md duration-200
                ${isActive ? "bg-white text-black font-semibold" : "text-gray-300 hover:text-white hover:bg-gray-800"}
            `
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md transition-all duration-200
                ${isActive ? "bg-white text-black font-semibold" : "text-gray-300 hover:text-white hover:bg-gray-800"}
            `
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md transition-all duration-200
                ${isActive ? "bg-white text-black font-semibold" : "text-gray-300 hover:text-white hover:bg-gray-800"}
            `
            }
          >
            Blogs
          </NavLink>
        </div>


      </nav>

      <div id="hamburger" className="m-2 p-2 flex flex-col gap-1 md:hidden">
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
      </div>

      <div id="mobile_menu" className="m-2 flex flex-col gap-2 p-2 md:hidden">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/discover">Discover</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
      </div>
    </>
  );
}

export default NavBar;
