import Ember from 'ember';
import request from 'ic-ajax';
import config from '../config/environment';

export default Ember.Service.extend({
	apiHost: config.movieDB.apiHost,
	apiKey: config.movieDB.apiKey,
	imageUrl: 'http://image.tmdb.org/t/p/w500',
	language: 'ru',
	sortBy: 'popularity.desc',
	logger: function(m) {
	    console.log(m);
  },
	discoverMovies: function(page) {
		return request(this.apiHost + 'discover/movie' + '?api_key=' + this.apiKey +
									'&page=' + page + '&language=' + this.language + '&sort_by=' + this.sortBy).then((data) => {
      return {
        movies: data.results,
        imageUrl: this.imageUrl,
        totalPages: data.total_pages
      };
  	});
	},
	searchMovies: function(keyword, page) {
		return request(this.apiHost + 'search/movie' + '?api_key=' + this.apiKey + 
									'&query=' + keyword + '&page=' + page + '&language=' + this.language).then((data) => {
      return {
        movies: data.results,
        imageUrl: this.imageUrl,
        keyword: keyword,
        totalPages: data.total_pages
      };
  	});
	},
  getMovie: function(movieId) {
  	return request(this.apiHost + 'movie/' + movieId + '?append_to_response=videos' + '&api_key=' + this.apiKey +
  								'&language=' + this.language).then((data) => {
  									console.log(data.videos.results[0])
      return {
        data: data,
        posterUrl: this.imageUrl + data.poster_path,
        trailer: data.videos.results[0]
      };
  	});
	},
	getEnglishTrailer: function(movieId) {
		return request(this.apiHost + 'movie/' + movieId + '/videos' + '?api_key=' + this.apiKey +
  								'&language=en').then((data) => {
			console.log(data);
      return {
      	data: data.results[0]
      };
  	});
	}
});
