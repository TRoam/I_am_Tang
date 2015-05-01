import DS from 'ember-data';

export default DS.Model.extend({
	  start_at:DS.attr('string'),
	  end_at  :DS.attr('string'),
	  content :DS.attr('string'),
	  role    :DS.attr('string')
});
