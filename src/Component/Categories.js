import React from 'react'
import RecipeCard from './RecipeCard';
const categoryList = [
    { image: "/images/African.png", name: "African" },
    { image: "/images/Asian.png", name: "Asian" },
    { image: "/images/American.png", name: "American" },
    { image: "/images/Eastern.png", name: "Eastern" },
    { image: "/images/Europian.png", name: "Europian" },
  ];

export default function Categories  () {
  return (
    <div>
    {
 categoryList.map((category) => 
   <RecipeCard image={category.image} name={category.name} />
 )
}
</div>
  )
}

