$(document).ready(function(){

    $('.card').hover(
        function(event) {
            event.preventDefault();
            var src = $(this).find('img').attr('src');
            src = src.replace('.png', '-hover.png');
            $(this).find('img').attr('src', src);
        },
        function(event) {
            event.preventDefault();
            var src = $(this).find('img').attr('src');
            src = src.replace('-hover', '');
            $(this).find('img').attr('src', src);
        }
    )

});
