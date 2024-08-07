import ContentLayout from "@/components/contentLayout";

/**
 * ChangesHistoryPage component renders the page showing the history of changes made to the target stock.
 * It provides descriptions and a list of changes.
 * @returns {JSX.Element} The rendered ChangesHistoryPage component.
 */
export default function ChangesHistoryPage() {
  return (
    <ContentLayout>
      {{
        title: "Changes history",
        description: ["This page shows the history of changes made to the target stock."],
        subtitle: "List of changes",
        content: (
          <p>This is the changes history page.</p>
        )
      }}
    </ContentLayout>
  );
}
