import React from "react";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../utils/api";

const DeleteButton = ({ id }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    api
      .delete(`/api/movies/${id}`)
      .then((res) => {
        toast.warning("Başarı ile silindi");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Üzgünüz bir hata oluştu");
      });
  };
  return (
    <button
      onClick={handleDelete}
      className="bg-red-600 text-white p-2 px-4 rounded-md"
    >
      <FaTrash />
    </button>
  );
};

export default DeleteButton;
