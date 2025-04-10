import axios from "axios";
import { useEffect } from "react";
import api from "../utils/api";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/LOader";
import Error from "../components/Error";
import Card from "../components/Card";
import Hero from "../components/Hero";
import { useParams, useSearchParams } from "react-router-dom";

const Main = () => {
  const [params, setParams] = useSearchParams();

  const options = {
    params: {
      query: params.get("query"),
    },
  };

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["movies", options],
    queryFn: () => api.get("/api/movies", options).then((res) => res.data),
  });

  return (
    <div className="mb-10">
      <Hero />
      <div className="px-5 md:px-10">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error info={error} refetch={refetch} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10  mt-10">
            {data.map((movie) => (
              <Card movie={movie} key={movie.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
