import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    }
  },
	model(params) {
		return this.movieDBService.searchMovies(params.keyword, params.page);
	}
});
