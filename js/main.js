
var escuchaPaused = false;
var intervalEscucha = null;

$(function() {

	setTimeout(function() {
		$('#loader').addClass('close').delay(500).fadeOut('slow');
		//$('#gira').fadeOut();
		$('section').css('visibility','visible');
	}, 1500);

	setTimeout(function() {
		altoIntro();
	}, 2100);
	topCircle();
	$(window).resize(function(){
		altoIntro();
		topCircle();
	});

	if(!$('body').hasClass('audioguias') && !$('body').hasClass('faqs')){

		if(window.innerWidth > 800){

			$.scrollify({
	        	section : "section",
		      	easing: "easeOutExpo",
		      	sectionName : "section",
		      	scrollbars: false,
		        scrollSpeed: 2500
		    });
		   // $.scrollify.instantMove("#home");

		}

	}

   	$('.btn-audioguias').click(function(){

   		var t = $(this);
		$('body').fadeOut(1000);
		setTimeout(function() {
			
			if(t.attr('data-lang') === 'es')
				window.location.assign('audioguias.html')
			else if(t.attr('data-lang') === 'en')
				window.location.assign('audioguides.html')
			else 
				window.location.assign('audioguides-fr.html')
		}, 1000);

   	});

    $('.btn-descubre').click(function(){
    	if(window.innerWidth > 800){
    		$.scrollify.move("#mundo");
    		$.scrollify.move("#app");
    	} else 
    		$('html, body').animate({scrollTop: ($('.mundo').offset().top)}, 1000);
    });

    $('header .logo').click(function(){
    	if(window.innerWidth > 800)
    		$.scrollify.move("#home");
    	else 
    		$('html, body').animate({scrollTop: 0}, 1000);
    });

    $('.btn-descubre-detalle').click(function(){
    	$('html, body').animate({scrollTop: ($('.lista').offset().top)}, 1000);
    });

    initPlayerEscucha();

    $('.escucha .player .map ul li').click(function(){

    	var fileName = $(this).attr('file-name');
    	reproducir($(this),fileName);

    });

    $('.escucha .player .controls .play').click(function(){
		var audio = document.getElementById('escucha-audio');
    	if($(this).hasClass('paused')){
    		audio.play();
    		$(this).removeClass('paused');
    	} else {
    		audio.pause();
    		$(this).addClass('paused');
    	}
    });

    var max = 6;
    if($('body').attr('data-lang') == 'fr')
    	max = 3;

    $('.escucha .player .controls .prev').click(function(){

		var fn = parseInt($(this).attr('file-name'));
		var $self = $('.escucha .player .map ul li[file-name='+fn+']');
		

		if(fn == 1){
			$(this).attr('file-name',max);
			$('.escucha .player .controls .next').attr('file-name',2)
		} else {
			if(fn == max){
				$(this).attr('file-name',max-1);
				$('.escucha .player .controls .next').attr('file-name',1);
			} else {
				$(this).attr('file-name',fn-1);
				$('.escucha .player .controls .next').attr('file-name',fn+1);
			}
		}

		reproducir($self,fn);

    });

    $('.escucha .player .controls .next').click(function(){

		var fn = parseInt($(this).attr('file-name'));
		var $self = $('.escucha .player .map ul li[file-name='+fn+']');

		if(fn == 1){
			$(this).attr('file-name',2);
			$('.escucha .player .controls .prev').attr('file-name',max)
		} else {
			if(fn == max){
				$(this).attr('file-name',1);
				$('.escucha .player .controls .prev').attr('file-name',max-1);
			} else {
				$(this).attr('file-name',fn+1);
				$('.escucha .player .controls .prev').attr('file-name',fn-1);
			}
		}

		reproducir($self,fn);

    });

    $('.btn-descargar .text').click(function(){
    	$(this).parent().addClass('clicked');
    });

    $('[data-menu]:not(#btn-ag)').click(function(){
		var sec = $(this).data('menu');
    	if(window.innerWidth > 800){
	    	$('.dot').removeClass('active');
	    	$(this).addClass('active');
	    	$.scrollify.move('#'+sec);
    	} else {
    		$(this).addClass('active');
    		$('html, body').animate({scrollTop: ($('[data-section='+sec+']').offset().top)}, 1000);
    		$('.toggle-menu').removeClass('active');
    		$('.main-nav').slideUp();
    	}
    });

    $('.toggle-menu').click(function(){
    	$('.toggle-menu').toggleClass('active');
    	$('.main-nav').slideToggle();
    });

    if($('body').hasClass('faqs')){

    	var controller = new ScrollMagic.Controller();

		sceneFaqs = new ScrollMagic.Scene({
			tweenChanges: true,
			triggerElement: '.faqs-list',
			triggerHook: .3
		})
		.addTo(controller);

		sceneFaqs.on('enter',function(){
			$('header').removeClass('white').addClass('scrolled');
		});

		sceneFaqs.on('leave',function(){
			$('header').addClass('white').removeClass('scrolled');
		});

	}

});

function altoIntro(){

	var vh = window.innerHeight;
	var hh = $('header').outerHeight();
	$('.main-intro .logo').css({'height': vh - hh - 70, 'margin-top': hh});
	$('.main-intro').css('width',$('.main-intro .logo img').css('width'));
	$('.main-intro .text').css('top',hh);

}

function topCircle(){

	if(!$('body').hasClass('faqs')){
		$('#wp-circle').css({'top':(window.innerHeight *2 - 25*window.innerHeight/100)});
		$('#wp-circle .circle-bg').css({'height': (50*(window.innerHeight*6)/100)});
	}

}


function initPlayerEscucha(){

	if(!$('body').hasClass('audioguias') && !$('body').hasClass('faqs')){

		var audio = document.getElementById('escucha-audio');
	    intervalEscucha = setInterval(function(){ updateTimes(); }, 1000);

	    function updateTimes(){
			$('.time .current').html(toMS(audio.currentTime));
			$('.time .total').html(toMS(audio.duration));
		}

		function toMS(it){
		    if(isNaN(it)){
		        return "00:00";
		    }
		 
		    var minutes = parseInt((it % 3600) / 60);
		    var seconds = parseInt((it % 3600) % 60);
		 
		    return (minutes<10?"0"+minutes:minutes) + ":" + (seconds<10?"0"+seconds:seconds);
		}

	}

}

function reproducir(target,fileName){

	var audio = document.getElementById('escucha-audio');
	var audioName = target.attr('audio-name');
	$('.escucha .player .map ul li').removeClass('selected');
    target.addClass('selected')
    $('.escucha .player audio').attr('src','audios/'+$('body').attr('data-lang')+'/'+fileName + '.mp3');
    audio.play();
    $('.escucha .player .controls .play').removeClass('paused');
    $('.escucha .player .audio-name').html(audioName);

}
