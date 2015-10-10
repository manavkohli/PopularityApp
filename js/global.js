$(document).ready(function (){
	
	var paper = Raphael("graph", 800, 700);
	var rect = paper.rect(0, 0, 700, 700);
	rect.attr("stroke", "#000");
	$( "form" ).submit(function( event ) {

 		var lunch_mates = document.getElementById('lm').value;
 		var facebook_friends = document.getElementById("ff").value;
 		var time_spent_ignoring_people = document.getElementById("tsip").value;
 		
 		//Increase size by 8 times to make more visible
 		lunch_mates = lunch_mates*8;

 		//reduce by fraction to make more realistic
 		facebook_friends = Math.floor(facebook_friends/50);
 		time_spent_ignoring_people = time_spent_ignoring_people*4;

		var circle = paper.circle(facebook_friends+100, time_spent_ignoring_people, lunch_mates);
		
		circle.attr("fill", "#f00");

		circle.attr("stroke", "#fff");
		return false;

	});	

});
