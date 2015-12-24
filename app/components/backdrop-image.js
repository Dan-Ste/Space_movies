import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['style'],
  classNameBindings: [':backdrop-image'],
  style: function() {
    return this.get('model.data.backdrop_path') ? 'background-image: url(http://image.tmdb.org/t/p/original' + this.get('model.data.backdrop_path')+ ')'
    																						: 'background-image: url(../img/space-cover.jpg)';
  }.property('imageUrl')
});
