$(document).ready(function() {


    /* 
        $('.choicegroup.capa_inputtype .field-input[type="radio"]').change(function() {

            if ($(this).prop("checked")) {
                console.log("line 17 - checked")

                $(".choicegroup label").css({
                    "background-color": "white",
                    "color": "black",
                    "border": "2px solid #142654"
                })


                $(this).parent().css({
                    "background-color": "#0EFBB8",
                    "border": "2px solid #142654",
                    "color": "black",
                })

                $(".choicegroup label").hover(function() {
                    $(this).css({ "border": "2px solid #0EFBB8" });
                }, function() {
                    $(this).css({ "border": "2px solid #142654" });
                });


            }
        });



        $('.field-input[type="checkbox"]').change(function() {
            if ($(this).prop("checked")) {

                $(this).parent().css({
                    "background-color": "#0EFBB8",
                    "border": "2px solid #142654",
                    "color": "black",

                })

                $(".choicegroup label").hover(function() {
                    $(this).css({ "border": "2px solid #0EFBB8" });
                }, function() {
                    $(this).css({ "border": "2px solid #142654" });
                });


            } else {
                $(this).parent().css({
                    "background-color": "white",
                    "color": "black",
                    "border": "2px solid #142654"
                })

                $(".choicegroup label").hover(function() {
                    $(this).css({ "border": "2px solid #0EFBB8" });
                }, function() {
                    $(this).css({ "border": "2px solid #142654" });
                });
            }
        }); */

    window.onscroll = function() { scrollIndicator() };

    function scrollIndicator() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("scrollIndicatorBar").style.width = scrolled + "%";
    }

    console.log("helllo");

});


/* var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var hwidth = 100 / slides;
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
} */




/*     if ($('.choicegroup.capa_inputtype .field-input[type="radio"]').prop("checked")) {
           console.log("radio checked")
           $(this).parent().css({
               "background-color": "#0EFBB8",
               "border": "2px solid #142654",
               "color": "black",
           })
       }


       if ($('.xmodule_display.xmodule_CapaModule div.problem .choicegroup input[type="checkbox"]').prop("checked")) {

           console.log("checkbox checked")
           $(this).parent().css({
               "background-color": "#0EFBB8",
               "border": "2px solid #142654",
               "color": "black",

           })
       }
    */