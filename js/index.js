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
		heightDocument =   (windowHeight) + $('.content').height() + $('footer').height();



	$('#main, #wrapper').css({ 'height': heightDocument + 'px'});

	$('header').css({ 'height': windowHeight + 'px', 'line-height' : windowHeight + 'px'});

	$('.parallax').css({ 'margin-top': windowHeight + 'px'});

	//This if statement will fix the weird scrolling issue on mobile.
	if(winWidth>768){
		parallax(window.scrollY, footerHeight);
	}

	if(winWidth<768){
		console.log('IT WORKED', winWidth)

		$('.parallax').css({
		'position': 'static',
		'margin-top' : '0px',
		'margin-bottom': '75px'
	});

	$('#heightPage').css({
		'position': 'static',
		'z-index':'auto'
	});

	$('#heightScroll').css({
		'position': 'static',
		'z-index':'auto'
	});

	$('header').css({
		'position': 'static',
		'z-index':'auto',
		'height': '277px'
	});

	$('#wrapper').css({
		'overflow': 'visible',
		'height':'1274px'
	});

	$('#arrow img').css({
		'display':'none'
	});

	$('#main').css({
		'position': 'static',
		'height':'1274px'
	});

	$('.content').css({
		'height':'73em',
		'min-height':'73em'
	});
	
	}

	else if(winWidth>1850){
			console.log('IT WORKED', winWidth)
	$('#wrapper').css({
		'height':'2795px'
	});

	$('.content').css({
		'height': '115em'
	})
	$('header').css({
		'background-color':'#B2B5BA'
	})
	}


	window.onscroll = function(){
		
		var scroll = window.scrollY;

		$('#main').css({ 'top': '-' + scroll +'px'});

		$('header').css({ 'background-position-y' : 50 - (scroll * 100 / heightDocument) + '%'})
	
		parallax(scroll, footerHeight);
	
		parallax(scroll, footerHeight);

	}

});


//This will fix the annoying animations that occur on mobile. They look great on desktop but not mobile.
if(winWidth>768){
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





























