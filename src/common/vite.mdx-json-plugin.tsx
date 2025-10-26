// vite.mdx-json-plugin.ts
import fs from "fs";
import path from "path";
import fg from "fast-glob";
import matter from "gray-matter";
import type { Plugin } from "vite";

interface MdxJsonPluginOptions {
  patterns?: string[];
  outFile?: string;
  stripContent?: boolean;
  excerptLines?: number;
  transform?: (entry: Record<string, any>) => any;
}

/**
 * Vite plugin: scans MDX files in multiple paths and writes a JSON file.
 */
export default function MdxJsonPlugin(options: MdxJsonPluginOptions = {}): Plugin {
  const {
    patterns = ["content/**/*.mdx", "docs/**/*.mdx"],
    outFile = "public/mdx-index.json",
    stripContent = false,
    excerptLines = 0,
    transform = undefined,
  } = options;

  return {
    name: "vite-mdx-json-plugin",
    async buildStart() {
        debugger
      try {
        // find files (glob)
        const files = await fg(patterns, { dot: false });

        const entries = files
          .map((filePath) => {
            const raw = fs.readFileSync(filePath, "utf8");
            const { data: frontmatter = {}, content = "" } = matter(raw);
            const file = path.basename(filePath);
            const slug = file.replace(/\.mdx$/i, "");

            let excerpt: string | null = null;
            if (excerptLines > 0) {
              excerpt = content.split(/\r?\n/).slice(0, excerptLines).join("\n");
            }

            const baseEntry = {
              path: filePath,
              file,
              slug,
              frontmatter,
              content: stripContent ? undefined : content,
              excerpt,
            };

            return transform ? transform(baseEntry) : baseEntry;
          })
          .filter(Boolean);

        // ensure output dir exists
        const outDir = path.dirname(outFile);
        if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

        fs.writeFileSync(outFile, JSON.stringify(entries, null, 2), "utf8");
        console.log(`✅ mdx JSON generated: ${outFile} (${entries.length} items)`);
      } catch (err) {
        console.error("vite-mdx-json-plugin error:", err);
      }
    },
  };
}
