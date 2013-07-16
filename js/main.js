$(function(){
    $(".js-carusel-main").carouFredSel({
        height: 615,
        responsive:  true,
        items:  {
            visible: 1,
            height: 615
        },
        scroll:{
            duration: 500
        },
        transition: true,
        onWindowResize: "debounce",
        auto: false,
        next: {
            button: function () {
                return $('<a href="#" class="icon-next icon-arrow-left"></a>').insertAfter($(this).parent())
            }
        },
        prev: {
            button: function () {
                return $('<a href="#" class="icon-prev icon-left"></a>').insertAfter($(this).parent())
            }
        }
    });
});
