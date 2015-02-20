// simple-todos.js
Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    fetchTasks();
  });

  Template.body.events({
    addTask();
    removeTask();
  });
}

function fetchTasks(){
  tasks: function(){
    return Tasks.find({}, {sort: {createdAt: 0}});
  }
}

function addTask(){
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
}

function removeTask(){
  "click .delete": function(){
    Tasks.remove(this._id);
  }
}

function toggleTask(){
  "click .toggle-checked": function(event){
    Tasks.update(this._id, {$set, {checked, !this.checked }});
  }
}