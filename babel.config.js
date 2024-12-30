module.exports = function(api) {
    api.cache(true);
    return {
      presets: [
        ["babel-preset-expo", { jsxImportSource: "nativewind" }],
        "nativewind/babel",
      ],
      plugins: [["inline-import", { "extensions": [".sql"] }],
      ["module-resolver", {
        root: ["."],
        alias: {
          "@/*": "./src/*",
        },
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
        ]
      }]],
    };
  };
  