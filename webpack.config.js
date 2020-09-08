// const isDev = process.env.NODE_ENV === "development";

// module.exports = {
//   mode: isDev ? "development" : "production",
//   entry: [
//     "@babel/polyfill", // enables async-await
//     "./client/index.js",
//   ],
//   output: {
//     path: __dirname,
//     filename: "./public/bundle.js",
//   },
//   resolve: {
//     extensions: [".js", ".jsx"],
//   },
//   devtool: "source-map",
//   watchOptions: {
//     ignored: /node_modules/,
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         loader: "babel-loader",
//       },
//     ],
//   },
// };

module.exports = {
  entry: './client/index.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',

        ]
      }
    ]
  }
};
