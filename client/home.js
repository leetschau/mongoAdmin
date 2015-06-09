if (Meteor.isClient) {

  Template.Home.helpers({
    colls: function () {
      var mycolls = Meteor.user().profile.colls;
      //return Meteor.call('getColls', Meteor.user()._id);
      return mycolls;
    }
  });

  Template.Home.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
