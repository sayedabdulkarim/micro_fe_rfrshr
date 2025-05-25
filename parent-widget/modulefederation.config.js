const { dependencies } = require("./package.json");

module.exports = {
  name: "parent-widget",
  filename: "remoteEntry.js",
  remotes: {
    childwidget1: "child-widget-1@http://localhost:3010/remoteEntry.js",
    childwidget2: "child-widget-2@http://localhost:3009/remoteEntry.js",
  },

  exposes: {},
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
