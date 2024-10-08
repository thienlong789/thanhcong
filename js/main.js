$(window).on('load', function() {

    $('.hamburger-menu').on('click', function() {
    // $('.bar').toggleClass('animate');
        $('.mobile-menu').toggleClass('active');
        return false;
    })
    $('.has-children').on('click', function(event) {
        event.stopPropagation();
        var $ul = $(this).children('ul');
        $('.has-children').not(this).children('ul').slideUp('slow', 'swing');
        $('.icon-arrow').not($(this).find('.icon-arrow')).removeClass('open');
        $ul.slideToggle('slow', 'swing');
        $(this).find('.icon-arrow').toggleClass('open');
    });
    $('#closeButton').on('click', function(e) {
        $('.mobile-menu').removeClass('active');
    });
});
// $('body').click(function(e) {
//     var target = $(e.target);
//     if (!target.is('.mobile-menu')) {
//         $('.mobile-menu').removeClass('active');
//     }
// });
function activeMenu() {
    var menuItems;
    var topMenu = $(".news_tab_menu.scroll"),
        topMenuHeight = topMenu.outerHeight(),
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function() {
            var item = $(this).attr("href");
            item = $(item);
            if (item.length) {
                return item;
            }
        });



    // Bind to scroll
    $(window).scroll(function() {
        // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight + 135;
        // Get id of current scroll item
        var cur = scrollItems.map(function() {
            if ($(this).offset().top < fromTop)
                return this;
        });

        // Get the id of the current element
        cur = cur[cur.length - 1];

        var id = cur && cur.length ? $(cur[0]).attr('id') : "";
        // Set/remove active class
        if (menuItems)
            menuItems
            .parent().find("a").removeClass("active")
            .end().parent().find("a").filter("[href='#" + id + "']").addClass("active");
    });
}


function scrollmenu() {
    var st = $(this).scrollTop();
    if (st <= 80) {
        $('.back-top').hide();
    } else {
        $('.back-top').show();
    }
    lastScrollTop1 = st;
}

