Router.configure({
  layoutTemplate: "Layout"
});

Router.route('/', function() {
  this.render('Home');
});

Router.route('/colls/:collName', function() {
  this.render('DBColl', {
    data: { colname: this.params.collName.toTitleCase() }
  });
});
