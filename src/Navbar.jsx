import { NavLink } from "react-router-dom";

function NavBar() {
    console.log("Navbar rendered");
  return (
    <>
      <nav className="absolute left-1/2 transform -translate-x-1/2 pt-4">
        <div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md transition-all duration-200 ${
                isActive
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
                ${isActive? "bg-white text-black font-semibold" : "text-gray-300 hover:text-white hover:bg-gray-800"}
            `
            }
          >
            Contact Me
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md transition-all duration-200
                ${isActive? "bg-white text-black font-semibold": "text-gray-300 hover:text-white hover:bg-gray-800"}
            `
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md transition-all duration-200
                ${isActive? "bg-white text-black font-semibold":"text-gray-300 hover:text-white hover:bg-gray-800"}
            `
            }
          >
            Blogs
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
