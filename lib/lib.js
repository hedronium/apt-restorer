var fs 				  = require('fs');
var cls 			  = require('cli-color');
var prompt   		  = require('co-prompt');
var co 	     		  = require('co');


module.exports = function (cmd) {

		var self = this;

		self.repository = [];
		self.softwares  = [];
		self.json  	 	= [];
		self.path 		= "";
		self.repo_source = '/etc/apt/source-list.test';

		this.get = function(cmd) {

		
			co(function *() {

			    	switch(cmd) {

			    		case 'store':
			    			self.path = yield prompt('path: ');
			    			self.store();
			    			break;
			    		case 'run':
			    			self.path = yield prompt('path: ');
			    			self.run();
			    			break;
			    		default:
			    			
			    		break;
			    	}

		     })
 
		 }.bind(self);

}

