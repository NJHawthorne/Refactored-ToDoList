// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';

import Backbone from 'backbone';
import $ from 'jquery';

const AddEntries = Backbone.View.extend({
	className: 'entry-wrapper',
	initialize: function(listEntry) {
		this.listEntry = listEntry;
		this.render();
	},
	render: function() {
		let $entry = $('<div />', {text: this.listEntry});
		this.$el.append($entry);
	}
});

$('form').submit((e) => {
	e.preventDefault;
	$('.listEntries').append($('.userEntry').value);
	console.log('whoop');
});

console.log('noot noot');