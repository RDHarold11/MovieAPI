import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import avatar from "../assets/avatar.svg";

export const Movies = () => {
  const [movie, setMovie] = useState({});
  const { idmovies } = useParams();

  const handleData = () => {
    axios
      .get(`https://www.omdbapi.com/?i=${idmovies}&apikey=91b049d8`)
      .then((res) => setMovie(res.data));
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <section className="min-h-[100%] rounded-lg max-w-[1200px] mx-auto mt-20 flex items-center justify-center movie ">
      <div className="md:flex px-5 py-5 gap-10 max-w-[1100px] h-[500px]">
        <div className="">
          <img
            src={movie.Poster}
            className="h-[100%] w-[600px] rounded"
            alt=""
          />
        </div>
        <header>
          <h3 className="text-2xl uppercase font-medium mb-5">{movie.Title}</h3>
          <div className="flex gap-3">
            <div className="data relative px-3 py-4 w-[150px] h-[90px] flex justify-center items-center rounded-lg hover:bg-[#b993d6]">
              {movie.Rated}
              <p className="absolute top-[25px] left-[-13px] flex  rotate-[90deg] text-gray-300">
                Rating
              </p>
            </div>
            <div className="data relative px-3 py-4 w-[150px] h-[90px] flex justify-center items-center rounded-lg hover:bg-[#b993d6]">
              {movie.Released}
              <p className="absolute top-[25px] left-[-23px] flex  rotate-[90deg] text-gray-300">
                Released
              </p>
            </div>
            <div className="data relative px-3 py-4 w-[150px] h-[90px] flex justify-center items-center rounded-lg hover:bg-[#b993d6] ">
              {movie.Runtime}
              <p className="absolute top-[25px] left-[-6px] flex  rotate-[90deg] text-gray-300">
                Time
              </p>
            </div>
            <div className="data relative px-3 py-4 w-[150px] h-[90px] flex justify-center items-center rounded-lg hover:bg-[#b993d6]">
              {movie.BoxOffice}
              <p className="absolute top-[25px] left-[-13px] flex  rotate-[90deg] text-gray-300">
                Budget
              </p>
            </div>
          </div>
          <footer className="pt-10">
            <div>
              <h4 className="uppercase mb-3">Description</h4>
              <p>{movie.Plot}</p>
            </div>
            <div className="pt-8">
              <h4 className="uppercase mb-3">Notable Cast</h4>
              <div>
                <div className="flex items-center gap-5 ">
                  <img className="max-w-[50px]" src={avatar} alt="" />
                  <p>{movie.Actors}</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="uppercase mt-4">hype</h4>
              <span>
                <img src="" alt="" />
              </span>
            </div>
          </footer>
        </header>
      </div>
    </section>
  );
};
