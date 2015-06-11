String.prototype.toTitleCase = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

AutoForm.addHooks(null, {
  onSuccess: function(operation, result, template) {
    FlashMessages.sendSuccess('Update Success!', { autoHide: true, hideDelay: 1000 });
    Router.go("/");
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
