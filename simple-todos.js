// simple-todos.js
Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  // This code only runs on the client
  fetchTasks();
  addTask();
  removeTask();
}

function fetchTasks(){
  Template.body.helpers({
    tasks: function(){
      return Tasks.find({}, {sort: {createdAt: 0}});
    }
  });
}

function addTask(){
  Template.body.events({
    "submit .new-task": function (event) {
      // This function is called when the new task form is submitted

      var text = event.target.text.value;

      Tasks.insert({
        text: text,
        createdAt: new Date() // current time
      });

      // Clear form
      event.target.text.value = "";

      // Prevent default form submit
      return false;
    }
  });
}

function removeTask(){
  Template.body.events({
    "click .remove-task": function(event){
      var button = event;
      console.log(button);
    }
  })
}