import * as esbuild from "esbuild";

const args = process.argv.slice(2);
const watch = args.includes("--watch");
const deploy = args.includes("--deploy");

const loader = {
  // Add loaders for images/fonts/etc, e.g. { '.svg': 'file' }
};

const plugins = [
  // Add and configure plugins here
];

let buildOptions = {
  entryPoints: ["js/app.js", "js/storybook.js"],
  bundle: true,
  target: "es2017",
  outdir: "../priv/static/assets",
  logLevel: "info",
  loader,
  plugins,
};

if (deploy) {
  buildOptions = { ...buildOptions, minify: true };
}

if (watch) {
  let ctx = await esbuild.context({ ...buildOptions, sourcemap: "inline" });
  await ctx.watch();
} else {
  esbuild.build(buildOptions);
}
