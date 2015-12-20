import Ember from 'ember';
import request from 'ic-ajax';

export default Ember.Route.extend({
	model(params) {
		let baseUrl = 'http://api.themoviedb.org/3/movie/' + params.movie_id + '?api_key=72b56103e43843412a992a8d64bf96e9&language=ru',
				imageUrl = 'http://image.tmdb.org/t/p/w500';
		console.log(params);

		return request(baseUrl).then(function(data){
      console.log(data);
      return {
        movie: data,
        posterUrl: imageUrl + data.poster_path
      };
    });
	}
});
