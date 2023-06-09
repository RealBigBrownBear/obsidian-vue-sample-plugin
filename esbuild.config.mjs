import esbuild from "esbuild";
import vue3 from "esbuild-plugin-vue3";
import builtins from "builtin-modules";
import process from "process";

const banner = `/***
 * This is a generated/bundled file by ESbuild.
 * If you want to view the source, please visit the GitHub repo of this plugin.
 */`;

const prod = (process.argv[2] === "production");

const context = await esbuild.context({
    bundle: true,
    entryPoints: ["src/main.ts"],
    outfile: "main.js",
    banner: { js: banner },
    format: "cjs",
    target: "ESNext",
    logLevel: "info",
    sourcemap: prod ? false : "inline",
    treeShaking: true,
    plugins: [vue3()],
    external: [
        "obsidian",
        "electron",
        "@codemirror/autocomplete",
        "@codemirror/collab",
        "@codemirror/commands",
        "@codemirror/language",
        "@codemirror/lint",
        "@codemirror/search",
        "@codemirror/state",
        "@codemirror/view",
        "@lezer/common",
        "@lezer/highlight",
        "@lezer/lr",
        ...builtins
    ]
});

if (prod) {
    await context.rebuild();
    process.exit(0);
} else {
    await context.watch();
}
