Router.configure({
  layoutTemplate: "Layout"
});

Router.route('/', function() {
  this.render('Home');
});

Router.route('/colls/:collName', function() {
  //this.render('Coll-' + this.params.collName);
  //this.render('colfairs');
  this.render('DBColl', {
    data: { colname: this.params.collName.toTitleCase() }
  });
});
