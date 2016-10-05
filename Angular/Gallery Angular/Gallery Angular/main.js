angular.module("photoApp", []).directive('change', function () {
    var i = 0;
    var srcPhoto = new Array()
    srcPhoto[0] = new Image()
    srcPhoto[1] = new Image()
    srcPhoto[2] = new Image()
    srcPhoto[3] = new Image()
    srcPhoto[0].src = "https://i.vsco.co/544ec9135a6808e07f8b4567?w=360"
    srcPhoto[1].src = "http://image.vsco.co/1/4f7b4abb65a241/51e07796586808834500002a/480x320/jobs01_polaroid690cold_centered.jpg"
    srcPhoto[2].src = "https://i.vsco.co/544ec91359680872228b4567?w=360"
    srcPhoto[3].src = "https://i.vsco.co/544ec913586808ec7d8b4567?w=360"
    return {
        link: function (scope, element, attrs) {
            element.on('click', function () {
                $('.container').show();
                $('.container').append(srcPhoto[0]);
                $('.head').append('<input type="button" value="Next" class="next">')
                $('.next').click(function () {
                    i++
                    //                            console.log(i);
                    $('.container').append(srcPhoto[i]);
                    if (i == srcPhoto.length - 1) {
                        i = 0 - 1;
                    }
                })
            })
        }
    }
});