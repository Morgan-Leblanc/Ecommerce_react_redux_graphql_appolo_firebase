import React from "react";
import "./collection.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item-category.component";
import { useSelector } from "react-redux";

export default function CollectionPage({ match }) {
  const items = useSelector((state) => state.shop.collections);
  console.log(items);

  let category = match.params.collectionId;

  return (
    <>
      {items
        .filter((item) => item.routeName == category)
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
