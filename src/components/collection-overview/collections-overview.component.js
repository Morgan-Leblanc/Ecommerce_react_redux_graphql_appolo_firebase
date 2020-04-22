import React from "react";
import CollectionPreview from "../preview-collection/preview.component";
import { useSelector } from "react-redux";
import "./collections-overview.styles.scss";

const CollectionsOverview = () => {
  const dataShop = useSelector((state) => state.shop.collections);

  return (
    <div className="collections-overview">
      {dataShop.map(({ id, ...propsDataShop }) => (
        <CollectionPreview key={id} {...propsDataShop} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
