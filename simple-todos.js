if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.yolo.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.yolo.events({
    'click button': function () {
      // increment the counter when button is clicked
      console.log("button pressed");
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
