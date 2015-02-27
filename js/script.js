$(document).ready(function() {
	
	var bought = '<span class="bought"></span>';
	var cross = '<span class="delete"></span>';

	function getItem() {
		$('#add-item').keydown(function (enter) {
			if(enter.keyCode == 13) {
				postItem();
			}
		});
	}

	getItem();

	function postItem() {
		var item = $('#add-item').val();
		var working = '<p class="list-item">' + bought + item + cross + '</p>';
		$('.grocery-list').append(working);
		$('#add-item').val('');
		$('.grocery-list p:last-child')
		.css('opacity', '0')
		.animate(
			{ opacity: "1"},
			1000
		);
	};

});



/* DELETING ITEMS */

$(document).on('click', '.delete', function() {
	$(this).closest('p').fadeOut(500);
});



/* INDICATING ITEM IS IN BASKET */

$(document).on('click', '.bought', function() {
	$(this).closest('p').addClass('added');
	$(this).closest('span').removeClass('bought')
	.css('margin-right', '1em')
	.animate (
		{marginRight: '0'},
		200,
		'linear'
	);
	
});