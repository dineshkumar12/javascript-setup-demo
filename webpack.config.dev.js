import path from "path";
export default {
  mode: "development",
  devtool: "eval-source-map",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "src"),
    publicPath: "/",
    filename: "bundle.js",
    // hashFunction: "xxhash64"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
};
