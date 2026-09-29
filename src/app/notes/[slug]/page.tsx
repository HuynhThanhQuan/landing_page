import Link from "next/link";
import { notFound } from "next/navigation";
import { notes } from "@/lib/notes";
export const dynamicParams = false;
export function generateStaticParams() {
  return notes.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug);
  return {
    title: note?.title,
    description: note?.summary,
    alternates: { canonical: `/notes/${slug}/` },
  };
}
export default async function Note({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug);
  if (!note) notFound();
  return (
    <main id="content" className="lab-page">
      <article className="lab-article" lang="en">
        <Link className="lab-back" href="/notes/">
          ← All field notes
        </Link>
        <p className="lab-kicker">FIELD NOTE · 28 SEPTEMBER 2026</p>
        <h1 className="lab-h1 lab-h1-sm">{note.title}</h1>
        <p>{note.summary}</p>
        {note.sections.map(([heading, body]) => (
          <section key={heading}>
            <h2>{heading}</h2>
            <p>{body}</p>
          </section>
        ))}
        <a className="lab-btn" href={`/showcase/${note.lab}/index.html`}>
          Explore the experiment ↗
        </a>
      </article>
    </main>
  );
}
