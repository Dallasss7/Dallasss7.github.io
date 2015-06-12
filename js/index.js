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
		heightDocument =  $(window).height() + $('.content').height() + $('footer').height(),
		totalDocument = heightDocument * .15;

	console.log("heightDocument ", heightDocument);
	console.log("content height ", $('.content').height())

	$('#main, #wrapper').css({ 'height': totalDocument + 'px'});

	$('header').css({ 'height': windowHeight + 'px', 'line-height' : windowHeight + 'px'});

	$('.parallax').css({ 'margin-top': windowHeight + 'px'});

	parallax(window.scrollY, footerHeight);

	window.onscroll = function(){
		
		var scroll = window.scrollY;

		$('#main').css({ 'top': '-' + scroll +'px'});

		$('header').css({ 'background-position-y' : 50 - (scroll * 100 / totalDocument) + '%'})
	
		parallax(scroll, footerHeight);
	}

});

function jFade(event){

$('#dallas-header').fadeOut();
}

function jFadeIn(event){

$('#dallas-header').fadeIn();
}

var controller = new ScrollMagic.Controller();


var scene = new ScrollMagic.Scene({
	duration: 700,    
	triggerElement: "#gallery",
	reverse:true
    })

var navscene = new ScrollMagic.Scene({
	duration: 3000,    
	offset: 722,
	reverse:true
    })


scene.update();
scene.on("enter", jFade);
scene.on("leave", jFadeIn);
scene.addTo(controller); 


navscene.update();
navscene.setClassToggle(".nav", "sticky-nav");
navscene.addTo(controller); 

		$('#con').hover(function () {
	      $('.nav-port').css({'visibility':'hidden'});
	      $('.contact-info').css({'display':'inline-block'});
	    }, function () {
	      $('.nav-port').css({'visibility': 'visible'});
	      $('.contact-info').css({'display':'none'});
	    });
	


$('#portfolio').on('click', function (){
	window.location.href = "file:///Users/DSummers/Desktop/programs/sublime/new-port/index.html#portfolio";
})






console.log(winWidth, "WINDOW WIDTH")





























