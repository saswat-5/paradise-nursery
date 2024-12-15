import React from "react";

const CartItem: React.FC<any> = ({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
}) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <div className="quantity-controls">
        <button onClick={decreaseQuantity}>-</button>
        <span>{item.quantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </div>
      <button onClick={removeItem}>Remove</button>
    </div>
  );
};

export default CartItem;
