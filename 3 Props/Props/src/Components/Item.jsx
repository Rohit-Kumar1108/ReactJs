function Item({ foodItem,buyButton }) {

  return (
    <li className="list-group-item list-item">
      {foodItem}
      <button className="btn btn-info list-btn" onClick={buyButton}>Buy</button>
    </li>
  );
}

export default Item;
