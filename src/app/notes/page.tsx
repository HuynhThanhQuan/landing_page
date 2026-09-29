import Link from "next/link";
import { notes } from "@/lib/notes";
export const metadata = {
  title: "Field notes",
  description:
    "Short notes on decisions, causal measurement and responsible demo delivery.",
  alternates: { canonical: "/notes/" },
};
export default function Notes() {
  return (
    <main className="public-site">
      <header className="public-nav">
        <Link href="/" className="public-brand">
          ← Curious Machine
        </Link>
        <a href="/experiments.html">Experiments ↗</a>
      </header>
      <article className="public-article" lang="en">
        <p className="public-kicker">THE OPEN NOTEBOOK · ENGLISH</p>
        <h1>
          Notes from
          <br />
          the workbench.
        </h1>
        <p>
          Short explanations that connect the interactive labs to real
          decisions. Published 28 September 2026.
        </p>
        {notes.map((note) => (
          <section className="public-note-card" key={note.slug}>
            <h2>
              <Link href={`/notes/${note.slug}/`}>{note.title} ↗</Link>
            </h2>
            <p>{note.summary}</p>
          </section>
        ))}
      </article>
    </main>
  );
}
