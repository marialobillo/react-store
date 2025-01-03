import "./categories.styles.scss";

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
        <div className="category-container" key={category.id}>
          <div
            className="background-image"
            style={{
              backgroundImage: `url(${category.imageUrl})`,
            }}
          />

          <div className="category-body-container">
            <h2>{category.title}</h2>
            <p>Show Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
