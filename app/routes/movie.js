import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return Ember.RSVP.hash({
      movie: this.movieDBService.getMovie(params.movie_id),
      trailer: this.movieDBService.getEnglishTrailer(params.movie_id)
    });
	}
});
