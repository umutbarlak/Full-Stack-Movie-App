const Error = ({ info, refetch }) => {
  return (
    <div className="my-10 text-center bg-red-500 text-white p-5 max-w-[500px] mx-auto px-20">
      <h1>{`Üzgünüz bir sorun oluştu :(`}</h1>
      <h1> {info.message}</h1>
      <button
        onClick={refetch}
        className="mt-5 border py-1 px-4 rounded-full hover:text-black hover:bg-white transition"
      >
        Tekrar Deneyin
      </button>
    </div>
  );
};

export default Error;
