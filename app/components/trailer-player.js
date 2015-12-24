import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['trailer-player'],
  tagName: 'iframe',
  frameborder: 0,
  type: 'text/html',
  width: '100%',
  height: '100%',
  attributeBindings: ['trailerUrl:src', 'frameborder', 'type', 'width', 'height'],
  trailerUrl: function() {
    return 'http://youtube.com/embed/%@1?fs=1&showinfo=0'.fmt(this.get('model.key'));
  }.property('model.key'),
});
