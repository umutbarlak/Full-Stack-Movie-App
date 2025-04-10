import React from "react";
import { Link } from "react-router-dom";
import { findColor } from "../utils/constant";

const Card = ({ movie }) => {
  return (
    <Link
      to={`movie/${movie.id}`}
      className="border shadow rounded-md hover:bg-gray-200 cursor-pointer transition flex flex-col max-sm:flex-row max-sm:gap-5 p-5"
    >
      <div className="relative">
        <img
          className="rounded sm:w-full w-[180px] object-cover max-h-[250px] "
          src={`https://picsum.photos/seed/${movie.id}/200/300`}
          alt=""
        />
        <span
          style={{ background: findColor(movie.rating) }}
          className="text-white absolute -top-3 -right-3 p-1 sm:p-2 rounded-full text-center "
        >
          {Number(movie.rating).toFixed(1)}
        </span>
      </div>
      <div className="flex flex-col justify-between h-full w-full">
        <h3 className="font-bold text-xl md:mt-4 line-clamp-2">
          {movie.title}
        </h3>

        <div className="w-full">
          <p>{movie.year}</p>
          <p className="flex gap-2 flex-wrap my-2">
            {movie.genre.map((genre, i) => (
              <span className="bg-gray-200 rounded-md py-1 px-2" key={i}>
                {genre}
              </span>
            ))}
          </p>
          <p className="bg-red-400 rounded-md py-1 px-2 w-fit text-white ">
            {movie.language}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
