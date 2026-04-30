import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tutorials · Curious Machine",
  description: "Hands-on tutorials and learning paths in AI, Data Science and Machine Learning, curated by Curious Machine.",
};

export default function TutorialLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
