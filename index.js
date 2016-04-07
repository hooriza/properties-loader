module.exports = function(content) {
  var callback = this.async();

  var query = require('querystring').parse(this.query.replace(/^\?/, ''));
  query.path = false;

  for (var k in query) if (query.hasOwnProperty(k)) {
    if (/(^\[|^(true|false)$)/.test(query[k])) {
      query[k] = JSON.parse(query[k]);
    }
  }

  require('properties').parse(content, query, function(err, obj) {
    if (err) { return console.error(err); }
    callback(null, 'module.exports = ' + JSON.stringify(obj) + ';');
  });
};