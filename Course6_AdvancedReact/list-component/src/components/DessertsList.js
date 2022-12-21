function DessertsList(props) {
  // Implement the component here.
  const dessertList = props.data
    .filter((dessert) => dessert.calories < 500)
    .sort((a, b) => a.calories - b.calories)
    .map((dessert) => {
      const list = `${dessert.name} - ${dessert.calories} cal`;
      return <li>{list}</li>;
    });
  return (
    <div>
      <h2>List of low calorie desserts:</h2>
      <ul>{dessertList}</ul>
    </div>
  );
}

export default DessertsList;
