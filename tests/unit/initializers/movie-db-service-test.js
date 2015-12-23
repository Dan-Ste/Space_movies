import Ember from 'ember';
import MovieDbServiceInitializer from '../../../initializers/movie-db-service';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | movie db service', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  MovieDbServiceInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
