var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'ebooks'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/ebooks-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'ebooks'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/ebooks-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'ebooks'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/ebooks-production'
  }
};

module.exports = config[env];
