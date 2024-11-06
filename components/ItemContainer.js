import React from "react";
import ProductGallery from "./ProductGallery";
import ItemDetails from "./ItemDetails";

const ItemContainer = () => {
  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <span className="text-5xl font-bold text-[#242424]">
        iPhone 11 Pro Max
      </span>
      <div className="flex w-full gap-8">
        <div className="w-3/5">
          <ProductGallery />
        </div>
        <div className="w-2/5">
          <ItemDetails
            product={{
              name: "Apple iPhone 11 Pro Max",
              model: "IQD 87900",
              colors: ["#FBD7BD", "#EBEBE3", "#52514F", "#6D7A71"],
              capacity: ["64GB", "256GB", "512GB"],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemContainer;
