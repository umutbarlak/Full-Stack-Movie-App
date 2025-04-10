import InputField from "../components/InputField";
import { inputs } from "../utils/constant";
import api from "../utils/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const movieData = Object.fromEntries(formData.entries());

    movieData.genre = movieData.genre.split(",");
    movieData.cast = movieData.cast.split(",");

    api
      .post("/api/movies", JSON.stringify(movieData))
      .then((res) => {
        toast.success("Film listeye eklendi");
        navigate(`/movie/${res.data.id}`);
      })
      .catch((err) => toast.error("Üzgünüz işlem başarısız"));
  };
  return (
    <div className="grid place-items-center flex-1 bg-[linear-gradient(#00000001,#00000001),url('movie-bg.jpg')] bg-center bg-cover  bg-orange-300 px-5 py-8">
      <div className="bg-white  grid grid-cols-1 p-10 gap-10 shadow-lg w-full max-w-[800px]">
        <div>
          <h1 className="text-3xl font-semibold mb-6">Yeni Film Oluştur</h1>
          <form
            onSubmit={handleSubmit}
            className="grid sm:grid-cols-2 gap-6 w-full"
          >
            {inputs.map((props, i) => (
              <InputField key={i} {...props} />
            ))}

            <button className="shadow border py-3 rounded-full hover:shadow-lg hover:bg-gray-200">
              Oluştur
            </button>
          </form>
        </div>
        <div className="sm:my-auto sm:hidden">
          <img
            className="rounded-full max-h-[300px]"
            src="/movie-bg.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Create;
