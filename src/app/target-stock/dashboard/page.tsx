import ContentLayout from "@/components/contentLayout";

/**
 * DashboardPage component renders the dashboard page.
 * It uses the ContentLayout component for structured content presentation.
 * @returns {JSX.Element} The rendered DashboardPage component.
 */
export default function DashboardPage() {
  return (
    <ContentLayout>
      {{
        title: "Dashboard",
        content: (
          <div className="flex flex-wrap -mx-4">
            <div className="w-1/2 px-4 mb-8">
              <div className="h-80 bg-light-grays-FFFFFF border border-light-transp-black-20 rounded-md"></div>
            </div>
            <div className="w-1/2 px-4 mb-8">
              <div className="h-80 bg-light-grays-FFFFFF border border-light-transp-black-20 rounded-md"></div>
            </div>
            <div className="w-1/2 px-4 mb-8">
              <div className="h-80 bg-light-grays-FFFFFF border border-light-transp-black-20 rounded-md"></div>
            </div>
            <div className="w-1/2 px-4 mb-8">
              <div className="h-80 bg-light-grays-FFFFFF border border-light-transp-black-20 rounded-md"></div>
            </div>
          </div>
        )
      }}
    </ContentLayout>
  );
}
