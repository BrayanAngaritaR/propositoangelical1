(function(a){a("#phone").length&&a("#phone").intlTelInput({utilsScript:"vendor/intl-tel/build/js/utils.js"});var g=window.location.href.substr(window.location.href.lastIndexOf("/")+1);a(".navbar-nav > li  a").each(function(){a(this).attr("href")!=g&&""!=a(this).attr("href")||a(this).addClass("active")});a(".counter").length&&a(".counter").counterUp({delay:10,time:1200});a(window).on("scroll",function(){var b=a(".sticky-menu");100<=a(window).scrollTop()?b.addClass("fixed"):b.removeClass("fixed")});
a(window).on("scroll",function(){200<a(this).scrollTop()?a(".scroll-top").fadeIn():a(".scroll-top").fadeOut()});a(".scroll-top").on("click",function(){a("html, body").animate({scrollTop:0});return!1});a("input,textarea").each(function(){a(this).data("holder",a(this).attr("placeholder"));a(this).on("focusin",function(){a(this).attr("placeholder","")});a(this).on("focusout",function(){a(this).attr("placeholder",a(this).data("holder"))})});if(a(".user-data-form").length)a(".passVicon").on("click",function(){a(".passVicon").toggleClass("eye-slash");
var b=a(".pass_log_id");"password"===b.attr("type")?b.attr("type","text"):b.attr("type","password")});if(a(".mixitUp-container").length){var h=document.querySelector(".mixitUp-container");mixitup(h)}a(".partnerSliderOne").length&&a(".partnerSliderOne").slick({centerMode:!0,centerPadding:"0px",arrows:!1,slidesToShow:5,autoplay:!0,autoplaySpeed:3E3,responsive:[{breakpoint:992,settings:{centerMode:!0,slidesToShow:4}},{breakpoint:768,settings:{centerMode:!0,slidesToShow:3}},{breakpoint:480,settings:{centerMode:!0,
slidesToShow:2}}]});a(".feedback_slider_one").length&&a(".feedback_slider_one").slick({centerMode:!0,centerPadding:"0px",slidesToShow:1,fade:!0,prevArrow:a(".prev_c"),nextArrow:a(".next_c"),autoplay:!0,autoplaySpeed:6E3});a(".feedback_slider_two").length&&a(".feedback_slider_two").slick({dots:!1,arrows:!0,prevArrow:a(".prev_b"),nextArrow:a(".next_b"),centerPadding:"0px",slidesToShow:3,slidesToScroll:1,autoplay:!0,autoplaySpeed:3E3,responsive:[{breakpoint:1200,settings:{slidesToShow:2}},{breakpoint:576,
settings:{slidesToShow:1}}]});a(".feedback_slider_three").length&&a(".feedback_slider_three").slick({dots:!0,arrows:!1,centerPadding:"0px",slidesToShow:3,slidesToScroll:1,autoplay:!0,autoplaySpeed:3E3,responsive:[{breakpoint:1200,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]});a(".feedback_slider_four").length&&a(".feedback_slider_four").slick({dots:!0,arrows:!1,centerPadding:"0px",slidesToShow:1,slidesToScroll:1,autoplay:!0,fade:!0,autoplaySpeed:3E3});a(".feedback_slider_five").length&&
a(".feedback_slider_five").slick({dots:!1,arrows:!0,prevArrow:a(".prev_f"),nextArrow:a(".next_f"),centerPadding:"0px",slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:3E3,responsive:[{breakpoint:1400,settings:{slidesToShow:3}},{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]});a(".feedback_slider_six").length&&a(".feedback_slider_six").slick({dots:!0,arrows:!1,centerPadding:"0px",slidesToShow:1,slidesToScroll:1,autoplay:!1,fade:!0,autoplaySpeed:3E3});
a(".feedback_slider_seven").length&&a(".feedback_slider_seven").slick({dots:!0,arrows:!1,prevArrow:a(".prev_b"),nextArrow:a(".next_b"),centerPadding:"0px",slidesToShow:3,slidesToScroll:1,autoplay:!0,autoplaySpeed:3E3,responsive:[{breakpoint:1200,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]});a(".feedback_slider_eight").length&&a(".feedback_slider_eight").slick({dots:!0,arrows:!1,centerPadding:"0px",slidesToShow:3,slidesToScroll:1,autoplay:!0,centerMode:!0,autoplaySpeed:3E3});
a(".feedback_slider_nine").length&&a(".feedback_slider_nine").slick({dots:!0,arrows:!1,centerPadding:"0px",slidesToShow:1,slidesToScroll:1,autoplay:!0,fade:!0,centerMode:!0,autoplaySpeed:3E3});a(".team_slider_one").length&&a(".team_slider_one").slick({dots:!1,arrows:!0,prevArrow:a(".prev_team1"),nextArrow:a(".next_team1"),centerPadding:"0px",slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:3E3,responsive:[{breakpoint:1200,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},
{breakpoint:500,settings:{slidesToShow:1}}]});a(".team_slider_two").length&&a(".team_slider_two").slick({dots:!1,arrows:!0,prevArrow:a(".prev_team2"),nextArrow:a(".next_team2"),centerPadding:"0px",slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:3E3,responsive:[{breakpoint:1400,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]});a(".hero_slider_one").length&&a(".hero_slider_one").slick({dots:!1,arrows:!1,centerPadding:"0px",
slidesToShow:1,slidesToScroll:1,autoplay:!0,fade:!0,autoplaySpeed:3E3});a(".hero_slider_two").length&&a(".hero_slider_two").slick({dots:!1,arrows:!1,centerPadding:"0px",slidesToShow:1,slidesToScroll:1,autoplay:!0,fade:!0,autoplaySpeed:4E3});a(".hero_slider_three").length&&a(".hero_slider_three").slick({dots:!1,arrows:!1,centerPadding:"0px",slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:4E3,fade:!0});a(".hero_slider_four").length&&a(".hero_slider_four").slick({dots:!0,arrows:!1,centerPadding:"0px",
slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:6E3,fade:!0});a(".shop-hero-slider-one").length&&(a(".shop-hero-slider-one").slick({dots:!1,arrows:!1,centerPadding:"0px",slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:5E3,fade:!0}),a(".shop-hero-slider-one").on("wheel",function(b){b.preventDefault();0>b.originalEvent.deltaY?a(this).slick("slickNext"):a(this).slick("slickPrev")}));a(".feature_slider_one").length&&a(".feature_slider_one").slick({dots:!1,arrows:!0,prevArrow:a(".prev_f1"),
nextArrow:a(".next_f1"),centerPadding:"0px",slidesToShow:4,slidesToScroll:1,autoplay:!0,centerMode:!0,autoplaySpeed:3E3,responsive:[{breakpoint:1400,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]});a(".case_slider_one").length&&a(".case_slider_one").slick({dots:!1,arrows:!0,prevArrow:a(".prev_case1"),nextArrow:a(".next_case1"),centerPadding:"0px",slidesToShow:3,slidesToScroll:1,autoplay:!0,autoplaySpeed:3E3,responsive:[{breakpoint:1200,
settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]});a(".case_slider_two").length&&a(".case_slider_two").slick({dots:!1,arrows:!0,prevArrow:a(".prev_case2"),nextArrow:a(".next_case2"),centerPadding:"0px",slidesToShow:3,slidesToScroll:1,autoplay:!0,centerMode:!0,autoplaySpeed:3E3});a(".product_slider_one").length&&a(".product_slider_one").slick({dots:!1,arrows:!0,prevArrow:a(".prev_p1"),nextArrow:a(".next_p1"),centerPadding:"0px",slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:3E3,
responsive:[{breakpoint:1400,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]});a(".product_slider_two").length&&a(".product_slider_two").slick({dots:!1,arrows:!0,prevArrow:a(".prev_p2"),nextArrow:a(".next_p2"),centerPadding:"0px",slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:3E3,responsive:[{breakpoint:1200,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]});
a(".product_slider_three").length&&a(".product_slider_three").slick({dots:!1,arrows:!0,prevArrow:a(".prev_p3"),nextArrow:a(".next_p3"),centerPadding:"0px",slidesToShow:3,slidesToScroll:1,autoplay:!1,autoplaySpeed:3E3,responsive:[{breakpoint:1200,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]});a(".product_slider_four").length&&a(".product_slider_four").slick({dots:!1,arrows:!0,prevArrow:a(".prev_p4"),nextArrow:a(".next_p4"),centerPadding:"0px",slidesToShow:3,slidesToScroll:1,
autoplay:!1,autoplaySpeed:3E3,responsive:[{breakpoint:1200,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}]});a(".portfolio-slider-one").length&&a(".portfolio-slider-one").slick({dots:!1,arrows:!1,centerPadding:"0px",slidesToShow:1,slidesToScroll:1,autoplay:!0,fade:!0,responsive:[{breakpoint:768,settings:{pauseOnFocus:!1}}]});a(".portfolio-slider-two").length&&a(".portfolio-slider-two").slick({dots:!1,arrows:!0,prevArrow:a(".prev_btn1"),nextArrow:a(".next_btn1"),centerPadding:"0px",
slidesToShow:3,slidesToScroll:1,autoplay:!0,autoplaySpeed:3500,responsive:[{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]});a(".portfolio-slider-three").length&&a(".portfolio-slider-three").slick({dots:!1,arrows:!0,prevArrow:a(".prev_btn1"),nextArrow:a(".next_btn1"),centerPadding:"0px",slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:3500,responsive:[{breakpoint:1200,settings:{slidesToShow:3}},{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:576,
settings:{slidesToShow:1}}]});a(".portfolio-slider-four").length&&a(".portfolio-slider-four").slick({dots:!1,arrows:!0,prevArrow:a(".prev_btn1"),nextArrow:a(".next_btn1"),centerPadding:"0px",slidesToShow:2,slidesToScroll:1,autoplay:!0,autoplaySpeed:3500,responsive:[{breakpoint:768,settings:{slidesToShow:1}}]});a(".portfolio-slider-five").length&&a(".portfolio-slider-five").slick({dots:!1,arrows:!0,prevArrow:a(".prev_btn2"),nextArrow:a(".next_btn2"),centerPadding:"0px",slidesToShow:4,slidesToScroll:1,
autoplay:!0,autoplaySpeed:3500,responsive:[{breakpoint:1200,settings:{slidesToShow:3}},{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]});a("#page-scroll-container-one").length&&a("#page-scroll-container-one").pagepiling({scrollingSpeed:50,loopTop:!0,loopBottom:!0});a("#page-scroll-container-two").length&&a("#page-scroll-container-two").pagepiling({scrollingSpeed:50,loopTop:!0,loopBottom:!0});a("select").length&&a(".theme-select-menu").selectize();if(a("#credit-card").length)a(".payment-radio-button").on("click",
function(){a("#credit-card").is(":checked")?a(".credit-card-form").show(300):a(".credit-card-form").hide(300)});a("img.svg").each(function(){var b=a(this),d=b.attr("id"),e=b.attr("class"),f=b.attr("src");a.get(f,function(c){c=a(c).find("svg");"undefined"!==typeof d&&(c=c.attr("id",d));"undefined"!==typeof e&&(c=c.attr("class",e+" replaced-svg"));c=c.removeAttr("xmlns:a");!c.attr("viewBox")&&c.attr("height")&&c.attr("width")&&c.attr("viewBox","0 0 "+c.attr("height")+" "+c.attr("width"));b.replaceWith(c)},
"xml")});a(".product-value").length&&(a(".value-increase").on("click",function(){var b=a(this).closest("ul").find(".product-value"),d=parseInt(b.val());isNaN(d)||b.val(d+1)}),a(".value-decrease").on("click",function(){var b=a(this).closest("ul").find(".product-value"),d=parseInt(b.val());!isNaN(d)&&1<d&&b.val(d-1)}));a("#contact-form").length&&(a("#contact-form").validator(),a("#contact-form").on("submit",function(b){if(!b.isDefaultPrevented())return a.ajax({type:"POST",url:"inc/contact.php",data:a(this).serialize(),
success:function(d){var e="alert-"+d.type;d=d.message;var f='<div class="alert '+e+' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>'+d+"</div>";e&&d&&(a("#contact-form").find(".messages").html(f),a("#contact-form")[0].reset())}}),!1}));a(window).on("load",function(){a("#ctn-preloader").fadeOut();a("#preloader").delay(500).fadeOut("slow");a("body").delay(350).css({overflow:"visible"});a("[data-aos]").length&&AOS.init({duration:1E3,mirror:!0});
var b=a(".fancybox");b.length&&b.fancybox({arrows:!0,buttons:["zoom","slideShow","thumbs","close"],animationEffect:"zoom-in-out",transitionEffect:"zoom-in-out"});if(a("#isotop-gallery-wrapper").length){var d=a("#isotop-gallery-wrapper").isotope({itemSelector:".isotop-item",percentPosition:!0,masonry:{columnWidth:".grid-sizer"}});a(".isotop-menu-wrapper").on("click","li",function(){var e=a(this).attr("data-filter");d.isotope({filter:e})});a(".isotop-menu-wrapper").each(function(e,f){var c=a(f);c.on("click",
"li",function(){c.find(".is-checked").removeClass("is-checked");a(this).addClass("is-checked")})})}})})(jQuery);