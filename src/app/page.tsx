import ContentLayout from "@/components/contentLayout";

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
