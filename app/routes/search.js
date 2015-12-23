import Ember from 'ember';
import request from 'ic-ajax';

export default Ember.Route.extend({
	model(params) {
		let baseUrl = 'http://api.themoviedb.org/3/search/movie?api_key=72b56103e43843412a992a8d64bf96e9&query=' + Ember.String.htmlSafe(params.keyword) +
                  '&language=ru',
        imageUrl = 'http://image.tmdb.org/t/p/w342';
    return request(baseUrl).then(function(data){
      return {
        movies: data.results,
        imageUrl: imageUrl,
        keyword: params.keyword
      };
    });
	},
  afterModel: function() {
    console.log(this.page);
  }
});
