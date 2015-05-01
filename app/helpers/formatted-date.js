import Ember from 'ember';

export function formattedDate(date) {
  return date[0].toDateString();
}

export default Ember.HTMLBars.makeBoundHelper(formattedDate);
