var internals = {};

internals.handler = function (request, reply) {

  reply({ o: 'k' });
};

exports.register = function (plugin, options, next) {

  plugin.route([
    { path: '/healthcheck', method: 'GET', handler: internals.handler }
  ]);

  next();
};

exports.register.attributes = {
  pkg: require('./package.json')
};
