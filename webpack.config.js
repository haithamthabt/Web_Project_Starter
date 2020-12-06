const path = require('path');
module.exports = [{
    entry: ['./src/styles/app.scss', './src/scripts/app.js'],
    output: {
      path: path.resolve(__dirname, 'dist'), // This is for the actual build, this folder will not exist before the build, so you run the npm run build command to generate the dist folder and the bundle files
      publicPath: "dist/", // This is for the server, note this folder wont exist, they will be just on the ram for testing. to generate them run the build command
      filename: 'main.js' //  This is the name of the output/bundle js file
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'main.css', // this is the name of the output/bundle css file
              },
            },
            { loader: 'extract-loader' },
            { loader: 'css-loader' },
            {
              loader: 'sass-loader',
              options: {
                webpackImporter: false,
                includePaths: ['./node_modules'],
                implementation: require('sass'),
              }
            }
          ]
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015'],
            plugins: ['transform-object-assign']
          },
        }
      ]
    },
  }];