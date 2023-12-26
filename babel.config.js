// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ["module:metro-react-native-babel-preset"],
//     plugins: ["nativewind/babel", "react-native-reanimated/plugin"], // <-- add this line
//   };
// };

// module.exports = {
//   presets: ["module:metro-react-native-babel-preset"],
//   plugins: ["nativewind/babel", "react-native-reanimated/plugin"], // <-- add this line
// };

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    env: {
      production: {
        plugins: ["react-native-paper/babel"],
      },
    },
    plugins: [
      [
        "module-resolver",
        {
          extensions: [".tsx", ".ts", ".js", ".json"],
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
