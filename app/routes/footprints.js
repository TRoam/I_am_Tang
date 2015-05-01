import Ember from 'ember';

export default Ember.Route.extend({
	model:function(){
		this.store.push('footprints',{
			id:1,
			start_at:"2009.09.01",
			end_at  :"2013.06.30",
			content :"Start in tongji University",
			role    :"student"
	});
	this.store.push('footprints',{
			id:2,
			start_at:"2009.09.01",
			end_at  :"2013.06.30",
			content :"Start in tongji University",
			role    :"student"
	});
	this.store.push('footprints',{
			id:3,
			start_at:"2009.09.01",
			end_at  :"2013.06.30",
			content :"Start in tongji University",
			role    :"student"
	});
	this.store.push('footprints',{
			id:4,
			start_at:"2009.09.01",
			end_at  :"2013.06.30",
			content :"Start in tongji University",
			role    :"student"
	});
	this.store.push('footprints',{
			id:5,
			start_at:"2009.09.01",
			end_at  :"2013.06.30",
			content :"Start in tongji University",
			role    :"student"
	});
	this.store.push('footprints',{
			id:6,
			start_at:"2009.09.01",
			end_at  :"2013.06.30",
			content :"Start in tongji University",
			role    :"student"
	});
	return this.store.all('footprints');
	}
	
});
