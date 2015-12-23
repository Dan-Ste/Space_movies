import Ember from 'ember';

export default Ember.Mixin.create({
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
	isMoreThanOnePage: function() {
		return !(this.get('model').totalPages === 1);
	}.property('model'),
	isPositivePage: function() {
		return this.get('model').totalPages && this.get('page') > 1;
	}.property('page'),
	isLessTotalPages: function() {
		console.log(this.get('model').totalPages)
		return this.get('model').totalPages && this.get('page') < this.get('model').totalPages;
	}.property('page', 'model')
});
