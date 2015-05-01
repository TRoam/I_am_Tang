import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('edu');
  this.route('act');
  this.resource('tang',{path:"/"});
  this.route('projects');
  this.route('footprints');
  this.route('about');
});