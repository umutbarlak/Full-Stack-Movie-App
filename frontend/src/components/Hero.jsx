import React from "react";
import { useSearchParams } from "react-router-dom";

const Hero = () => {
  const [params, setParams] = useSearchParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;

    setParams({ query: text });
  };
  return (
    <div className="px-10 py-20 lg:px-20 bg-[linear-gradient(#00000071,#00000071),url('hero-1.jpg')]  bg-cover text-white">
      <h1 className="text-4xl md:text-5xl ">Hoşgeldiniz</h1>
      <h2 className="text-xl md:text-2xl font-semibold capitalize">
        Milyonlarca film, dizi ve aktörleri keşfet
      </h2>
      <form
        onSubmit={handleSubmit}
        className="rounded-lg overflow-hidden flex mt-5 max-w-[700px]"
      >
        <input
          defaultValue={params.get("query")}
          className="w-full py-2 px-4 text-black"
          type="text"
          placeholder="Film, Dizi, Aktör arayın"
        />
        <button className="bg-blue-500 px-5 border-none font-semibold hover:bg-blue-600">
          Ara
        </button>
      </form>
    </div>
  );
};

export default Hero;
