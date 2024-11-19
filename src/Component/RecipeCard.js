import React from "react";

function RecipeCard({ image, name }) {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-blue-600 mt-4">
      <img
        src={image}
        alt={name}
        className="w-full h-32 object-cover rounded-md"
      />
      <p className="text-lg font-bold mt-2 text-white">{name}</p>
    </div>
  );
}

export default RecipeCard;
