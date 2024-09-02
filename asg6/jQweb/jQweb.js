// Web Development and Programming (CSCI-UA 61) - 001 
// Assignment 6 
// Subi Hwang  
// Nov 17, 2023 

// Refer to the provided example 

// JQuery to build a dynamic website 

$(function() { 
	$('.nav').hide().delay(500).fadeIn(1000);  //fadeIn()

	$('.links').eq(0).click(function() {
		$('.links').removeClass('selected');
		$(this).addClass('selected');

		$('.main').empty();
		let $about = '<p>Animal Crossing is a social simulation video game series developed and published by Nintendo. The series was conceptualized and created by Katsuya Eguchi and Hisashi Nogami. In Animal Crossing, the player character is a human who lives in a village inhabited by various anthropomorphic animals and can do various activities like fishing, insect catching, and fossil hunting. The series is notable for its open-ended gameplay and use of the video game console\'s internal clock and calendar to simulate real passage of time. <br><a href="https://en.wikipedia.org/wiki/Animal_Crossing">Source Wikepida</a><br><a href="https://nookipedia.com/wiki/Main_Page">Image by nookipedia.com</a></p>';
		
		$('.main').html($about);
	})

		// load an a video (iframe tag from you tube link) when you click on the 2nd link
	$('.links').eq(1).click(function() {
		$('.links').removeClass('selected');
		$(this).addClass('selected');

		$('.section').empty();
		let $video = '<div class="centered-container2"><iframe width="560" height="315" src="https://www.youtube.com/embed/xu1mtWaXnxE?si=1A9fag6T7jqCzFq8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>';
		
		$('.main').html($video);
		

	})

	// place an image when you click on the third link
	$('.links').eq(2).click(function() {
		$('.links').removeClass('selected');
		$(this).addClass('selected');
		$('.main').empty();
		let $acphoto = '<center><button id = "hide">Hide Slider</button><button id = "show">Show Slider</button></center><div class="centered-container1"><img src="images/slider.png" id=slider alt="slider"></div>';
		$('.main').html($acphoto);
		
		// hide(), show()
		$("#hide").click(function(){
        $("#slider").hide();
    	});

    	$("#show").click(function(){
        $("#slider").show();
		})

	});
});