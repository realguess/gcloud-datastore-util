Change Log
==========


Unreleased
----------

### Security

 * Inform users to upgrade for vulnerabilities.
 * Each sentence must use the present tense and ends with a period.

### Removed

 * Remove a deprecated feature in this release.
 * Basic Authentication is dropped in favor of Digest Authentication.

### Deprecated

 * Deprecate a feature in the upcoming release.
 * Basic Authentication will be replaced by Digest Authentication in the next
   release. 

### Changed

 * Changed an existing functionality.
 * User session data is added to the user object upon initialization.

### Added

 * Add a new feature.
 * A new endpoint `/users` is added to handle user CRUD.

### Fixed

 * Fix a bug.
 * Add the default case to handle unknown cases in user group assigning.


0.1.2 / 2015-05-17
------------------

### Fixed

 * Fix the bug on implementing the wrong callback function


0.1.1 / 2015-04-22 
------------------

### Fixed

 * Fix maximum call stack size exceeded error


0.1.0 / 2015-04-01 
------------------

### Added

 * `datastore.zero`: Remove all entities of a given kind of a namespace
