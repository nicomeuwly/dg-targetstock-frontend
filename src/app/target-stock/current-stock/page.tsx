"use client";
import ContentLayout from "@/components/contentLayout";
import ProductTile from "@/components/productTile";
import ToolBar from "@/components/toolBar";
import { useState } from "react";

export default function CurrentStockPage() {
  const [viewType, setViewType] = useState("thumb");
  const [products, setProducts] = useState([]);

  function handleDataFromChild(data: string) {
    setViewType(data);
  }
  return (
    <ContentLayout>
      {{
        title: "Current stock",
        description: [
          "The list below shows the current target stock for the shop selected in the location and language parameters.",
          "You can modify the list by adding or deleting products."
        ],
        subtitle: "List of products",
        content: (
          <>
            <ToolBar isLoading={false} totalProducts={products.length} sendDataToParent={handleDataFromChild} disabled={products.length == 0 ? true : false} backButton={false}/>
            {products.length == 0 ? <div className="w-full flex flex-col items-center mt-10">
              <p className="text-sm font-semibold">There are currently no products on the list.</p>
              <p className="text-sm">You need to add products to display a list.</p>
            </div> : null}
            <div className={"flex " + (viewType === "thumb" ? "flex-row flex-wrap gap-y-4 mt-4" : "flex-col")}>
              {products.map((product, index) => (
                <ProductTile key={index} product={product} viewType={viewType} isFirst={index % 3 === 0} isLast={(index + 1) % 3 === 0} />
              ))}
            </div>
          </>
        )
      }}
    </ContentLayout>
  );
}
