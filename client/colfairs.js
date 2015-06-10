if (Meteor.isClient) {

  Template.colfairs.helpers({
    mydata: function () {
      return {colname: "Fairs"};
    }
  });

}
