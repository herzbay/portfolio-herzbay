type Theme = "light" | "dark";
type Listener = () => void;

let listeners: Listener[] = [];

export function subscribeTheme(listener: Listener) {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

export function getThemeSnapshot(): Theme {
  return document.documentElement.classList.contains("light")
    ? "light"
    : "dark";
}

// Harus konsisten dengan default di no-flash script (app/layout.tsx)
export function getThemeServerSnapshot(): Theme {
  return "dark";
}

export function setTheme(theme: Theme) {
  document.documentElement.classList.toggle("light", theme === "light");
  localStorage.setItem("theme", theme);
  listeners.forEach((listener) => listener());
}
