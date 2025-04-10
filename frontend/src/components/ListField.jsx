import React from "react";

const ListField = ({ label, arr }) => {
  return (
    <div>
      <h2 className="font-semibold mb-3">{label}:</h2>
      <div className="flex gap-3 flex-wrap">
        {arr.map((el, i) => (
          <span
            className="p-2 px-4 rounded-full font-semibold bg-gray-200"
            key={i}
          >
            {el}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ListField;
