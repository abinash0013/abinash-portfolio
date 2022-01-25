$(document).ready(function () {
    // navbar script
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $(".scroll-up-btn").addClass("show");
        } else {
            $(".scroll-up-btn").removeClass("show");
        }
    });

    // slide-up script
    $(".scroll-up-btn").click(function () {
        $("html").animate({ scrollTop: 0 });
    });

    // toggle menu/navbar script
    $(".menu-btn").click(function () {
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });

    //typing-1 animation script
    var typed = new Typed(".typing-1", {
        strings: [
            "Fullstack Developer",
            "Freelancer",
            "Part-Time",
            "Full-Time",
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    //typing-2 animation script
    var typed = new Typed(".typing-2", {
        strings: [
            "Fullstack Developer",
            "Freelancer",
            "Part-Time",
            "Full-Time",
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    // project slider owlcarousel script
    $(".carousel-project").owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 500,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 3,
                nav: false,
            },
        },
    });

    // feedback slider owlcarousel script
    $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 200,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 1,
                nav: false,
            },
            1000: {
                items: 1,
                nav: false,
            },
        },
    });
});
