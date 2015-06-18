var winWidth = $(window).width();

function parallax(scrollY, heightFooter){
	
	if(scrollY >= heightFooter){
		$('footer').css({'bottom': '0px'});
	}

	else{
		$('footer').css({'bottom': '-' + heightFooter + 'px'});
	}

}


$(window).load(function(){
	var windowHeight = $(window).height(),
		footerHeight = $('footer').height(),
		heightDocument =   (windowHeight) + $('.content').height() + $('footer').height() - 20;



	// if(winWidth > 1900){
	// 	$('.content').css({
	// 		'height': '1890px',
	// 		'min-height':'1890px'
	// 	});		
	// 	$('#wrapper').css({
	// 		'height':'3039px'
	// 	});
		
	// 	console.log('wrapper ' + $('#wrapper').height())
	// }

	// if(winWidth < 1600){
	// 	console.log("IT WORKED")
	// }


	// console.log("heightDocument ", heightDocument);
	// console.log("content height ", $('.content').height())

	$('#main, #wrapper').css({ 'height': heightDocument + 'px'});

	$('header').css({ 'height': windowHeight + 'px', 'line-height' : windowHeight + 'px'});

	$('.parallax').css({ 'margin-top': windowHeight + 'px'});

	parallax(window.scrollY, footerHeight);

	window.onscroll = function(){
		
		var scroll = window.scrollY;

		$('#main').css({ 'top': '-' + scroll +'px'});

		$('header').css({ 'background-position-y' : 50 - (scroll * 100 / heightDocument) + '%'})
	
		parallax(scroll, footerHeight);
	
		parallax(scroll, footerHeight);

	}

});




function jFade(event){

$('#arrow').animate({opacity :0}, 500);
}

function jFadeIn(event){

$('#arrow').animate({opacity :100}, 500);
}

function jFadeHead(event){

$('#dal-head').animate({opacity :0}, 500);
}

function jFadeinHead(event){

$('#dal-head').animate({opacity :100}, 500);
}

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({   
	duration:200,
	triggerElement:"trigger",
	reverse:true
    })

scene.update();
// scene.on("start", function (event) {
//     console.log("Hit start point of scene.");
// });
scene.on("start", jFade);
scene.on("leave", jFadeIn);
scene.addTo(controller); 


var headScene = new ScrollMagic.Scene({   
	triggerElement: "#gallery",
	reverse:true
    })
headScene.update();
// headScene.on("start", function (event) {
//     console.log("Hit start point of headScene.");
// });
headScene.on("start", jFadeHead);
headScene.on("leave", jFadeinHead);
headScene.addTo(controller); 


console.log(winWidth, "WINDOW WIDTH")





























