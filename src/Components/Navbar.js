import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full py-3 text-white mx-auto flex items-center navbar px-10">
      <Link to="/" className="text-2xl">
        Home
      </Link>
    </nav>
  );
};

export default Navbar;
