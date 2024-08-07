import ContentLayout from "@/components/contentLayout";

/**
 * AppAccessPage component renders the page for managing access to the target stock management application.
 * It allows superusers to manage who has access to the application.
 * @returns {JSX.Element} The rendered AppAccessPage component.
 */
export default function AppAccessPage() {
  return (
    <ContentLayout>
      {{
        title: "Manage app access",
        description: ["As a superuser, you can manage who has access to the target stock management application. "],
        subtitle: "List of users",
        content: (
          <p>This is the app acess page.</p>
        )
      }}
    </ContentLayout>
  );
}
