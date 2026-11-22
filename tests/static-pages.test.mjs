import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const output = process.env.STATIC_BUILD_DIR ?? "docs/client";
const content = "src/content/site";
const locales = ["en", "th"];

async function contentPaths(directory, prefix = "") {
  const entries = await readdir(directory, { withFileTypes: true });
  const paths = await Promise.all(
    entries.map((entry) => {
      const relative = path.posix.join(prefix, entry.name);
      if (entry.isDirectory()) {
        return contentPaths(path.join(directory, entry.name), relative);
      }
      return entry.name.endsWith(".md") ? [relative.slice(0, -3)] : [];
    }),
  );
  return paths.flat();
}

async function page(route) {
  return readFile(path.join(output, route, "index.html"), "utf8");
}

test("static output includes both locales for every content path", async () => {
  const paths = new Set(
    (await Promise.all(locales.map((locale) => contentPaths(path.join(content, locale))))).flat(),
  );
  for (const locale of locales) {
    for (const route of ["", "blog", "project", ...paths]) {
      const html = await page(path.join(locale, route));
      assert.match(html, new RegExp(`<html\\b[^>]*lang="${locale}"`), `${locale}/${route}`);
    }
  }
});

test("static output retains localized fallback and legacy redirects", async () => {
  const article = await page("en/blog/post/2021-12-05-krunongyao");
  assert.match(article, /This content is shown in its original language/);
  assert.match(article, /lang="th"/);
  for (const [source, destination] of [
    ["projects/ehealth", "/en/project/ehealth/"],
    ["blog/post/2021-12-05-krunongyao", "/en/blog/post/2021-12-05-krunongyao/"],
  ]) {
    assert.ok((await page(source)).includes(`url=${destination}`), source);
  }
  assert.match(await readFile(path.join(output, "404.html"), "utf8"), /Page Not Found/);
});
