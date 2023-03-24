import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ img, year, title, id, type }) => {
  return (
    <div className="card w-0 flex-grow-[1] duration-[.5s] hover:w-[300px] hover:cursor-crosshair hover:opacity-1 hover:contrast-[120%]">
      <img
        className="rounded object-cover w-full h-full opacity-[0.8]"
        src={
          img
            ? img
            : "https://images.unsplash.com/photo-1633078654544-61b3455b9161?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8NDA0JTIwbm90JTIwZm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        }
        alt={title}
      />
      <div className="px-3 details">
        <h3 className="bold text-2xl my-2">{title}</h3>
        <div className="flex gap-5">
          <h2>{year}</h2>
          <h2>{type}</h2>
        </div>
        <button className="bg-[#4e6e81] px-5 py-2 mt-5 rounded">
          <Link to={`/movies/${id}`}>See More</Link>
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
