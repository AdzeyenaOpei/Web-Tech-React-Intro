import React from 'react'
import RecipeCard from "./RecipeCard";

const recipeList = [
    { image: "/images/Beans.jpg", name: "Beans" },
    { image: "/images/Rice.jpg", name: "Rice" },
    { image: "/images/Beans.jpg", name: "Beans" },
    { image: "/images/Rice.jpg", name: "Rice" },
    { image: "/images/Beans.jpg", name: "Beans" },
    { image: "/images/Rice.jpg", name: "Rice" },
  ];

export default function Home () {
  return (
    <div>
         {
      recipeList.map((recipe) => 
        <RecipeCard image={recipe.image} name={recipe.name} />
      )
    }
    </div>
  )
}

 
