import { getCollection } from "astro:content";
import { isLocale, messages } from "../data/i18n";

export const locales = Object.keys(messages).filter(isLocale);

export async function getSiteContentPaths(): Promise<string[]> {
  const entries = await getCollection("site");
  return [
    ...new Set(
      entries.flatMap(({ id }) => {
        const [locale, ...path] = id.split("/");
        return isLocale(locale) && path.length ? [path.join("/")] : [];
      }),
    ),
  ];
}
