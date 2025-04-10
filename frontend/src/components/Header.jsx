import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-5 md:px-10 border-b shadow">
      <Link to={"/"} className="flex items-center gap-4">
        <img width={60} src="/movie-logo.png" alt="" />
        <h2 className="font-bold text-3xl max-sm:hidden tracking-wide">
          Filmania
        </h2>
      </Link>
      <Link
        to={"/create"}
        className="border rounded-full py-1 px-5 hover:bg-black hover:text-white transition"
      >
        Film Oluştur
      </Link>
    </div>
  );
};

export default Header;
