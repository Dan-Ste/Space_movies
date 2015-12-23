import Ember from 'ember';
import request from 'ic-ajax';

export default Ember.Route.extend({
	model(params) {
		return this.movieDBService.getMovie(params.movie_id);
	}
});
