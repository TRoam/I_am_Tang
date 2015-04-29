import Ember from 'ember';

export default Ember.Route.extend({
	model:function() {
		this.store.push('edu',{id:1,school:'tongji',startDate:"2009",endDate:'2013'});
		this.store.push('edu',{id:2,school:'tongji',startDate:"2009",endDate:'2013'});
		this.store.push('edu',{id:3,school:'tongji',startDate:"2009",endDate:'2013'});
		this.store.push('edu',{id:4,school:'tongji',startDate:"2009",endDate:'2013'});
		return this.store.all('edu');
	}
});
