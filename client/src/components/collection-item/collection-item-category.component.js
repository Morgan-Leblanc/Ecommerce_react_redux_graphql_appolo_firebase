import React from "react";
import { useDispatch } from "react-redux";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

export default function CollectionItem({ item }) {
  const dispatch = useDispatch();

  const addItemToStore = (data) => {
    dispatch({ type: "ADD_ITEM", payload: data });
  };

  return (
    <>
      {item.map((items) => (
        <div className="collection-item"  style={{ width: 200 }}>
          <div
            className="image"
            style={{ backgroundImage: `url(${items.imageUrl})` }}
          />
          <div className="collection-footer">
            <span className="name">{items.name}</span>
            <span className="price">{items.price}$</span>
          </div>
          <CustomButton inverted onClick={() => addItemToStore(items)}>
            {" "}
            Add To Cart
          </CustomButton>
        </div>
      ))}
    </>
  );
}
