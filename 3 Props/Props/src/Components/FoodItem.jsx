import { useState } from "react";
import Item from "./Item";
import FoodInput from "./FoodInput";

function FoodItem() { 
const [foodItems, setFoodItems] = useState(['Daal', 'Green Vegetable', 'Roti', 'Salad', 'Milk', 'Ghee'])
  const getValue = (event) => {
    if(event.key==='Enter'){
      let val = event.target.value;
      event.target.value = "";
     let newVal = [...foodItems,val];
     setFoodItems(newVal);
        }
  };

  return (
    <>
      <h3 className="heading"><span>Healthy Food</span></h3>
      <FoodInput getValue={getValue} />
        <ul className="list-group">
        {foodItems.map((item) => (
          <Item key={item} foodItem={item} buyButton={() => alert(item)} />
        ))}
      </ul>
    </>
  );
}

export default FoodItem;
