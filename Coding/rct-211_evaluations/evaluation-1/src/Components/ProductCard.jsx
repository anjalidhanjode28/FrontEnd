import React from "react";

// get the product item details through the props
const ProductCard = ({item}) => {
  return (
    <div 
      data-testid="productcard"
      style={{
        border: "1px solid black",
        borderRadius: "5px",
        maxWidth: "400px",
        margin: "10px auto",
      }}
      >
      <div>
        <img src={item.image} alt={item.title}/>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div>{item.brand}</div>
        <div>{item.price}</div>
      </div>
      <h2>{item.title}</h2>
    </div>
  );
};

export default ProductCard;
