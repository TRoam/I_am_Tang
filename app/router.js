import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('edu');
  this.route('act');
  // this.route('newstory');
  this.route('newstory',{path:'story/new'});
  this.resource('tang',{path:"/"});
});