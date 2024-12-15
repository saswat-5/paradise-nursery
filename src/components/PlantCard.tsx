import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";

interface Plant {
  id: number;
  name: string;
  price: number;
  image: string;
}

const PlantCard: React.FC<{ plant: Plant }> = ({ plant }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>${plant.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default PlantCard;
