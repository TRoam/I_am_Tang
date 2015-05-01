import Ember from 'ember';

export default Ember.Route.extend({
	 model: function() {
	  this.store.push('project',{
	  	id : 1,
	  	name : 	        "project 1",
		role :          "some sole",
		description :   "YOU are biii",
		responsibility: "DS.attr('string')",
		tools :         "DS.attr('string')",
		startTime:      new Date(),
		endTime   :       new Date()
	   });
	  this.store.push('project',{
	  	id : 2,
	  	name : 	        "project 2",
		role :          "DS.attr('string')",
		description :   "DS.attr('string')",
		responsibility: "DS.attr('string')",
		tools :         "DS.attr('string')",
		startTime:       new Date(),
		endTime      :   new Date()
	   });
	  this.store.push('project',{
	  	id : 3,
	  	name : 	        "project 3",
		role :          "DS.attr('string')",
		description :   "DS.attr('string')",
		responsibility: "DS.attr('string')",
		tools :         "DS.attr('string')",
		startTime:      new Date(),
		endTime       :   new Date()
	   });
	  this.store.push('project',{
	  	id : 4,
	  	name : 	        "project 4",
		role :          "DS.attr('string')",
		description :   "DS.attr('string')",
		responsibility: "DS.attr('string')",
		tools :         "DS.attr('string')",
		startTime:      new Date(),
		endTime        :  new Date()
	   });
	  this.store.push('project',{
	  	id : 5,
	  	name : 	        "project 5",
		role :          "DS.attr('string')",
		description :   "DS.attr('string')",
		responsibility: "DS.attr('string')",
		tools :         "DS.attr('string')",
		startTime:      new Date(),
		endTime      :    new Date()
	   });
       return this.store.all('project');
    }
});
