// Server component: the entrance is a CSS animation so the page is visible without JS.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="lab-route">{children}</div>;
}
