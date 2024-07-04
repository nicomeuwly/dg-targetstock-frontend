import ContentLayout from "@/components/contentLayout";

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
