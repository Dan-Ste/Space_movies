import Ember from 'ember';
import request from 'ic-ajax';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    }
  },
  model(params) {
    return this.movieDBService.discoverMovies(params.page)
  }
});
