import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

export default function CollectionItem({ id, name, price, imageUrl }) {
  const dispatch = useDispatch();

  const item = { id, name, price, imageUrl };

  const addItemToStore = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}$</span>
      </div>
      <CustomButton inverted onClick={() => addItemToStore(item)}>
        {" "}
        Add To Cart
      </CustomButton>
    </div>
  );
}
