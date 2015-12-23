import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams: ['page'],
	page: 1,
	actions: {
		prevPage: function() {
			this.decrementProperty('page');
		},
		nextPage: function() {
			this.incrementProperty('page');
		}
	},
	isPositivePage: function() {
		return this.get('page') > 1;
	}.property('page'),
	isLessTotalPages: function() {
		console.log(this.get('page') <= this.get('model').totalPages)
		return this.get('page') <= this.get('model').totalPages;
	}.property('page', 'model')
});
