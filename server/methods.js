Meteor.methods({
  getColls: function(userid) {
    console.log(userid);
    return { name: 'fairs', url: 'abc' };
  }
});
