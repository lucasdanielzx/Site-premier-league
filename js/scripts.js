$(document).ready(function(){
    $("#banners ul").bxSlider({
        auto: true
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 63) {
            $(".container2").addClass("cabecalho-rolagem");
        } else {
            $(".container2").removeClass("cabecalho-rolagem");
        }
    });
});  