export default {
  entry: "src/index.js",
  cssModules: false,
  extractCSS: false,
  // esm: 'babel',
  // cjs: false,
  // umd: false,
  esm: { type: "rollup", file: "es/index" },
  cjs: { type: "rollup", file: "lib/index" },
  umd: { file: "umd/index", name: "test" },
  entry: "src/index.js",
  lessInBabelMode: false,
};
