jQuery(document).ready(function ($) {

    /*
    * Выпливающий текст при фокусе на .style-input
    */
    $(function () {

        $('.style-input').focus(function () {
            var topText = $(this).data('placeholder');
            $(this).parent().addClass('focus-element');
            $('<div class="top-text">' + topText + '</div>').prependTo($(this).parent());
            $(this).attr('placeholder', '');
        });
        $('.style-input').blur(function () {
            var textDefault = $(this).data('info');
            $(this).parent().removeClass('focus-element');
            $(this).parent().find('.top-text').remove();
            $(this).attr('placeholder', textDefault);
        });
    });

    //plugin jQuery Form Styler (for form elements)

    $(function () {
        $('select, input').styler();
    });


    /*
    * Slider block js
    */

    $(function () {

        var slideStep = 1,
            slideMin = 0,
            slideMax = 4;

        var levelText = ['Не владею', 'Использую готовые решения',
            'Использую готовые решения и умею и переделывать',[''], 'Пишу сложный JS с нуля']

        $('#level-js').slider({
            value: 2,
            min: slideMin,
            max: slideMax,
            step: slideStep,
            range: "min",
            animate: 400,
            slide: function (event, ui) {
                if (ui.value > 2 && ui.value % 2 != 0) {
                    $(this).slider("value", ui.value + 1);
                    return false;
                }
            }
        })
        .slider("pips", {
            rest: "label",
            labels: levelText
        });

    });

    /**
     * Sticky Header
     */
    var stickyNavTop = $('#header').height();

    var stickyNav = function() {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > stickyNavTop) {
            $('#header').addClass('sticky');
        } else {
            $('#header').removeClass('sticky');
        }
    };

    stickyNav();

    $(window).scroll(function() {
        stickyNav();
    });

    /**
     * Scroll navi elements
     */

    //smoothscroll
    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e) {
        //e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var heightMenu = $('#header').outerHeight();
        console.log(heightMenu);

        var target = this.hash,
            menu = target;
            $target = $(target);
        $('html, body').stop().animate({scrollTop: $(target).offset().top - heightMenu}, 900);
        return false;
    });


    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('#header a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#header a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    }



    /**
     * Activate menu (in mobile)
     */
    $(function () {
        var activator = $('#menu-activator');
        //var navBg = $('#fade-bg');

        activator.on('click', function(){
            $(this).toggleClass('active');
            $('#top-menu').toggleClass('visible');
        });

        //Исключаем элемент
        $(document).click(function (e) {
            if ($(e.target).closest('#menu-activator').length && !$(e.target).is('#menu-activator'))return;
            {
                $(activator).removeClass('active');
                $('#top-menu').removeClass('visible');
            }

        });

    });
});


