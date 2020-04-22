import React from "react";
import "./collection.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item-category.component";
import { useSelector } from "react-redux";

export default function CollectionPage({ match }) {
  const items = useSelector((state) => state.shop.collections);
  let category = match.params.collectionId;

  const categoryID = () => {
    let categoryNumber = 0;
    switch (category) {
      case "hats":
        return (categoryNumber = 1);
      case "sneakers":
        return (categoryNumber = 2);
      case "jackets":
        return (categoryNumber = 3);
      case "womens":
        return (categoryNumber = 4);
      case "mens":
        return (categoryNumber = 5);
      default:
        return categoryNumber;
    }
  };

  return (
    <>
      {items
        .filter((item) => item.id == categoryID(category))
        .map(({ id, title, routeName, items }) => (
          <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
              <CollectionItem key={id} item={items} />
            </div>
          </div>
        ))}
    </>
  );
}
