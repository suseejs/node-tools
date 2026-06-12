import * as esbuild from "esbuild";

await esbuild.build({
    entryPoints: ["./src/shiki/index.ts"],
    bundle: true,
    outdir: "lib/shiki",
    format: "esm",
    minify: true,
    sourcemap: true,
});
