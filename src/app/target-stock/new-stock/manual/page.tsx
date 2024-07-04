import { TileButton } from "@/components/buttons";
import ContentLayout from "@/components/contentLayout";
import NewStockProcess from "@/components/newStockProcess";

export default function ManualMethodPage() {
  const status: number[] = [2, 1, 0];
  return (
    <ContentLayout>
      {{
        title: "New stock",
        process: <NewStockProcess status={status} />,
        description: [
          "The product list will be generated manually, which may take some time.",
          "To do this, you need to add the products you want one by one."
        ],
        subtitle: "List of products",
        content: (
          <>
            
          </>
        )
      }}
    </ContentLayout>
  );
}
