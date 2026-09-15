import { useContext } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { userContext } from "../../context/UserContext";

const NavContainer = () => {
  let { user, logout } = useContext(userContext);
  const navigate = useNavigate();
  console.log(user); // null //{}

  const location = useLocation();

  const links = [
    { name: "Courses", path: "/" },
    { name: "Cart", path: "/cart" },
    { name: "Add Course", path: "/addcourse" },
  ];

  return (
    <div className="flex items-center gap-6">
      <NavLink to="/" className={({isActive})=>isActive?'text-amber-600':'text-blue-400'}>Courses</NavLink>
      {user?.role == "user" && <Link to="/cart">Cart</Link>}
      {user?.role == "admin" && <NavLink className={({isActive})=>isActive?'text-amber-600':'text-blue-400'} to="/addcourse">Add Course</NavLink>}
      <div className="ml-3 h-6 w-px bg-slate-200" />

      {user ? (
        <button
          className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-blue-200 transition-all duration-200 hover:bg-orange-700 hover:shadow-md"
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          Logout
        </button>
      ) : (
        <Link
          to="/login"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-blue-200 transition-all duration-200 hover:bg-blue-700 hover:shadow-md"
        >
          Login
        </Link>
      )}


     
     
      {user && (
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-blue-200 transition-all duration-200 hover:bg-blue-700 hover:shadow-md">
          {user?.username.charAt(0)}
        </button>
      )}
    </div>
  );
};

export default NavContainer;