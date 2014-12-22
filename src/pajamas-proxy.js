/**
 * Created by marco.gobbi on 21/10/2014.
 */
define([
	"bluebird",
	"pajamas"
], function (bluebird, pj) {
	"use strict";
	pj.Promise = bluebird;
	return pj;
});