var lastScrollTop1 = 0;
$(document).ready(function() {
    activeMenu();
    $('.btn_more_check').click(function() {
        $(this).hide();
        $('.dropdown_checkbox').css({ 'height': 'auto' });
        $(this).parents('.proddetail_bot').find('.txt').css({ 'max-height': 'inherit' });
    })
    scrollmenu();
    $(window).scroll(function() {
        scrollmenu();
    });
    $('.back-top').click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
    const body = document.getElementsByTagName('header');
    const main = document.getElementsByTagName('main');
    const news_tab_menu = document.getElementsByClassName('news_tab_menu');
    const mklogistic_banner_all = document.getElementsByClassName('mklogistic_banner_all');
    const scrollDown = "fixed";
    let lastScroll = 0;
    window.addEventListener("scroll", () => {



        const currentScroll = window.pageYOffset;
        let headerHeight = body[0].clientHeight;
        // console.log("🚀 ~ file: home.html ~ line 892 ~ window.addEventListener ~ headerHeight", headerHeight)
        if (currentScroll <= headerHeight) {
            body[0].classList.remove(scrollDown);
            main[0].style.paddingTop = 0;
            return;
            // } else if (lastScroll < currentScroll) {
            //     // console.log('uppp');
            //     // up
            //     body[0].classList.remove(scrollDown);
        } else {
            // console.log('uppp');
            // up
            body[0].classList.add(scrollDown);
            main[0].style.paddingTop = headerHeight + 'px';
        }
        if ($('.news_tab_menu, .mklogistic_banner_all').length) {
            const _height = body[0].clientHeight + mklogistic_banner_all[0].clientHeight;
            if (currentScroll <= _height) {
                news_tab_menu[0].classList.remove(scrollDown);
                news_tab_menu[0].style.marginTop = 0;
                return;
                // } else if (lastScroll < currentScroll) {
                //     news_tab_menu[0].classList.remove(scrollDown);
            } else {
                news_tab_menu[0].classList.add(scrollDown);
                news_tab_menu[0].style.marginTop = headerHeight + 'px';
            }
        }


        lastScroll = currentScroll;
    });


    $('.box-item-pack').on('click', function() {

        $('.box-item-pack').removeClass('active');
        $(this).addClass('active');
    });
    if ($('.step_slide').length) {
        var swiper_1 = new Swiper('.step_slide', {
            slidesPerView: 4,
            spaceBetween: 20,
            pagination: {
                el: '.swiper-pagination-step',
            },
            navigation: {
                nextEl: '.swiper-button-next-step',
                prevEl: '.swiper-button-prev-step',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.2,
                },
                480: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 2.5,
                },
                992: {
                    slidesPerView: 3,
                },
                1130: {
                    slidesPerView: 4,
                }

            },
        });
    }
    if ($('.prize_slide').length) {
        var swiper_1 = new Swiper('.prize_slide', {
            slidesPerView: 3,
            spaceBetween: 20,
            pagination: {
                el: '.swiper-pagination-prize',
                type: "fraction",
            },
            navigation: {
                nextEl: '.swiper-button-next-prize',
                prevEl: '.swiper-button-prev-prize',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.2,
                },
                480: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 3,
                }
            },
        });
    }
    if ($('.leadershipteamslide_slide').length) {
        var leadershipteamslide = new Swiper('.leadershipteamslide_slide', {
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: '.swiper-pagination-leadershipteamslide',
                type: "fraction",
            },
            navigation: {
                nextEl: '.swiper-button-next-leadershipteamslide',
                prevEl: '.swiper-button-prev-leadershipteamslide',
            },

        });
        leadershipteamslide.on('slideChangeTransitionStart', function() {
            var _html = $('.swiper-slide-active .leadershipteamslide_item_txt').html();
            $('.leadershipteamslide_infor').html(_html);
        });
    }
    if ($('.video_slide').length) {
        var swiper_1 = new Swiper('.video_slide', {
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: '.swiper-pagination-video',
                type: "fraction",
            },
            navigation: {
                nextEl: '.swiper-button-next-video',
                prevEl: '.swiper-button-prev-video',
            },
        });
    }
    $('.search-head-ic').click(function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.box-search').removeClass('active');
        } else {
            $(this).addClass('active');
            $('.box-search').addClass('active');
        }
    })
    $('.js-scroll-to').click(function(e){
        e.preventDefault;
        let target = $(this).attr('data-target');
        console.log(111);
        let offsetTop = $(target).offset().top;
        $('html,body').animate({scrollTop: offsetTop , easing: "ease" , duration : 800 });
    })
    $(window).on('load', function() {
        setTimeout(function() {
            ShowPopup()
        }, 600);
    });
});
function ShowPopup() {
    $(".home_popup").modal("show");
}
$(document).ready(function() {

    // jQuery('.dropdown_scroll').scrollbar({
    //     "scrollY": "advanced",
    // });

    if ($('.banner_slide').length > 0) {
        var swipernews = new Swiper('.banner_slide', {
            spaceBetween: 30,
            slidesPerView: 1,
            pagination: {
                el: '.swiper-pagination-homebanner',
                clickable: true,

            },
            navigation: {
                nextEl: '.swiper-button-next-homebanner',
                prevEl: '.swiper-button-prev-homebanner',
            },
            // breakpoints: {
            //     320: {
            //         slidesPerView: 1,
            //     },
            //     480: {
            //         slidesPerView: 2,
            //         spaceBetween: 20,
            //     },
            //     991: {
            //         slidesPerView: 3,
            //         spaceBetween: 30,
            //     },
            //     1366: {
            //         slidesPerView: 3,
            //         spaceBetween: 50,
            //     },
            // },
        });
    }

    if ($('.customerreview_slide').length > 0) {
        var customerreview = new Swiper('.customerreview_slide', {
            spaceBetween: 20,
            slidesPerView: 4,
            pagination: {
                el: '.swiper-pagination-customerreview',
                clickable: true,

            },
            navigation: {
                nextEl: '.swiper-button-next-customerreview',
                prevEl: '.swiper-button-prev-customerreview',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                480: {
                    slidesPerView: 1.5,
                },
                767: {
                    slidesPerView: 2,
                },
                991: {
                    slidesPerView: 2.5,
                },
                1500: {
                    slidesPerView: 3,
                },
            },
        });
    }
    if ($('#other-services-slide').length > 0) {
        var swipernews = new Swiper('#other-services-slide', {
            spaceBetween: 30,
            slidesPerView: 3,
            pagination: {
                el: '.swiper-pagination-other',
                clickable: true,

            },
            navigation: {
                nextEl: '.swiper-button-next-other',
                prevEl: '.swiper-button-prev-other',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                600: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                }
            },
        });
    }
    if ($('.datepicker').length > 0) {
        $("#date_contact").datepicker({
            dateFormat: "dd-mm-yy",
            //            changeMonth: true,
            //            changeYear: true,
            yearRange: "c-0:c+10"
        });
    }


});
$('body').click(function(e) {
    var target = $(e.target);
    if (!target.is('.search-head-ic,.keyword-search')) {
        $('.search-head-ic').removeClass('active');
        $('.box-search').removeClass('active');
    }
});

AOS.init({
    startEvent: 'load',
    duration: 500,
    easing: 'linear',
    speed: 10000,
});
// new WOW({
//     offset: 100,
// }).init();