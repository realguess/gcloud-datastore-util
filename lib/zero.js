// Zero
// ====
//
// Zero out all entities of a given kind of a namespace.

'use strict';

// The callback `done` returns the entity keys that were deleted.
module.exports = function (dataset, kind, done) {
  var namespace = dataset.namespace;
  var fields = [ '__key__' ]; // Only need the entity key
  var query = dataset.createQuery(namespace, kind).select(fields);
  var arr = [];

  dataset.runQuery(query, function callback(err, entities, cursor) {
    if (err) {
      return callback(err, arr);
    }
    
    var keys = entities.map(function (val) { return val.key; });
    dataset.delete(keys, function (err) {
      if (err) {
        return callback(err, arr);
      }

      arr = arr.concat(keys);

      if (cursor && cursor !== query.startVal) {
        query = query.start(cursor);
        dataset.runQuery(query, callback);
      } else {
        done(null, arr);
      }
    });
  });
};
