if (Meteor.isClient) {

  Template.DbColl.helpers({
    colls: function () {
      var mycolls = Meteor.user().profile.colls;
      return mycolls;
    }
  });

  Template.DbColl.events({
    'click #searchBtn': function (e, t) {
      var userInput = t.find("#search-box").value;
      console.log(this);
      var collName = this.collname;
      console.log(collName);
      var result = DataColls[collName].coll.find({}, {});

    }
  });
}
