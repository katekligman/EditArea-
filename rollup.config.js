import buble from 'rollup-plugin-buble';

export default {
  banner: `// Copyright (C) by Kate Kligman and others
// Distributed under an MIT license: https://github.com/katekligman/konatic/LICENSE
`,
  entry: "src/konatic.js",
  format: "umd",
  dest: "lib/konatic.js",
  moduleName: "Konatic",
  plugins: [ buble({namedFunctionExpressions: false}) ]
};
