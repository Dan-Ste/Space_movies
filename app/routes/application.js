import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		search: function(keyword) {
			console.log(keyword);
			this.transitionTo('search', keyword);
		}
	}
});
