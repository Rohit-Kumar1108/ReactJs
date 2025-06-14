import Item from "./Item";
import ErrorMsg from "./ErrorMsg";

function FoodItem() {
  const foodItems = ['Daal', 'Green Vegetable', 'Roti', 'Salad', 'Milk', 'Ghee'];
  
  return (
    <>
      <ErrorMsg foodItems={foodItems} />
      <ul className="list-group">
        {foodItems.map((item) => (
          <Item key={item} foodItem={item} />
        ))}
      </ul>
    </>
  );
}

export default FoodItem;
