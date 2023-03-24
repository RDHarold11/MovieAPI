import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Movies = ({ movies }) => {
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

  return <div></div>;
};
