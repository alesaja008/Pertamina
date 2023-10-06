(function ($) {
  // test preloader
  // window.onload = function () {
  //   document.getElementById("preloader-wrap").style.display = "none";
  //   document.getElementById("preloading").style.display = "block";
  // };

  //===== Preloader
  function handlePreloader() {
    if ($(".loader-wrap").length) {
      $(".loader-wrap").delay(80).fadeOut(500);
    }
    TweenMax.to($(".loader-wrap .overlay"), 1.2, {
      force3D: true,
      top: "100%",
      ease: Expo.easeInOut,
    });
  }

  if ($(".preloader-close").length) {
    $(".preloader-close").on("click", function () {
      $(".loader-wrap").delay(200).fadeOut(500);
    });
  }

  $(window).on("load", function () {
    handlePreloader();
  });

  //===== batas Preloader

  jQuery(document).on("ready", function () {
    jQuery(window).on("scroll", function (event) {
      var scroll = jQuery(window).scrollTop();
      if (scroll < 150) {
        jQuery(".appie-sticky").removeClass("sticky");
      } else {
        jQuery(".appie-sticky").addClass("sticky");
      }
    });

   

   


    // wow js
    if ($(".wow").length) {
      var wow = new WOW({
        boxClass: "wow", // animated element css class (default is wow)
        animateClass: "animated", // animation css class (default is animated)
        offset: 250, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
      });
      wow.init();
    }

    // faq accrodion
    if ($(".accrodion-grp").length) {
      var accrodionGrp = $(".accrodion-grp");
      accrodionGrp.each(function () {
        var accrodionName = $(this).data("grp-name");
        var Self = $(this);
        var accordion = Self.find(".accrodion");
        Self.addClass(accrodionName);
        Self.find(".accrodion .accrodion-content").hide();
        Self.find(".accrodion.active").find(".accrodion-content").show();
        accordion.each(function () {
          $(this)
            .find(".accrodion-title")
            .on("click", function () {
              if ($(this).parent().parent().hasClass("active") === false) {
                $(".accrodion-grp." + accrodionName)
                  .find(".accrodion")
                  .removeClass("active");
                $(".accrodion-grp." + accrodionName)
                  .find(".accrodion")
                  .find(".accrodion-content")
                  .slideUp();
                $(this).parent().parent().addClass("active");
                $(this)
                  .parent()
                  .parent()
                  .find(".accrodion-content")
                  .slideDown();
              }
            });
        });
      });
    }

    /*===============================  
             counter up
        ================================*/

    $(".counter-item").counterUp({
      delay: 5,
      time: 2000,
    });

    //====== Magnific Popup video
    jQuery(".appie-video-popup").magnificPopup({
      type: "iframe",
      // other options
    });
    //===== Magnific Popup

    jQuery(".appie-image-popup").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });

    // end

    //===== Back to top

    // Show or hide the sticky footer button
    jQuery(window).on("scroll", function (event) {
      if (jQuery(this).scrollTop() > 600) {
        jQuery(".back-to-top").fadeIn(200);
      } else {
        jQuery(".back-to-top").fadeOut(200);
      }
    });

    //Animate the scroll to yop
    jQuery(".back-to-top").on("click", function (event) {
      event.preventDefault();

      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;

      jQuery("*").animate(
        {
          scrollTop: 0,
        },
        1500
      );
    });

    //===== Search

    $(".search-open").on("click", function () {
      $(".search-box").addClass("open");
    });

    $(".search-close-btn").on("click", function () {
      $(".search-box").removeClass("open");
    });

    /*---canvas menu activation---*/
    $(".canvas_open").on("click", function () {
      $(".offcanvas_menu_wrapper,.off_canvars_overlay").addClass("active");
    });

    $(".canvas_close,.off_canvars_overlay").on("click", function () {
      $(".offcanvas_menu_wrapper,.off_canvars_overlay").removeClass("active");
    });

    /*---Off Canvas Menu---*/
    var $offcanvasNav = $(".offcanvas_main_menu"),
      $offcanvasNavSubMenu = $offcanvasNav.find(".sub-menu");
    $offcanvasNavSubMenu
      .parent()
      .prepend(
        '<span class="menu-expand"><i class="fa fa-angle-down"></i></span>'
      );

    $offcanvasNavSubMenu.slideUp();

    $offcanvasNav.on("click", "li a, li .menu-expand", function (e) {
      var $this = $(this);
      if (
        $this
          .parent()
          .attr("class")
          .match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) &&
        ($this.attr("href") === "#" || $this.hasClass("menu-expand"))
      ) {
        e.preventDefault();
        if ($this.siblings("ul:visible").length) {
          $this.siblings("ul").slideUp("slow");
        } else {
          $this.closest("li").siblings("li").find("ul:visible").slideUp("slow");
          $this.siblings("ul").slideDown("slow");
        }
      }
      if (
        $this.is("a") ||
        $this.is("span") ||
        $this.attr("clas").match(/\b(menu-expand)\b/)
      ) {
        $this.parent().toggleClass("menu-open");
      } else if (
        $this.is("li") &&
        $this.attr("class").match(/\b('menu-item-has-children')\b/)
      ) {
        $this.toggleClass("menu-open");
      }
    });
  });
})(jQuery);
