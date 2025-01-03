import React from 'react';
import CategoryItem from "./components/category-item/category-item.component";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Category A",
      imageUrl: "https://picsum.photos/500/300",
    },
    {
      id: 2,
      title: "Category B",
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      title: "Category C",
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      title: "Category D",
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      id: 5,
      title: "Category E",
      imageUrl: "https://picsum.photos/200/300",
    },
  ];
  return (
    <div className="categories-container">
      {categories.map((category) => (

        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default App;
