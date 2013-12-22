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
 *	@return {Boolean} optomistic success
 */
balancier.setBackend = function(backends) {
	if (backends instanceof Array) return !!backends.map(this.setBackend, balancier);
	if (!backends.port || !backends.host) return false;
	this._backends.push(backends);
	return true;
};

/**
 *	Remove backend
 *	@method remBackend
 *	@param {Object} backend
 *	@return {Boolean} optomistic success
 */
balancier.remBackend = function(backend) {
	if (!backend.port || !backend.host) return false;
	var index = -1;

	this._backends.forEach(function(el, i){
		if (el.port == backend.port &&
			el.host == backend.host) {
			index = i;
		};
	});

	if (!~index) return false;

	this._backends.splice(index, 1);

	return true;
};

/**
 *	Listen
 *	@method listen
 *	@param {Number} port
 */
exports.listen = function(port) {
	
};

module.exports = balancier;
