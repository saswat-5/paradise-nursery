import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductPage = () => {
  const dispatch = useDispatch();

  const plants = [
    {
      id: "1",
      name: "Fiddle Leaf Fig",
      price: 29.99,
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT7qHUBt7Ekw22xtcFe999prnZDnGrS6_RaMDUgFospNAIBFjxlmIghb23uJrjlLL3-7oI_Z15wdLkAqKQfQLFWQ3K80ycJ1LsJURzUt23xC6umvA3q13lHag&usqp=CAc",
    },
    {
      id: "2",
      name: "Cape Jasmine",
      price: 19.99,
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTU1D1i6kGEkqyawJEbpapt3xCVztHtmELmfehRy2IbM0FA_rtl5onG4HxSIwWYPx2ikGO0nTRLAgzXNNs58UjJfQVjOB2OSq0kQmmAMWB_&usqp=CAE",
    },
    {
      id: "3",
      name: "Pothos",
      price: 15.99,
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTdA7GdVb-empuBYv5qoEoDfK2mNINLD3ItCItJS_uYQPpxwA9GuR5FKUnHd69aqVLUkKOd60a7-39Ee5EmjhF2o0iDLX2UNpw9ZD4SVkfT&usqp=CAE",
    },
    {
      id: "4",
      name: "Aloe Vera",
      price: 10.99,
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQnSMNfkSCNSYr9ZKVkNvKU9RpPAEAXlfNQRdk0CE1eU_B4VLZxPb-glIBy4_eBXmWlYlKHoPkSax2fF4E2fpdsIkDHtqdrfW_QLA8yEZqK&usqp=CAE",
    },
    {
      id: "5",
      name: "Spider Plant",
      price: 12.99,
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSdi2lT-yauEI6DJAVmkjLuKRn3_WQhSDX5XyczK3QQTzu0Iz_o4DeVi5VjrXD-pPX0bQoTrsHIkWFnqsj7HFbvXgF4DAekDK7yz7szz-bYXqsm0X5VNDRz3Q&usqp=CAE",
    },
    {
      id: "6",
      name: "Peace Lily",
      price: 18.99,
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS5yp3w3OFWd-ekrckoxgzfPHc33rxqEWiyNLT29Baz4RDi0Ku9Q2E9CJ0dmRwlfs4DRsB6E32oXUkIyt0cT6lyW5JQvgMDBbgudD4jrb_j&usqp=CAE",
    },
  ];

  const handleAddToCart = (plant) => {
    dispatch(addToCart({ ...plant, quantity: 1 }));
  };

  return (
    <div className="product-page">
      <h2>Product Listing</h2>
      <div className="product-listing">
        {plants.map((plant) => (
          <div key={plant.id} className="plant-card">
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>${plant.price}</p>
            <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;