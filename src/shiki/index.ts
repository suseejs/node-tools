import { createHighlighter, type BundledLanguage } from "shiki";

export async function shikiHL(
  code: string,
  lang: BundledLanguage,
): Promise<string> {
  const highlighter = await createHighlighter({
    themes: ["dark-plus", "light-plus"],
    langs: [
      "ruby",
      "json",
      "jsonc",
      "sh",
      "bash",
      "text",
      "js",
      "html",
      "liquid",
      "markdown",
      "md",
      "yml",
      "yaml",
      "yml",
      "ts",
      "jsx",
      "tsx",
      "css",
      "scss",
    ],
  });
  return highlighter.codeToHtml(code, {
    lang: lang,
    themes: {
      light: "light-plus",
      dark: "dark-plus",
    },
  });
}
export async function readStdin(): Promise<string> {
  const chunks = [];

  for await (const chunk of process.stdin) {
    chunks.push(chunk);
  }

  return chunks.join("");
}
