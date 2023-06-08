$(document).ready(function(){
    $("#banners ul").bxSlider({ /*slider da tela inicial*/
        auto: true
    });

    $(window).scroll(function () { /*fixar menu ao rolar página*/
        if ($(this).scrollTop() > 63) {
            $(".container-menu-principal").addClass("cabecalho-rolagem");
        } else {
            $(".container-menu-principal").removeClass("cabecalho-rolagem");
        }
    });

    $('#conteudo-fotos-videos .box-fotos').magnificPopup({ /*galeria de imagens*/
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
});  