if (Meteor.isClient) {

  Template.DbColl.helpers({
    indexName: function () {
      console.log('print fairs');
      return "fairs";
    }
  });

  Template.DbColl.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}
