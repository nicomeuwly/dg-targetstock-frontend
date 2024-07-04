import ContentLayout from "@/components/contentLayout";

export default function CurrentStockPage() {
  return (
    <ContentLayout>
      {{
        title: "Current stock",
        description: ["The list below shows the current target stock for the shop selected in the location and language parameters.", "You can modify the list by adding or deleting products."],
        subtitle: "List of products",
        content: (
          <p>This is current stock page</p>
        )
      }}
    </ContentLayout>
  );
}
