Router.configure({
  layoutTemplate: "Layout"
});

Router.route('/', function() {
  this.render('Home');
});

Router.route('/colls/:collName', function() {
  // ['a', 'b'] => { a:1, b:1 }
  var dispArr = DataColls[this.params.collName].displayFields;
  var valArr = _.map(_.range(dispArr.length), function(n) { return 1; });
  var queryField = _.object(dispArr, valArr);
  // { a:1, b:1 } => { _id:1, limit:10, a:1, b:1 }
  var NoPerPage = 10;
  var fixed = { limit: NoPerPage };
  var constraints = _.extend(fixed, { fields: queryField });
  // rawDocs: [{ _id: xxx, chnName: AAA, position: BBB, time: CCC} ... ]
  var rawDocs = DataColls[this.params.collName].coll.find({}, constraints).fetch();
  // dispObj: [{ _id: , dispName: "AAA, BBB, CCC" } ...]
  var dispObj = _.map(rawDocs, function(doc) {
    // Todo: convert Date format
    // if typeof(doc) is Date ...
    return {
      _id: doc._id,
      dispName: (_.map( dispArr, function(i) { return doc[i]; } )).join(', ')
    };
  });
  this.render('DbColl', {
    data: {
      collname: this.params.collName,
      docs: dispObj
    }
  });
});

Router.route('/colls/:collName/new', function() {
  this.render('NewDoc', {
    data: {
      collname: this.params.collName,
      collobj: DataColls[this.params.collName].coll
    }
  });
});

Router.route('/colls/:collName/modif/:_id', function() {
  this.render('ModifyDoc', {
    data: {
      collname: this.params.collName,
      collobj: DataColls[this.params.collName].coll,
      targetDoc: DataColls[this.params.collName].coll.findOne({ _id: this.params._id })
    }
  });
});

Router.route('/colls/:collName/del/:_id', function() {
  var collName = this.params.collName;
  var id = this.params._id;
  DataColls[collName].coll.remove({_id: id});
  Router.go('/colls/' + collName);
});
