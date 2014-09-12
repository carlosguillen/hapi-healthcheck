var internals = {};

internals.handler = function (request, reply) {

  reply({ o: 'k' });
};

exports.register = function (plugin, options, next) {

  var endpoint = options.endpoint || '/healthcheck';

  plugin.route([
    { path: endpoint, method: 'GET', handler: internals.handler }
  ]);

  next();
};

exports.register.attributes = {
  pkg: require('./package.json')
};
