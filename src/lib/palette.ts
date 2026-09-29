// src/lib/palette.ts
import { labs, sections, type Bi } from "./content";
import { notes } from "./notes";

export type PaletteEntry =
  | { id: string; kind: "nav"; label: Bi; group: Bi; href: string; keywords?: string }
  | { id: string; kind: "action"; label: Bi; group: Bi; action: "lang" | "theme" | "email"; keywords?: string };

const G_GO: Bi = ["Go to", "Đi tới"];
const G_NOTE: Bi = ["Field note", "Bài viết"];
const G_LAB: Bi = ["Experiment", "Thí nghiệm"];
const G_ACT: Bi = ["Action", "Thao tác"];

const nav = (id: string, label: Bi, group: Bi, href: string, keywords?: string): PaletteEntry => ({ id, kind: "nav", label, group, href, keywords });
const act = (id: string, label: Bi, action: "lang" | "theme" | "email", keywords?: string): PaletteEntry => ({ id, kind: "action", label, group: G_ACT, action, keywords });

export function buildEntries(): PaletteEntry[] {
  return [
    ...sections.map((s) => nav(`s-${s.id}`, s.label, G_GO, `/#${s.id}`)),
    nav("contact", ["Contact", "Liên hệ"], G_GO, "/#contact", "email mail"),
    nav("notes", ["All field notes", "Tất cả bài viết"], G_GO, "/notes/"),
    ...notes.map((n) => nav(`n-${n.slug}`, [n.title, n.title], G_NOTE, `/notes/${n.slug}/`, n.summary)),
    nav("experiments", ["Experiment library (11)", "Thư viện 11 thí nghiệm"], G_LAB, "/experiments.html", "labs demos"),
    ...labs.map((l) => nav(`l-${l.id}`, l.title, G_LAB, `/showcase/${l.id}/index.html`, l.topic)),
    act("a-lang", ["Switch language (EN/VI)", "Đổi ngôn ngữ (EN/VI)"], "lang", "english vietnamese tieng viet"),
    act("a-theme", ["Toggle dark/light theme", "Đổi giao diện sáng/tối"], "theme", "dark light mode theme"),
    act("a-email", ["Copy email address", "Sao chép địa chỉ email"], "email", "contact mail"),
  ];
}

const norm = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").toLowerCase();

export function filterEntries(entries: PaletteEntry[], query: string): PaletteEntry[] {
  const q = norm(query.trim());
  if (!q) return entries;
  const terms = q.split(/\s+/);
  return entries.filter((e) => {
    const hay = norm([...e.label, ...e.group, e.keywords ?? ""].join(" "));
    return terms.every((t) => hay.includes(t));
  });
}
