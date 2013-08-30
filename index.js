"use strict";

var Uch = function(cacheInstance) {
	this.cache = cacheInstance;
};

Uch.prototype.check = function(name, cbDone, cbCont) {
	var res = this.cache && this.cache.get(name);
	if(res) {
		cbDone(null, res);
	} else {
		cbCont();
	}
};

Uch.prototype.add = function(name, cb) {
	var self = this;
	return function(err, res) {
		if(err) {
			cb(err);
		} else {
			self.cache && self.cache.put(name, res);
			cb(null, res);
		}
	};
};

Uch.prototype.remove = function(name, cb) {
	var self = this;
	return function(err, res) {
		if(err) {
			cb(err);
		} else {
			self.cache && self.cache.del(name);
			cb(null, res);
		}
	};
};

module.exports = Uch;
