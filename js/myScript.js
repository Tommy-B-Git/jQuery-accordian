//Accordion logic

$(document).ready(function(){
	var action  = 'click';
	var speed = '500';
	//Question event handler
	$('li.q').on(action, function() { //use (on) to pass in *var action* from above
		// Grabs element next() to 'li.q'
		$(this).next()
			.slideToggle(speed) //passed in the *var speed* from above
				.siblings('li.a') //returns all sibling elements of the selector('li.q'), but specifically (li.a)
					.slideUp();
		// Grab wee arrow image from <img> tag and store in  * var img * 
		var img = $(this).children('img');
		// Remove the 'rotate' class for all img except the active one
		$('img').not(img).removeClass('rotate'); // select all <img> that ARE NOT $(this)>>>* var img * 
		//Toggle remove class
		img.toggleClass('rotate');
	});
});