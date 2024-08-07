import ContentLayout from "@/components/contentLayout";

/**
 * Home component renders the home page content using the ContentLayout component.
 * @returns {JSX.Element} The rendered Home component.
 */
export default function Home() {
  return (
    <ContentLayout>
      {{
        title: "Welcome",
        description: ["This is the home page"],
        content: (
          <p></p>
        )
      }}
    </ContentLayout>
  );
}
