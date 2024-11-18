// Dependencies
import React from "react";
import Navbar from "./Component/Navbar";
import RecipeCard from "./Component/RecipeCard";
// Styles
import "./tailwind.output.css";

const recipeList = [
  { image: "/image/Beans.jpg", name: "Beans" },
  { image: "/image/Rice.jpg", name: "Rice" },
  { image: "/image/Beans.jpg", name: "Beans" },
  { image: "/image/Rice.jpg", name: "Rice" },
  { image: "/image/Beans.jpg", name: "Beans" },
  { image: "/image/Rice.jpg", name: "Rice" },
];

const App = () => {
  return (
    <div className="min-h-screen bg-green-600 p-2">
      <Navbar />
      {recipeList.map((list) => {
        <RecipeCard image={list.image} name={list.name} />;
      })}
      <RecipeCard image="/image/Beans.jpg" name="Beans" />
    </div>
  );
};

export default App;
