import { TileButton } from "@/components/buttons";
import ContentLayout from "@/components/contentLayout";
import NewStockProcess from "@/components/newStockProcess";

/**
 * NewStockPage component renders the page for creating new stock.
 * It uses the ContentLayout component for structured content presentation.
 * @returns {JSX.Element} The rendered NewStockPage component.
 */
export default function NewStockPage() {
  const status: number[] = [1, 0, 0];
  return (
    <ContentLayout>
      {{
        title: "New stock",
        process: <NewStockProcess status={status} />,
        description: [
          "The system will guide you through the process of determining the list of products destined for the target stock.",
          "The first step is to determine whether the product list is created automatically by the system or manually by you."
        ],
        subtitle: "Selection mode",
        content: (
          <>
            <div className="flex flex-row gap-8 lg:gap-16">
              <TileButton label="Automatic" description="The system will automatically select the products based on the criteria set in the general settings." link="/target-stock/new-stock/automatic" disabled={false} />
              <TileButton label="Manual" description="You will manually select the products that will be part of the target stock." link="/target-stock/new-stock/manual" disabled={false} />
            </div>
            <div className="flex justify-center">
              <img src="/images/list.gif" className="w-96" />
            </div>
          </>
        )
      }}
    </ContentLayout>
  );
}
