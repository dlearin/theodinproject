const path = require('path');
const webpack = require('webpack');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.ProvidePlugin({
      // Mapea el módulo 'date-fns' a la variable 'dateFns'
      dateFns: 'date-fns',
    }),
  ],
};