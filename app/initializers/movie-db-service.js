export function initialize(container, application) {
  application.inject('route', 'movieDBService', 'service:movie-db');
  application.inject('controller', 'movieDBService', 'service:movie-db');
}

export default {
  name: 'movie-db-service',
  initialize
};
