if (Meteor.isClient) {
  Session.setDefault('rerender', 0);

  Template.JQueryContainer.rendered = function () {
    $(".alert").alert();
  };

  Template.JQueryContainer.helpers({
    helperThatMustReRenderTplOnSessionChange: function () {
	return Session.get('rerender');
    }
  });

  Template.JQueryContainer.events({
    'click #btnChangeSession': function () {
	Session.set('rerender', Session.get('rerender') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
