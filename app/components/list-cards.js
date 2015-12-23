import Ember from 'ember';
import layout from '../templates/components/list-cards';

export default Ember.Component.extend({
	layout: layout,
	classNames: ['col-lg-3', 'col-md-3', 'col-sm-4', 'col-xs-6'],
  releaseYear: function() {
    return this.get('movie.release_date').split('-')[0];
  }.property('releaseYear')
});
