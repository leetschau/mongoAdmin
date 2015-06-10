Meteor.methods({
  getCollContext: function(collName) {
    console.log(collName);
    return { name: 'fairs', url: 'abc' };
  }
});
