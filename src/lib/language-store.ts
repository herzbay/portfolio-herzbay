import type { Locale } from "@/lib/i18n";

type Listener = () => void;

let listeners: Listener[] = [];

export function subscribeLocale(listener: Listener) {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

export function getLocaleSnapshot(): Locale {
  const stored = window.localStorage.getItem("locale");
  return stored === "id" ? "id" : "en";
}

export function getLocaleServerSnapshot(): Locale {
  return "en";
}

export function setLocale(locale: Locale) {
  window.localStorage.setItem("locale", locale);
  listeners.forEach((listener) => listener());
}