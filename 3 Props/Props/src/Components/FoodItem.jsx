import { useState } from "react";
import Item from "./Item";
import FoodInput from "./FoodInput";

function FoodItem() {
  const foodItems = ['Daal', 'Green Vegetable', 'Roti', 'Salad', 'Milk', 'Ghee'];
 let  showText = " Food Item Shows";
  const getValue = (event) => {
    console.log(event.target.value);
    showText = event.target.value;
  };

  return (
    <>
      <h3 className="heading">Healthy Food</h3>
      <FoodInput getValue={getValue} />
      <p>{showText}</p>
      <ul className="list-group">
        {foodItems.map((item) => (
          <Item key={item} foodItem={item} buyButton={() => alert(item)} />
        ))}
      </ul>
    </>
  );
}

export default FoodItem;
