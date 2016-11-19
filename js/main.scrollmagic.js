var scene, scene2, scene3, scene4, scene5, scene6;

$(function(){
	
	setTimeout(function() {

		var controller = new ScrollMagic.Controller();

		/* --------- SCENE 1 ---------  */

		var tween =  new TimelineMax(); 
		if(window.innerWidth > 800){
				tween.from($('.main-intro .text'),1.2,{
				scale: 0,
				opacity: 0,
				ease: Power4.easeOut
			})
			.from($('.main-intro .logo'),2,{
				y: 150,
				opacity: 0,
				ease: Power4.easeOut
			},0)
			.to($('.circle-mask img'),3.5,{
				bottom: 0,
				ease: Power4.easeOut
			},0)
			.from($('header'),.5,{
				opacity:0,
				y:-50,
				transition: 'all 0s'
			},1.6)
			.from($('.dots'),.5,{
				opacity:0,
				scale: .5,
				x:50,
			},1.6)
			.from($('.btn-descubre'),.5,{
				opacity:0,
				y:50,
			},1.6);
		}

		scene = new ScrollMagic.Scene({
			tweenChanges: true,
			triggerElement: '.home', 
			//triggerHook: 1,
			//offset: window.innerHeight/2 + 200,
			//duration: window.innerHeight - window.innerHeight/2
		})
		.setTween(tween)
		//.addIndicators()
		.addTo(controller);

		sceneaux = new ScrollMagic.Scene({
			tweenChanges: true,
			triggerElement: '.home', 
			triggerHook: 1,
			offset: window.innerHeight/2 + 200,
			duration: window.innerHeight - window.innerHeight/2
		})
		//.addIndicators()
		.addTo(controller);		

		sceneaux.on('enter',function(){
			$('header').removeClass('scrolled');
			changeMenu('home');
		});


		/* --------- SCENE 2 ---------  */

		var tween2 =  new TimelineMax(); 
		if(window.innerWidth > 800){
			tween2/*.to($('.main-intro .text'),.7,{
				y: 300,
				opacity: 0,
			})
			.to($('.main-intro .logo'),.7,{
				y: 200,
				opacity: 0,
			},0)
			.to($('.btn-descubre'),.7,{
				opacity: 0,
			},0)
			/*.to($('.circle-mask img'),3.5,{
				bottom: -100,
			},0)*/
			.from($('.mundo .text h3'),.5,{
				x: -100,
				opacity: 0,
			},.2)
			.from($('.mundo .text p'),.5,{
				x: -100,
				opacity: 0,
			},.35)
			.from($('.mundo .text a'),.5,{
				x: -100,
				opacity: 0,
				transition: 'all 0s'
			},.5)
			.from($('.hand'),.5,{
				x: 200,
				opacity: 0,
			},.2);
		}

		scene2 = new ScrollMagic.Scene({
			tweenChanges: true,
			triggerElement: '.mundo',
			triggerHook: 1,
			offset: window.innerHeight/2 + 200,
			duration: window.innerHeight - window.innerHeight/2 -199
		})
		.setTween(tween2)
		//.setClassToggle("header", "scrolled")
		//.addIndicators()
		.addTo(controller);

		scene2.on('enter',function(){
			if($('body').hasClass('es')){
				changeMenu('mundo');
				//console.log('es');
			}else{
				changeMenu('app');
				//console.log('no es');
			}
				
			$('header').addClass('scrolled').removeClass('osc');
		});
		scene2.on('leave',function(){
			$('[data-menu = mundo]').removeClass('active');

		});

		/* --------- SCENE 3 ---------  */

		var tween3 =  new TimelineMax(); 
		if(window.innerWidth > 800){
			tween3/*.to($('.mundo .text h3'),.5,{
				x: -100,
				opacity: 0,
			},.2)
			.to($('.mundo .text p'),.5,{
				x: -100,
				opacity: 0,
			},.35)
			.to($('.mundo .text a'),.5,{
				x: -100,
				opacity: 0,
				transition: 'all 0s'
			},.5)
			.to($('.hand'),.5,{
				x: 200,
				opacity: 0,
			},.2)
			*/.from($('.count'),.7,{
				x: -200,
				opacity: 0,
			},0)
			.from($('.img-cap'),.7,{
				y: 100,
				opacity: 0,
			},0)
			.from($('.capitanes .text'),.7,{
				scale: 0,
				opacity: 0,
			},0)
		}
		scene3 = new ScrollMagic.Scene({
			tweenChanges: true,
			triggerElement: '.capitanes',
			triggerHook: 1,
			offset: window.innerHeight/2 + 200,
			duration: window.innerHeight - window.innerHeight/2 -199
		})
		.setTween(tween3)
		////.addIndicators()
		.addTo(controller);

		var count = 0;
		scene3.on('enter',function(){
			if(count == 0){
				$('.count .n').countTo({
			    	from:0,
			    	to:10573,
			    	speed: 1200
			    })
			    count++;
			} else {
				if(window.innerWidth > 800)
					$('.count .n').countTo('restart');
			}
			if($('body').hasClass('es')){
				//console.log('es');
				changeMenu('capitanes');
			}
			else {
				changeMenu('captains');
				//console.log('no es');
			}
			$('header').addClass('osc scrolled');
		});
		/*scene3.on('leave',function(){
			if($('body').hasClass('es'))
				changeMenu('mundo');
				else
				changeMenu('');
		});*/


		/* --------- SCENE 4 ---------  */

		var tween4 =  new TimelineMax(); 
		if(window.innerWidth > 800){
			tween4/*.to($('.count'),.7,{
				x: -200,
				opacity: 0,
			},0)
			.to($('.img-cap'),.7,{
				y: 100,
				opacity: 0,
			},0)
			.to($('.capitanes .text'),.7,{
				scale: 0,
				opacity: 0,
			},0)*/
			.from($('.caracteristicas .cont h3'),.5,{
				y: -100,
				opacity: 0,
			},0)
			.from($('.caracteristicas .cont .carac:first-of-type'),.7,{
				y: 50,
				scale: .5,
				opacity: 0,
			},0)
			.from($('.caracteristicas .cont .carac:nth-of-type(2)'),.7,{
				y: 50,
				scale: .5,
				opacity: 0,
			},.2)
			.from($('.caracteristicas .cont .carac:last-of-type'),.7,{
				y: 50,
				scale: .5,
				opacity: 0,
			},.4)
		}

		scene4 = new ScrollMagic.Scene({
			tweenChanges: true,
			triggerElement: '.caracteristicas',
			triggerHook: 1,
			offset: window.innerHeight/2 + 200,
			duration: window.innerHeight - window.innerHeight/2 -199
		})
		.setTween(tween4)
		////.addIndicators()
		.addTo(controller);

		scene4.on('enter',function(){
			if($('body').hasClass('es')){
				//console.log('es');
				changeMenu('caracteristicas');
			}
			else{
				//console.log('no es');
				changeMenu('features');
			}
		});
		/*scene4.on('leave',function(){
			if($('body').hasClass('es'))
				changeMenu('capitanes');
				else
				changeMenu('');
		});*/


		/* --------- SCENE 5 ---------  */

		var tween5 =  new TimelineMax(); 
		if(window.innerWidth > 800){
			tween5/*.to($('.caracteristicas .cont h3'),.5,{
				y: -100,
				opacity: 0,
			},0)
			.to($('.caracteristicas .cont .carac:first-of-type'),.7,{
				y: 50,
				scale: .5,
				opacity: 0,
			},0)
			.to($('.caracteristicas .cont .carac:nth-of-type(2)'),.7,{
				y: 50,
				scale: .5,
				opacity: 0,
			},.2)
			.to($('.caracteristicas .cont .carac:last-of-type'),.7,{
				y: 50,
				scale: .5,
				opacity: 0,
			},.4)*/
			.from($('.escucha .bg-escucha'),.7,{
				x: -100,
				scale: .5,
				opacity: 0,
			},0)
			.from($('.escucha h3'),.5,{
				x: -150,
				opacity: 0,
			},0)
			.from($('.escucha a'),.5,{
				x: -250,
				transition: 'all 0s',
				opacity: 0,
			},0)
			.from($('.escucha .player'),.5,{
				x: 250,
				opacity: 0,
			},0)
		}

		scene5 = new ScrollMagic.Scene({
			tweenChanges: true,
			triggerElement: '.escucha',
			triggerHook: 1,
			offset: window.innerHeight/2 + 200,
			duration: window.innerHeight - window.innerHeight/2 -199
		})
		.setTween(tween5)
		////.addIndicators()
		.addTo(controller);

		scene5.on('enter',function(){
			if($('body').hasClass('es')){
				changeMenu('escucha');
				//console.log('es');
			}else {
				changeMenu('audioguides');
				//console.log('no es');
			}
		});
		/*scene5.on('leave',function(){
			if($('body').hasClass('es'))
				changeMenu('caracteristicas');
				else
				changeMenu('');
		});*/

		/*var c = 0;
		scene5.on('enter',function(){
			setTimeout(function() {
				var audio = document.getElementById('escucha-audio');
				audio.play();
				$('.escucha .player .controls .play').removeClass('paused');
			}, 500);
		});

		scene5.on('leave',function(){
			var audio = document.getElementById('escucha-audio');
			audio.pause();
			$('.escucha .player .controls .play').addClass('paused');
		});*/


		/* --------- SCENE 6 ---------  */

		var tween6 =  new TimelineMax(); 
		if(window.innerWidth > 800){
			tween6/*.to($('.escucha .bg-escucha'),.7,{
				x: -100,
				scale: .5,
				opacity: 0,
			},0)
			.to($('.escucha h3'),.5,{
				x: -150,
				opacity: 0,
			},0)
			.to($('.escucha .player'),.5,{
				x: 150,
				opacity: 0,
			},0)*/
			.from($('.descargar .bg-descargar'),.5,{
				x: -150,
				opacity: 0,
			},0)
			.from($('.descargar .wrapper > .text'),.5,{
				x: 150,
				opacity: 0,
			},0)
			.from($('.descargar .btn-descargar'),.5,{
				scale: 0,
				opacity: 0,
			},0)
			.from($('footer'),.5,{
				y: 50,
				opacity: 0,
			},0) 
		}

		scene6 = new ScrollMagic.Scene({
			tweenChanges: true,
			triggerElement: '.descargar',
			triggerHook: 1,
			offset: window.innerHeight/2 + 200,
			duration: window.innerHeight - window.innerHeight/2 -199
		})
		.setTween(tween6)
		////.addIndicators()
		.addTo(controller);

		scene6.on('enter',function(){
			if($('body').hasClass('es')){
				changeMenu('descargar');
				//console.log('es');
			} else{
				//console.log('no es');
				changeMenu('download');
			}
		});
		/*scene6.on('leave',function(){
			if($('body').hasClass('es'))
				changeMenu('escucha');
				else
				changeMenu('');
		});*/

		/*scene6.on('enter',function(){
			var audio = document.getElementById('escucha-audio');
			audio.pause();
			$('.escucha .player .controls .play').addClass('paused');
		});

		scene6.on('leave',function(){
			setTimeout(function() {
				var audio = document.getElementById('escucha-audio');
				audio.play();
				$('.escucha .player .controls .play').removeClass('paused');
			}, 500);
		});*/

	}, 2000);

	$(window).resize(function(){

		scene.update(true);
		scene2.update(true);
		scene3.update(true);
		scene4.update(true);
		scene5.update(true);
		scene6.update(true);
		setTimeout(function() {

			if(window.innerWidth <= 1370 && window.innerWidth > 1100)
				location.reload();

		}, 1000);
		
	});


});

function changeMenu(id){
	$('[data-menu]').removeClass('active');
	$('[data-menu='+id+']').addClass('active');
}

