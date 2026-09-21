"use client";

import { useSyncExternalStore } from "react";
import { translations } from "@/lib/i18n";
import {
  subscribeLocale,
  getLocaleSnapshot,
  getLocaleServerSnapshot,
} from "@/lib/language-store";

export function useLocale() {
  const locale = useSyncExternalStore(
    subscribeLocale,
    getLocaleSnapshot,
    getLocaleServerSnapshot
  );

  return { locale, t: translations[locale] };
}