
/**************
 * * index.js *
 **************/

'use strict';

// IMPORTS
var Table = require('cli-table3');

// By default, headers will be red, and borders will be grey
// var table = new Table({head:['a','b']});
// table.push(['c','d']);

// instantiate
var table = new Table({
	head: ['TH 1 label', 'TH 2 label'],
	// colWidths: [100, 200]
});

// table is an Array, so you can `push`, `unshift`, `splice` and friends
table.push(
	['First value', 'Second value'],
	['First value', 'Second value']
);

console.log(table.toString());

// EXPORTS

module.exports = {};

/*
module.exports = (input, {postfix = 'rainbows'} = {}) => {
	if (typeof input !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}

	return `${input} & ${postfix}`;
};
*/

/* EOF */
