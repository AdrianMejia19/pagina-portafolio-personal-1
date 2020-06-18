//este es el codigo para el efecto scroll y agrega la clase stycky

$(window).on('scroll', function(){
    if ($(window).scrollTop()){
        $('nav').addClass('Stycky');
    }
    else {
        $('nav').removeClass('Stycky');
    }
}); //aqui finaliza el codigo del efecto