"use client";
import { PrimaryButton, SecondaryButton } from "@/components/buttons";
import ContentLayout from "@/components/contentLayout";
import NewStockProcess from "@/components/newStockProcess";
import { useRouter } from "next/navigation";
import { useState } from "react";

/**
 * SummaryPage component renders the summary page for new stock.
 * It displays the summary of the product list and provides navigation buttons.
 * @returns {JSX.Element} The rendered SummaryPage component.
 */
export default function SummaryPage() {
  const status: number[] = [2, 2, 1];
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewType, setViewType] = useState("tdumb");
  const infos = [{ name: "Location", value: "Lausanne" }, { name: "Availability period", value: "from 01.06.2024 to 30.09.2024" }, { name: "Quantity to be stored", value: "300 pieces" }, { name: "Number of products", value: "250 items" }];
  const router = useRouter();

  return (
    <ContentLayout>
      {{
        title: "New stock",
        process: <NewStockProcess status={status} />,
        description: [
          "The product list is now ready for registration in the ERP.",
          "Make sure everytding is correct before continuing."
        ],
        subtitle: "List summary",
        content: (
          <div className="flex flex-col gap-8">
            <table className="w-full text-sm">
              {infos.map((info, index) => (
                <tr key={index} className={"h-12 " + (index !== 3 ? "border-b border-light-transp-black-20" : null)}>
                  <td className="text-light-galaxus-body-copy-primary">{info.name}</td>
                  <td className="text-light-galaxus-body-copy-secondary">{info.value}</td>
                </tr>
              ))}
            </table>
            <div className="flex items-center justify-between">
              <p className="text-sm text-light-galaxus-body-copy-secondary">Products with existing target stock rules will have those rules updated.</p>
              <div className="flex gap-8">
                <PrimaryButton label="Next" onClick={() => { }} disabled={false} />
                <SecondaryButton label="Back" onClick={() => router.back()} disabled={false} />
              </div>
            </div>
          </div>
        )
      }}
    </ContentLayout>
  );
}
