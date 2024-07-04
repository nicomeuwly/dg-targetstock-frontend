import ContentLayout from "@/components/contentLayout";

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
