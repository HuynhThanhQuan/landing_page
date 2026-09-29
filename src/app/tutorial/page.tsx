import Link from "next/link";
export const metadata = { title: "Learning resources" };
export default function Tutorial() {
  return (
    <main id="content" className="lab-page">
      <article className="lab-article">
        <Link className="lab-back" href="/">← Curious Machine</Link>
        <h1>Learn by exploring.</h1>
        <p>
          The current learning collection lives in the experiment library and
          field notes. No enrollment or account is required.
        </p>
        <p>
          <a href="/experiments.html">Explore 11 experiments ↗</a>
        </p>
        <p>
          <Link href="/notes/">Read field notes ↗</Link>
        </p>
      </article>
    </main>
  );
}
