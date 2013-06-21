if (Meteor.isClient) {
  Template.JQueryContainer.rendered(function () {
    console.log('dom found ? ', $(".alert"));
    $(".alert").alert();
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
