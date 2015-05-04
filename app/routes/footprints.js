import Ember from 'ember';

export default Ember.Route.extend({
	model:function(){
	 this.store.push('footprints',{
			id:1,
			start_at:"2013.05.01",
			end_at  :"Now",
			content :"SAP GRC Audit Management Team",
			role    :"Developer"
	 });	
	 this.store.push('footprints',{
			id:2,
			start_at:"2012.07.01",
			end_at  :"2013.04.30",
			content :"SAP FIN Delivery Management",
			role    :"intern"
	});
	this.store.push('footprints',{
			id:3,
			start_at:"2009.09.01",
			end_at  :"2013.06.30",
			content :"TongJi University/School of Software Engineering",
			role    :"Monitor  of   Class  3"
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
			end_at  :"2012.06.30",
			content :"Community  counselor  of  Southwest  eleven",
			role    :"Honor of Excellent Member"
	});
	return this.store.all('footprints');
	}
	
});
