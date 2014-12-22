Pajamas
=======
  
Pajamas is a simple, well-tested AJAX library built for use with the [Q](http://documentup.com/kriskowal/q/) promise library.
This library has been tested against Chrome (latest), FF (latest), and IE9.
See the [package.json](https://github.com/geowa4/pajamas/blob/master/package.json) file for the current version number and tested dependencies.

Usage
-----

 [For full documentation please refer to original project](https://github.com/geowa4/pajamas)
 
 This repository is just meant to add support to multiple Promise implementation.
 It works with RequireJS "map" feature.
 
 pajamas-proxy.js
 
    define([
    	"bluebird",// this is the Promise library you'd like to use.
    	"pajamas"
    ], function (bluebird, pj) {
    	"use strict";
    	pj.Promise = bluebird;//Could be any implementation, for instance Q.Promise, bluebird or native Promise
    	return pj;
    });
    
 then you should map the proxy in your require.config Object
 
    require.config({	 
    	map: {
    		'*': {    			
    			'pajamas': 'pajamas-proxy'
    		},    		
    		'pajamas-proxy': {'pajamas': 'pajamas'}
    	}
    });