import { TileButton } from "@/components/buttons";
import NewStockProcess from "@/components/newStockProcess";

export default function NewStockPage() {
  const status: number[] = [1, 0, 0];
  return (
    <div className="mx-12 lg:mx-24 xl:mx-48 2xl:mx-96 my-9">
      <div className="mb-10 flex flex-row justify-between items-center">
        <h1 className="text-3xl font-semibold">New stock</h1>
        <NewStockProcess status={status} />
      </div>
      <div className="mb-12 flex flex-col gap-2">
        <p>The system will guide you through the process of determining the list of products destined for the target stock.</p>
        <p>The first step is to determine whether the product list is created automatically by the system or manually by you.</p>
      </div>
      <h2 className="text-xl font-semibold mb-8">Selection mode</h2>
      <div className="flex flex-row gap-8 lg:gap-16">
        <TileButton label="Automatic" description="The system will automatically select the products based on the criteria set in the general settings." disabled={false} />
        <TileButton label="Manual" description="You will manually select the products that will be part of the target stock." disabled={false} />
      </div>
      <div className="w-full flex justify-center">
        <img src="/images/list.gif" className="w-1/4" />
      </div>
    </div>
  );
}
