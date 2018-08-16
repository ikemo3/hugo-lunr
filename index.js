const lunr = require('lunr');
require('lunr-languages/lunr.stemmer.support')(lunr);
require('lunr-languages/tinyseg')(lunr);
require('lunr-languages/lunr.jp')(lunr);

module.exports = lunr;
