const app = require('./app');
const server = require('./server');
const { Router } = require('express');

class nexxusjs {
  constructor() {
    this.app = app;
    this.port = 3333;
    this.masterRoute = '';
    this.server = server;
    this.router = Router();
  }

  /**
   * This function is used to set server port
   * @param {number} port Number of port to run the server, by default 3333
   * @returns Return this object to continue create the API
   */
  setPort(port) {
    this.port = port;
    return this;
  }

  /**
   * This function is used to set route prefix e.g  /api or api
   * @param {string} masterRoute Default route prefix to endpoint after this function e.g '/api' on route  '/api/user'
   * @returns Return this object to continue create the API
   */
  setMasterRout(masterRoute) {
    if (masterRoute.indexOf('/') === -1) masterRoute = '/' + masterRoute;
    this.masterRoute = masterRoute;
    return this;
  }

  /**
   * This function is used to set new middleware
   * @param {Function} middleware Function called before request this route. e.g function(request,response,next){ console.log("I am a middleware"); next(); }
   * @returns Return this object to continue create the API
   */
  setMiddleware(middleware) {
    this.app.use(middleware);
    return this;
  }

  /**
   * This function is used to set new route
   * @param {string} route Route to this endpoint e.g '/user' or 'user'
   * @param {Function} customFunction Function called after request this route. e.g function(request,response,next){ response.status.send("My Function").end() }
   * @returns Return this object to continue create the API
   */
  setRoute(route, customFunction) {
    if (route.indexOf('/') === -1) route = '/' + route;
    this.app.use(this.masterRoute + route, customFunction);
    return this;
  }

  /**
   * This function is used to create a route with specific middleware
   * @param {string} route Route to this endpoint e.g '/user' or 'user'
   * @param {Function} customFunction Function called after request this route. e.g function(request,response,next){ response.status.send("My Function").end() }
   * @param {Function} middleware Function called before request this route. e.g function(request,response,next){ console.log("I am a middleware"); next(); }
   * @returns Return this object to continue create the API
   */
  setRouteWithMiddleware(route, customFunction, middleware) {
    if (route.indexOf('/') === -1) route = '/' + route;
    this.app.use(this.masterRoute + route, middleware, customFunction);
    return this;
  }

  /**
   * This function used to create a single route e.g route GET on /status
   * @param {string} method API method e.g 'get', 'post, 'put', 'delete' ...
   * @param {string} route Route to this endpoint e.g '/user' or 'user'
   * @param {Function} customFunction Function called after request this route. e.g function(request,response,next){ response.status.send("My Function").end() }
   * @returns Return this object to continue create the API
   */
  createRoute(method, route, customFunction) {
    if (route.indexOf('/') === -1) route = '/' + route;
    let newRoute = this.router[method](this.masterRoute + route, customFunction);
    this.app.use(newRoute);
    return this;
  }

  /**
   * This function create and run the server
   * @returns {void}
   */
  run() {
    this.server(this.port);
  }
}

module.exports = nexxusjs;
