import ContentLayout from "@/components/contentLayout";

export default function SettingsPage() {
  return (
    <ContentLayout>
      {{
        title: "General settings",
        description: ["These parameters are used to determine the general operation of this web application."],
        subtitle: "Automatic selection mode",
        content: (
          <p>The following settings are used to configure the automatic mode for selecting products for the target stock.</p>
        )
      }}
    </ContentLayout>
  );
}
