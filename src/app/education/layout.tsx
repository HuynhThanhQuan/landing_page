import { EducationHeader } from "@/components/EducationHeader";

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <EducationHeader />
      {children}
    </>
  );
}
