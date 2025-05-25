const { dependencies } = require("./package.json");

module.exports = {
  name: "child-widget-1",
  filename: "remoteEntry.js",
  remotes: {},
  exposes: {
    "./Multiplier": "./src/App",
    "./product-reducer": "./src/redux/reducer",
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      import: "react",
      shareScope: "default",
      requiredVersion: dependencies.react,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
    redux: {
      singleton: true,
      requiredVersion: dependencies.redux,
    },
  },
};
