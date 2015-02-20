// simple-todos.js
Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  // This code only runs on the client
  fetchTasks();
  addTask();
  removeTask();
  toggleTask();
}

function fetchTasks(){
  Template.body.helpers({
    tasks: function(){
      return Tasks.find({}, {sort: {createdAt: 0}});
    }
  });
}

function addTask(){
  Template.body.event({
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
  Template.body.event({
    "click .delete": function(event){
      Tasks.remove(this._id);
    }
  });
}

function toggleTask(){
  Template.body.event({
    "click .toggle-checked": function(event){
      Tasks.update(this._id, {$set: {checked: !this.checked }});
    }
  });
}