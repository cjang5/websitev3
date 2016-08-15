// Initialize pseudo-navbar's wrapper so elements below don't jump upon fixing it to the top
$(".pseudo-nav-wrapper").height($(".pseudo-nav").height());

var tn = $(".pseudo-nav");
var tns = "test-nav-scrolled";
var height = $(".pseudo-nav").position().top;

$(window).scroll(function() {
    if ($(this).scrollTop() > height) {
        tn.addClass(tns);
        //$(".pseudo-nav-wrapper").addClass("wrapper-adjust");
        $(".nav-bg").addClass("bg-white");
    } else {
        tn.removeClass(tns);
        //$(".pseudo-nav-wrapper").removeClass("wrapper-adjust");
        $(".nav-bg").removeClass("bg-white");
    }
});

// Scrolling for navbar buttons to elements on page
$('a').click(function() {
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    
    return false;
});
    


// Modal fade ins for project modals
var ModalEffects = (function() {

	function init() {

		var overlay = document.querySelector( '.md-overlay' );

		[].slice.call( document.querySelectorAll( '.md-trigger' ) ).forEach( function( el, i ) {

			var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' ) ),
				close = modal.querySelector( '.md-close' );

			function removeModal( hasPerspective ) {
				classie.remove( modal, 'md-show' );

				if( hasPerspective ) {
					classie.remove( document.documentElement, 'md-perspective' );
                }
			}

			function removeModalHandler() {
				removeModal( classie.has( el, 'md-setperspective' ) ); 
			}

			el.addEventListener( 'click', function( ev ) {
				classie.add( modal, 'md-show' );
                $('.md-overlay').css('visibility', 'visible');
                $('.md-overlay').css('opacity', 1);
                
				overlay.removeEventListener( 'click', removeModalHandler );
				overlay.addEventListener( 'click', removeModalHandler );
                /*
				if( classie.has( el, 'md-setperspective' ) ) {
					setTimeout( function() {
						classie.add( document.documentElement, 'md-perspective' );
					}, 25 );
				}*/
			});

            overlay.addEventListener('click', function( ev ) {
                $('.md-overlay').css('visibility', 'hidden');
                $('.md-overlay').css('opacity', 0);
            });
            
			close.addEventListener( 'click', function( ev ) {
                $('.md-overlay').css('visibility', 'hidden');
                $('.md-overlay').css('opacity', 0);
				ev.stopPropagation();
				removeModalHandler();
			});

		} );

	}

	init();
    
})();