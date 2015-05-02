import DS from 'ember-data';

export default DS.Model.extend({
	startTime : 	DS.attr('date'),
	endTime :		DS.attr('date'),
	name :          DS.attr('string'),
	role :          DS.attr('string'),
	description :   DS.attr('string'),
	responsibility: DS.attr('string'),
	tools :         DS.attr('string'),
	created_at:     DS.attr('date'),
	updated_at:     DS.attr('date'),
	comments:       DS.hasMany('comment',{async: true})
});