import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		search: function(keyword) {
			this.transitionTo('search', keyword);
		}
	}
});
