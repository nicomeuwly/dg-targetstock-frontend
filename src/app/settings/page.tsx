import ContentLayout from "@/components/contentLayout";

/**
 * SettingsPage component renders the general settings page for the application.
 * It provides descriptions and explanations for the settings available.
 * @returns {JSX.Element} The rendered SettingsPage component.
 */
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
