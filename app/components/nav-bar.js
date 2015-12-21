import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		search: function(keyword) {
			this.sendAction('action', this.get('keyword'));
		}
	}
});
