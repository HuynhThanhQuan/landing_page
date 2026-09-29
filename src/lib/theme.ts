export type Theme = "dark" | "light";
export const THEME_KEY = "cm-theme-v1";

// Runs before first paint. Stored choice wins, then the OS preference, then dark.
export const THEME_SCRIPT = `(function(){document.documentElement.classList.add("js");try{var t=localStorage.getItem("${THEME_KEY}");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.setAttribute("data-theme",t)}catch(e){document.documentElement.setAttribute("data-theme","dark")}})();`;
