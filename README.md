GCLOUD-DATASTORE-UTIL
=====================

NAME
----

gcloud-datastore-util - utility for Google Cloud Datastore


DESCRIPTION
-----------

This module exports a collection of common functionalities when using [Google
Cloud Datastore] via [gcloud] module:

1. Remove all entities of a given kind of a namespace.

_Note that this module does not include the [gcloud] module, it must be
required separately._


[Google Cloud Datastore]: https://cloud.google.com/datastore/docs
[gcloud]: http://googlecloudplatform.github.io/gcloud-node/


EXAMPLES
--------

Remove all entities of a given kind of a namespace:

```js
var config = {
  projectId: 'projectId',
  keyFilename: '/path/to/key/file.json',
  namespace: 'Namespace'
};
var dataset = require('gcloud').datastore.dataset(config);
var datastore = require('gcloud-datastore-util');
var kind = 'kind';

datastore.zero(dataset, kind, function (err, keys) {
  // Print the keys of all entities that were deleted.
  console.log(err || keys);
});
```


TEST
----

Install development dependencies:

```sh
$ npm install
```

Run test on every code change:

```sh
$ mocha --harmony --watch
```


AUTHORS
-------

Chao Huang <chao@realguess.net>


SEE ALSO
--------

- [gcloud](http://googlecloudplatform.github.io/gcloud-node/)
