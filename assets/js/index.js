$(function () {
    // ------- swiper -------
    const eventSlide = new Swiper(".sc-event .swiper", {
        navigation: {
            prevEl: ".sc-event .control-bar .btn-prev",
            nextEl: ".sc-event .control-bar .btn-next",
        },
        pagination: {
            el: ".sc-event .swiper .fraction",
            type: "fraction",
        },
        slidesPerView: "auto",
        loop: true,
        autoplay: {
            delay: 3500,
        },
    });

    const recruSlide = new Swiper(".sc-recru .swiper", {
        navigation: {
            prevEl: ".sc-recru .control-bar .btn-prev",
            nextEl: ".sc-recru .control-bar .btn-next",
        },
        pagination: {
            el: ".sc-recru .swiper .fraction",
            type: "fraction",
        },
        slidesPerView: "auto",
        loop: true,
        autoplay: {
            delay: 3500,
        },
    });

    const cityzenSlide = new Swiper(".sc-cityzen .swiper", {
        navigation: {
            prevEl: ".sc-cityzen .cityzen-control-btn .btn-prev",
            nextEl: ".sc-cityzen .cityzen-control-btn .btn-next",
        },
        pagination: {
            el: ".sc-cityzen .swiper .pagination",
            clickable: true,
        },
        slidesPerView: "1",
        spaceBetween: 16,
        autoplay: {
            delay: 3500,
        },
        speed: 1000,
        breakpoints: {
            1280: {
                slidesPerView: "4",
            },
            767: {
                slidesPerView: "3",
            },
        },
    });

    // ------ eventHandler ------
    // common
    $(".fraction").html(function (_, html) {
        return html.replace(" / ", "");
    });

    function toggleAutoPlay(swiper, btnAuto) {
        $(btnAuto).click(function () {
            const isPlay = $(this).hasClass("play");
            if (isPlay) {
                $(btnAuto + " .blind").text("자동재생 시작");
                $(this).removeClass("play");
                swiper.autoplay.stop();
            } else {
                $(btnAuto + " .blind").text("자동재생 중지");
                $(this).addClass("play");
                swiper.autoplay.start();
            }
        });
    }
    function swiperNavigation(swiper, btn) {
        $(btn + " .btn-prev").click(function () {
            swiper.slidePrev();
        });
        $(btn + " .btn-next").click(function () {
            swiper.slideNext();
        });
    }

    //header
    const gnbItem = $("#header .group-gnb .gnb-item");

    gnbItem.mouseover(function () {
        $(this).addClass("on");
    });
    gnbItem.mouseout(function () {
        $(this).removeClass("on");
    });
    $("#header .group-gnb .gnb-item a").focus(function (idx) {
        gnbItem.removeClass("on");
        $(this).closest(".gnb-item").addClass("on");
    });

    $(window).scroll(function () {
        const viewHeight = $(window).innerHeight();
        const scrollTop = $(document).scrollTop();

        if ($(window).width() >= 1024) {
            scrollTop > viewHeight / 2 && $(".group-gnb").addClass("active");
            scrollTop < 95 && $(".group-gnb").removeClass("active");
        } else {
            $(".group-gnb").removeClass("active");
        }
    });

    // sc-event
    toggleAutoPlay(eventSlide, ".sc-event .btn-auto");
    swiperNavigation(eventSlide, ".sc-event .control-btn");

    //sc-news
    $(".sc-news .wrap-title")
        .not(":last")
        .click(function () {
            $(".news-wrap-item").removeClass("on");
            $(".news-wrap-item").eq($(this).data("number")).addClass("on");
        });

    //sc-recru
    toggleAutoPlay(recruSlide, ".sc-recru .btn-auto");
    swiperNavigation(recruSlide, ".sc-recru .control-btn");

    //sc-cityzen
    toggleAutoPlay(cityzenSlide, ".sc-cityzen .btn-auto");

    //footer
    const relateItem = $("#footer .relate-item .title");
    relateItem.click(function () {
        if ($(this).hasClass("on")) {
            //닫기
            relateItem.removeClass("on").siblings(".sub-wrap").stop().slideUp();
        } else {
            //열기
            relateItem.removeClass("on").siblings(".sub-wrap").stop().slideUp();
            $(this).addClass("on").siblings(".sub-wrap").stop().slideDown();
        }
    });

    $("#footer .sc-relate .sub li:first-child a").keydown(function (e) {
        code = e.keyCode;
        if (code === 9 && e.shiftKey) {
            relateItem.removeClass("on").siblings(".sub-wrap").stop().slideUp();
        }
    });
    $("#footer .sc-relate .sub li:last-child a").keydown(function (e) {
        code = e.keyCode;
        if (code === 9 && !e.shiftKey) {
            relateItem.removeClass("on").siblings(".sub-wrap").stop().slideUp();
        }
    });

    //btn-top
    $(".btn-top").click(function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
