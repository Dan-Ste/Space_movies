import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['style'],
  classNameBindings: [':backdrop-image'],
  style: function() {
  	console.log(this.get('model.movie.backdrop_path'))
    return 'background-image: url(http://image.tmdb.org/t/p/original' + this.get('model.movie.backdrop_path')+ ')';
  }.property('imageUrl')
});
