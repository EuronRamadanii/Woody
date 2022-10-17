<template>
    <section class="w3l-testimonials py-5" id="testimonials">
        <!-- main-slider -->
        <div class="container py-md-4 mb-md-0 mb-md-5 mb-4">
            <div class="heading text-center mx-auto">
                <h3 class="hny-title text-center mb-5">What Our Clients Say! </h3>
            </div>
            <div class="owl-testimonial owl-carousel owl-theme">
                <div class="item">
                    <div class="slider-info">
                        <div class="img-circle">
                            <img src="../../assets/images/1.jpg" class="img-fluid rounded" alt="client image">
                        </div>
                        <div class="message-info">
                            <span class="fa fa-quote-left mr-2"></span>
                            <div class="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit id
                                accusantium
                                officia quod quasi necessitatibus perspiciatis Harum error provident
                                quibusdam tenetur.Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit
                                amet mattis quam.consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit</div>
                            <div class="name">- Sami Wade</div>
                            <div class="desp">Comapany ,City</div>
                        </div>
                    </div>
                </div>
                <!-- <div class="item">
                    <div class="slider-info">
                        <div class="img-circle">
                            <img src="../assets/images/c3.jpg" class="img-fluid rounded" alt="client image">
                        </div>
                        <div class="message-info">
                            <span class="fa fa-quote-left mr-2"></span>
                            <div class="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit id
                                accusantium
                                officia quod quasi necessitatibus perspiciatis Harum error provident
                                quibusdam tenetur.Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit
                                amet mattis quam.consectetur adipisicing elitLorem ipsum, dolor sit amet consectetur
                                adipisicing elit.</div>
                            <div class="name">- Smith roy</div>
                            <div class="desp">Comapany ,City</div>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
        <!-- /main-slider -->
    </section>
</template>

<script>
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("movetop").style.display = "block";
    } else {
        document.getElementById("movetop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$(document).ready(function () {
    $('.owl-testimonial').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 1000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            480: {
                items: 1,
                nav: false
            },
            667: {
                items: 1,
                nav: true
            },
            1000: {
                items: 1,
                nav: true
            }
        }
    })
})

$(function () {
    $('.navbar-toggler').click(function () {
        $('body').toggleClass('noscroll');
    })
});

$(window).on("scroll", function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        $("#site-header").addClass("nav-fixed");
    } else {
        $("#site-header").removeClass("nav-fixed");
    }
});

//Main navigation Active Class Add Remove
$(".navbar-toggler").on("click", function () {
    $("header").toggleClass("active");
});
$(document).on("ready", function () {
    if ($(window).width() > 991) {
        $("header").removeClass("active");
    }
    $(window).on("resize", function () {
        if ($(window).width() > 991) {
            $("header").removeClass("active");
        }
    });
});
</script>