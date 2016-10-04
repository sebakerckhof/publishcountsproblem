import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Counts } from 'meteor/tmeasday:publish-counts';

const Todos = new Mongo.Collection('todos');

Meteor.publish('counter',function(){
  Counts.publish(this, 'test', Todos.find({},{fields:{_id:1}}));
});

Meteor.startup(() => {
  // code to run on server at startup
});
