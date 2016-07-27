$(document).ready(function() {
	for (var counter = 0; counter < 101; counter++) {
		var value = counter
		if (value % 15 === 0) {
			value = "fizzbuzz";
		}	
		if (value % 3 === 0) {
			value = "fizz";
		}
		if (value % 5 === 0) {
			value = "buzz";
		}
		$(".values").append(
			'<li class="val_list">' +
			value +
			'</li>'
			);
		
	}	
});