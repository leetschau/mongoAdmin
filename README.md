# Introduction

A data admin consle web service for bussiness man.
Now only for MongoDB.

# Usage

## Manage collections related to a user

If a collection is related to a user, the user can run CRUD operation on this collection.

The relationship between users and collections is N-to-N.

Changes of the relations can only be executed in terminal by DBA.

* Specify collections (here is "fairs") to a user in mongo shell:
  `db.users.update({'emails': {$elemMatch: {address: 'chad@123.com'}}}, {$set: {'profile.colls': ["fairs"]}})`;

* Add a new collection to existing user collections:
  `db.users.update({'emails': {$elemMatch: {address: 'chad@123.com'}}}, {$push: {'profile.colls': "evaluations"} })`;
