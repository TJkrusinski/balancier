'use strict';

var http = require('http'),
	balancier = {
	_backends: [],
};

/**
 *	Middleware
 *	@method middleware
 *	@param {Object} req
 *	@param {Object} res
 *	@param {Object} proxy
 */
balancier.middleware = function(req, res, proxy) {
	
};

/**
 *	Set backends
 *	@method setBackend
 *	@param {Object|Array} backends
 */
balancier.setBackend = function(backends) {
	if (backends instanceof Array) return backends.forEach(this.setBackend);
	this._backends.push(backends);
};

/**
 *	Remove backend
 *	@method remBackend
 *	@param {Object} backend
 */
balancier.remBackend = function(backend) {
	if (!backend.port || !backend.host) return;
	var index;

	this._backends.forEach(function(el, i){
		if (el.port == backend.port &&
			el.host == backend.host) {
			index = i;
		};
	});

	this._backends.splice(index, 1);
};

/**
 *	Listen
 *	@method listen
 *	@param {Number} port
 */
exports.listen = function(port) {
	
};

module.exports = balancier;
