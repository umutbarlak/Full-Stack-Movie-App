import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import api from "../utils/api";
import Loader from "../components/LOader";
import Error from "../components/Error";
import { findColor } from "../utils/constant";
import DeleteButton from "../components/DeleteButton";
import ListField from "../components/ListField";

const Detail = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["movie"],
    queryFn: () => api.get(`/api/movies/${id}`).then((res) => res.data),
  });

  if (isLoading) return <Loader />;

  if (error) return <Error info={error} refetch={refetch} />;

  return (
    <div className="p-10">
      <div className="flex justify-end mb-2">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-black text-white rounded-md me-4"
        >
          Geri
        </button>
        <DeleteButton id={data.id} />
      </div>
      <div className="flex flex-col gap-5 md:flex-row">
        <div className="h-full">
          <img
            className="rounded-md m-auto "
            src={`https://picsum.photos/seed/${data.id}/200/300`}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-3xl font-semibold mb-3">{data.title}</h1>
            <p>{data.description}</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Field
              label="İzleyici Skoru"
              value={Number(data.rating).toFixed(1)}
              bg={findColor(data.rating)}
            />
            <Field label="Yapımcı" value={data.director} />
            <Field label="Yıl" value={data.year} />
            <Field label="Dil" value={data.language} />
            <Field label="Süre" value={data.duration} />
          </div>

          <ListField arr={data.cast} label="Ekip" />
          <ListField arr={data.genre} label="Türler" />
        </div>
      </div>
    </div>
  );
};

export default Detail;

const Field = ({ label, value, bg }) => {
  return (
    <div>
      <span className="font-semibold me-3">{label}:</span>
      <p
        style={{ background: bg ? bg : "" }}
        className={`${
          bg ? "p-2" : "px-4"
        } p-2 w-fit rounded-full font-semibold inline-flex bg-gray-200`}
      >
        {value}
      </p>
    </div>
  );
};
