$(document).ready(function() {  
    new WOW({
        // offset: 500,
    }).init();

    $(window).bind('scroll', function() {
        console.log($(window).scrollTop());
        if ($(window).scrollTop() > 60) {
            $('header .top').addClass('fixed');
        }
        else {
            $('header .top').removeClass('fixed');
        }
    });

    /*show top popup*/

    $('a#top_popup_show').click(function () {
        event.preventDefault();
        $('.top_popup').fadeIn();
    });
    $('.top_popup a.close').click(function (e) {
        event.preventDefault();
        $('.top_popup').fadeOut();
    });
    /* /// */
    $("[data-fancybox]").fancybox({
        autoFocus : true,
        hash : null,
    });
    $('.row_products .items a.item .title').matchHeight();
    $('.row_products .items a.item').matchHeight();
 
    $("header .slider.owl-carousel").owlCarousel({
        items: 1,
        nav:true,
        navText: [,],
        loop: true,
        animateIn: 'fadeIn',
        dots: true,
        autoplay:true,
        autoplayTimeout:5000,
        responsive : {
            // breakpoint from 0 up
            0 : {
                nav:false,
            },
            // breakpoint from 480 up
            400 : {
                nav:false,
            },
            
            600 : {
                nav:true,
                navText: [,],
            }
        }
    });
    $(".row_products.bestseller .items.owl-carousel").owlCarousel({
        items: 5,
        nav:false,
        loop: false,
        dots: false,
        responsive : {
            0 : {
                items: 1,
                nav:true,
                navText: [,],
            },
            767 : {
                items: 3,
                nav:true,
                navText: [,],
            },
            1023 : {
                items: 4,
            }
        },
    });
    /* product page slider */
    $(".row_products.product_page_slider .items.owl-carousel").owlCarousel({
        items: 5,
        nav:false,
        loop: false,
        dots: false,
        responsive : {
            0 : {
                items: 1,
                nav:true,
                navText: [,],
            },
            767 : {
                items: 3,
                nav:true,
                navText: [,],
            },
            1023 : {
                items: 4,
            },
            1100 : {
                items: 5,
            }
        },
    });



    /*mobile menu*/

    $('header .top .m_menu').click(function () {
        event.preventDefault();
        $('header .top').toggleClass('active');
        
        if($('.m_menu_block').is(':hidden')){
            $('.m_menu_block').fadeIn();
            $('html, body').css('overflow', 'hidden');
        }else{
            $('.m_menu_block').fadeOut();
            $('html, body').css('overflow', 'auto');
            $('html, body').css('overflow-x', 'hidden');
        }
    });


    /* //mobile menu*/


    /*accordeon menu*/
    $(function() {
        var Accordion = function(el, multiple) {
            this.el = el || {};
            this.multiple = multiple || false;
    
            // Variables privadas
            var links = this.el.find('.link');
            // Evento
            links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
        }
    
        Accordion.prototype.dropdown = function(e) {
            var $el = e.data.el;
                $this = $(this),
                $next = $this.next();
    
            $next.slideToggle();
            $this.parent().toggleClass('open');
    
            if (!e.data.multiple) {
                $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
            };
        }	
    
        var accordion = new Accordion($('.accordion'), false);
    });
    /* //accordeon menu*/


    /*mobile filter menu*/
    $('.catalog_page .cols .col.rcol .filter_btn').click(function () {
        event.preventDefault();
        var filter = $('.catalog_page .cols .col.lcol').html();
        $('.catalog_page .cols .col.rcol').toggleClass('active');
        $('.catalog_page .cols .col.rcol #filter_js').html(filter).toggleClass('active');
    });
    /* //mobile filter menu*/


    /*payment name*/
    $('.cart_page .cart .cart_row_forms form .col .payment_list .payments .item label').click(function () {
        
        $('.cart_page .cart .cart_row_forms form .col .payment_list .payments button[type=submit] span').html($(this).attr('for'));
    });
    /* //*/

    /*partner mobile menu*/
    $('.job_page .cols .col.lcol .title').click(function () {
        
        $('.job_page .cols .col.lcol ul').slideToggle();
    });
    /* //mobile  menu*/



    /*Select Box js*/
    $('.drop-menu').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropeddown').slideToggle(300);
    });
    $('.drop-menu').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropeddown').slideUp(300);
    });
    $('.drop-menu .dropeddown li').click(function () {
        $(this).parents('.drop-menu').find('span').html($(this).html());
        $(this).parents('.drop-menu').find('input').attr('value', $(this).attr('id'));
    });
    /*End Select Box js*/



    /*tabs*/
    
    $('#tabs-nav li:first-child').addClass('active');
    $('#tabs-content .content').hide();
    $('#tabs-content .content:first').show();
    
    // click function
    $('#tabs-nav li').click(function(){
      $('#tabs-nav li').removeClass('active');
      $(this).addClass('active');
      $('#tabs-content .content').hide();
      
      var activeTab = $(this).find('a').attr('href');
      $(activeTab).fadeIn();
      return false;      
    });
    

    /* end tabs*/
});












