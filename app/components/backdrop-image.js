import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['style'],
  classNameBindings: [':backdrop-image'],
  style: function() {
    return 'background-image: url(http://image.tmdb.org/t/p/original' + this.get('model.data.backdrop_path')+ ')';
  }.property('imageUrl')
});
