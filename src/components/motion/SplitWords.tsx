import { Fragment } from "react";

export function SplitWords({
  text,
  delay = 0,
  stagger = 70,
  wordClassName = "",
}: {
  text: string;
  delay?: number;
  stagger?: number;
  wordClassName?: string;
}) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className="lab-word">
            <span
              className={`lab-word-in ${wordClassName}`}
              style={{ animationDelay: `${delay + i * stagger}ms` }}
            >
              {word}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
  );
}
