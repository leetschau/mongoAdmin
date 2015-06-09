Router.configure({
  layoutTemplate: "Layout"
});

Router.route('/', function() {
  this.render('Home');
});

Router.route('/details', function() {
  this.render('Details');
});

Router.route('/details/:collName', function() {
  var that = this;
  Meteor.call('getCollContext', this.params.collName, function(err, result) {
      if (err) {
          alert(err);
      } else {
          that.render('Details', {
              data: result
          });
      }
  });
  this.render('WaitingforResult');
});
