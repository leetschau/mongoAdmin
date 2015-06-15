String.prototype.toTitleCase = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

AutoForm.addHooks(null, {
  before: {
    insert: function(doc) {
      var currentUrl = Router.current().url;
      Session.set('currentUrl', currentUrl);
      // Todo: Add indexStr here
      // doc['indexstr'] = doc['chnName'] + ...
      return doc;
    },
    update: function(doc) {
      var currentUrl = Router.current().url;
      Session.set('currentUrl', currentUrl);
      // Todo: Update indexStr here
      // doc['indexstr'] = doc['chnName'] + ...
      return doc;
    }
  },
  onSuccess: function(formType, result) {
    FlashMessages.sendSuccess('Update Success!', { autoHide: true, hideDelay: 1000 });
    // Case 1: convert '/coll/books/modif/bookID' to '/coll/books'
    // Case 2: convert '/coll/books/new' to '/coll/books'
    var originArr = Session.get('currentUrl').split('/');
    var tailLen = ( _.last(originArr) === "new" ) ? 1 : 2;
    var targetUrl = (originArr.slice(0, originArr.length - tailLen)).join('/');
    Router.go(targetUrl);
  },
  onError: function(formType, error) {
    FlashMessages.sendError(error, { autoHide: true, hideDelay: 1000 });
  }
});

accountsUIBootstrap3.logoutCallback = function(error) {
  if (error) {
    console.log("Error:" + error);
  }
  Router.go('/');
}
