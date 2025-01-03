import React from 'react';
import CategoryMenu from './components/category-menu/category-menu.component';

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

const App = () => {
  return (
    <>
      <CategoryMenu categories={categories}/>
    </>
  );
};

export default App;
