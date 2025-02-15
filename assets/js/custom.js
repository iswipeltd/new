!function(t){"use strict";document.addEventListener("DOMContentLoaded",function(){var t,e=document.querySelectorAll("img.lazy");function o(){t&&clearTimeout(t),t=setTimeout(function(){var t=window.pageYOffset;e.forEach(function(e){e.offsetTop<window.innerHeight+t&&(e.src=e.dataset.src,e.classList.remove("lazy"))}),0===e.length&&(document.removeEventListener("scroll",o),window.removeEventListener("resize",o),window.removeEventListener("orientationChange",o))},20)}window.addEventListener("load",o),document.addEventListener("scroll",o),window.addEventListener("resize",o),window.addEventListener("orientationChange",o)}),t(document).ready(function(){let e=document.getElementById("baseURL").value;t("#main-menu").meanmenu({meanMenuContainer:".mobile-nav-menu",meanScreenWidth:"991",meanExpand:["<img src='assets/images/svg-icons/arrow-down.svg' width='16' height='16' alt='Expand'>"]}),t(".mobile-menu-toggle-btn").on("click",function(){t(".menu-sidebar-area").addClass("active"),t(".body-overlay").addClass("active")}),t(".menu-sidebar-close-btn").on("click",function(){t(".menu-sidebar-area").removeClass("active"),t(".body-overlay").removeClass("active")}),t(".body-overlay").on("click",function(){t(".menu-sidebar-area").removeClass("active"),t(".body-overlay").removeClass("active")});let o=document.body,s=document.documentElement,i=Math.max(o.scrollHeight,o.offsetHeight,s.clientHeight,s.scrollHeight,s.offsetHeight);if(100<t(window).scrollTop()&&t(".header-menu-area.sticky-header").addClass("sticky_menu"),i>1400){let a=t(".header-menu-area.sticky-header"),n=!1;t(window).scroll(function(){100<t(window).scrollTop()&&!n&&(a.addClass("sticky_menu animated fadeIn").animate({"margin-top":"0px"}),n=!0),100>t(window).scrollTop()&&n&&(a.removeClass("sticky_menu animated fadeIn").css("margin-top","0px"),n=!1)})}function l(){let t=document.querySelectorAll(".animated");t.forEach(t=>{(function t(e){let o=e.getBoundingClientRect();return o.top>=0&&o.left>=0&&o.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&o.right<=(window.innerWidth||document.documentElement.clientWidth)})(t)&&t.classList.add("activate-animation")})}t(".blog-area .post-content p").filter(function(){return/\u00A0/.test(t(this).text())}).hide(),t(".slider-wrapper").slick({slidesToShow:1,infinite:!0,autoplay:!0,autoplaySpeed:5e3,draggable:!0,arrows:!0,slidesToScroll:1,loop:!0,dots:!1,speed:1500,pauseOnHover:!1,prevArrow:"<button type='button' class='slider-arrow-btn prev-btn'><i><img src='assets/images/svg-icons/arrow-prev.svg' width='45' height='45' alt='Prev'></i></button>",nextArrow:"<button type='button' class='slider-arrow-btn next-btn'><i><img src='assets/images/svg-icons/arrow-next.svg' width='45' height='45' alt='Next'></i></button>",responsive:[{breakpoint:767,settings:{autoplay:!0,arrows:!1}},]}),t("#info_card_slider_wrapper").slick({slidesToShow:3,infinite:!0,autoplay:!0,draggable:!0,arrows:!0,slidesToScroll:1,loop:!0,dots:!1,speed:1500,prevArrow:"<button type='button' class='info-card-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",nextArrow:"<button type='button' class='info-card-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",responsive:[{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}},]}),t("#infrastructure").slick({slidesToShow:1,infinite:!0,autoplay:!0,draggable:!0,arrows:!1,slidesToScroll:1,loop:!0,dots:!0,speed:1500}),t("#team_slider_wrapper").slick({slidesToShow:3,infinite:!0,autoplay:!0,draggable:!0,arrows:!1,slidesToScroll:1,loop:!0,dots:!0,speed:1500,responsive:[{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}},]}),t(".client-logo-wrapper").slick({slidesToShow:5,infinite:!0,autoplay:!0,draggable:!0,arrows:!1,slidesToScroll:1,loop:!0,dots:!1,speed:1500,prevArrow:"<button type='button' class='testimonial-arrow-btn prev-btn'><div class='swip'><div class='title-wrapper'><i class='icon-left-arrow title-1'></i><i class='icon-left-arrow title-2'></i></div></div></button>",nextArrow:"<button type='button' class='testimonial-arrow-btn next-btn active'><div class='swip'><div class='title-wrapper'><i class='icon-right-arrow title-1'></i><i class='icon-right-arrow title-2'></i></div></div></button>",responsive:[{breakpoint:1199,settings:{slidesToShow:4}},{breakpoint:991,settings:{slidesToShow:3}},{breakpoint:767,settings:{slidesToShow:2}},]}),t(".testimonial-slider-two").slick({slidesToShow:1,infinite:!0,autoplay:!1,draggable:!0,arrows:!0,slidesToScroll:1,adaptiveHeight:!0,loop:!0,dots:!1,speed:1500,centerMode:!0,prevArrow:"<button type='button' class='testimonial-arrow-btn prev-btn'><i><img src='https://test.IswipeTech.com/public/assets/images/svg-icons/arrow-prev.svg' width='45' height='45' alt='Prev'></i></button>",nextArrow:"<button type='button' class='testimonial-arrow-btn next-btn active'><i><img src='https://test.IswipeTech.com/public/assets/images/svg-icons/arrow-next.svg' width='45' height='45' alt='Next'></i></button>",responsive:[{breakpoint:1600,settings:{slidesToShow:1}},{breakpoint:1400,settings:{slidesToShow:1,adaptiveHeight:!0}},{breakpoint:768,settings:{slidesToShow:1}},{breakpoint:625,settings:{slidesToShow:1}},]}),t(".testimonial-arrow-btn").on("click",function(){t(".testimonial-arrow-btn").removeClass("active"),t(this).addClass("active")}),t("#review-prev").on("click",function(e){e.preventDefault(),t(".prev-btn").trigger("click")}),t("#review-next").on("click",function(e){e.preventDefault(),t(".next-btn").trigger("click")}),t(".home-tech").slick({slidesToShow:6,infinite:!0,autoplay:!0,lazyLoad:"ondemand",draggable:!0,arrows:!1,slidesToScroll:3,loop:!0,dots:!0,speed:1500,centerMode:!1,prevArrow:"<button type='button' class='testimonial-arrow-btn prev-btn'><i class='fa-solid fa-arrow-left title-1'></i></button>",nextArrow:"<button type='button' class='testimonial-arrow-btn next-btn active'><i class='fa-solid fa-arrow-right title-1'></i></button>",responsive:[{breakpoint:1400,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2,dots:!1}},{breakpoint:625,settings:{slidesToShow:1,slidesToScroll:1,dots:!1}},]}),t("#related_portfolio").slick({slidesToShow:3,infinite:!0,autoplay:!0,draggable:!0,arrows:!0,slidesToScroll:1,loop:!0,dots:!1,speed:1500,prevArrow:"<button type='button' class='portfolio-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",nextArrow:"<button type='button' class='portfolio-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",responsive:[{breakpoint:767,settings:{slidesToShow:2}},{breakpoint:460,settings:{slidesToShow:1}},]}),t(".portfolio-slider").slick({slidesToShow:3,infinite:!0,autoplay:!1,draggable:!0,arrows:!1,slidesToScroll:1,loop:!0,dots:!1,speed:1500,prevArrow:"<button type='button' class='testimonial-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",nextArrow:"<button type='button' class='testimonial-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",responsive:[{breakpoint:991,settings:{autoplay:!0,slidesToShow:2}},{breakpoint:554,settings:{autoplay:!0,slidesToShow:1}},]}),t(".testimonial-slider").slick({slidesToShow:1,infinite:!0,autoplay:!1,draggable:!0,arrows:!0,slidesToScroll:1,loop:!0,dots:!1,speed:1500,vertical:!0,touchMove:!0,useTransform:!0,prevArrow:"<button type='button' class='testimonial-arrow-btn testimonial-prev'><div class='swip'><div class='title-wrapper'><i class='icon-left-arrow title-1'></i><i class='icon-left-arrow title-2'></i></div></div></button>",nextArrow:"<button type='button' class='testimonial-arrow-btn testimonial-next'><div class='swip'><div class='title-wrapper'><i class='icon-right-arrow title-1'></i><i class='icon-right-arrow title-2'></i></div></div></button>",responsive:[{breakpoint:767,settings:{autoplay:!0}},{breakpoint:767,settings:{autoplay:!0}},]}),t("#left-arrow").on("click",function(e){e.preventDefault(),t(".testimonial-prev").trigger("click")}),t("#right-arrow").on("click",function(e){e.preventDefault(),t(".testimonial-next").trigger("click")}),t(".review-slider").slick({slidesToShow:4,infinite:!0,autoplay:!1,draggable:!0,arrows:!0,slidesToScroll:1,loop:!0,dots:!1,speed:1500,variableWidth:!0,prevArrow:"<button type='button' class='testimonial-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",nextArrow:"<button type='button' class='testimonial-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",responsive:[{breakpoint:1199,settings:{autoplay:!0,slidesToShow:3}},{breakpoint:991,settings:{autoplay:!0,slidesToShow:2}},{breakpoint:554,settings:{autoplay:!0,slidesToShow:1}},]}),t("#accordion").on("hide.bs.collapse show.bs.collapse",e=>{t(e.target).prev().find("i:last-child").toggleClass("fa-minus fa-plus")}),t(".wow").length&&new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!1,live:!0}).init(),t(".tilt-animate").tilt({maxTilt:12,perspective:1500}),t(function(){t("#scrollTop").hide();var e,o=t(window).scrollTop();t(window).on("scroll",function(){var s=t(window).scrollTop();clearTimeout(e),s>100?(s>o?t("#scrollTop").fadeOut():(t("#scrollTop").fadeIn(),e=window.setTimeout(function(){t("#scrollTop").fadeOut()},3e3)),o=s):t("#scrollTop").fadeOut()}),t(".scrollup-btn").click(function(){return t("html, body").animate({scrollTop:0},"slow"),!1})}),t(window).on("load",function(){t("#preloader").fadeOut(),t("#preloader-status").delay(200).fadeOut("slow"),t("body").delay(200).css({"overflow-x":"hidden"})}),t(".switch").on("click",function(){t(".switch").toggleClass("active"),t("#custom-switch").toggleClass("active"),t(".yearly").toggleClass("active"),t(".monthly").toggleClass("active")}),t(".accordion-item").on("click",function(){t(this).toggleClass("active")}),window.addEventListener("scroll",l),l()})}(jQuery);