import Ember from 'ember';

export default Ember.Controller.extend({
	text:'',
	actions:{
		createComment:function(){
		var comment = this.store.createRecord('comment',{
			text:this.get('text'),
			project:this.get('model')
		});
		comment.save().then(function(){
			controller.set('text', ''); 
			controller.get('model.comments').addObject(comment);
		});
	}
	}
});
