$(document).ready(function() {
	for (var value = 0; value < 101; value++) {
		$(".values").append(
			'<li class="val_list">' +
			value +
			'</li>'
			);
		if ( (value % 3) === 0 ) {
			$("val_list").text("fizz");
		}
	}	
});