const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'assets/js'),
    filename: 'lunr.bundle.js',
    library: 'Lunr',
  },
}
