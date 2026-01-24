(function ($) {
  "use strict";

  /* ===============================
     DOM READY
  =============================== */
  $(document).ready(function () {
    /* ---------- MOBILE MENU ---------- */
    function expandMenu(e) {
      var sublist = $(e.target).next("ul");
      if (sublist.length !== 0) {
        sublist.is(":visible")
          ? sublist.slideUp("fast")
          : sublist.slideDown("fast");
        return false;
      }
      return true;
    }

    $("nav ul:first").show("fast");
    $("nav li").on("click", expandMenu);

    $(".mobile-menu .ti-menu").on("click", function () {
      $("nav").css("left", "0");
      setTimeout(() => $(".mobile-menu .ti-close").show(), 300);
    });

    $(".mobile-menu .ti-close").on("click", function () {
      $("nav").css("left", "-100%");
      $(this).hide();
    });

    /* ---------- SEARCH ---------- */
    $(".social-icon .ti-search").on("click", () => $(".search").fadeIn());
    $(".search .ti-close").on("click", () => $(".search").fadeOut());

    $(".search input").on("keypress", function (e) {
      if (e.which === 13) {
        $(".search").fadeOut();
        $(this).val("");
      }
    });

    /* ---------- SCROLL TO TOP ---------- */
    $(window).on("scroll", function () {
      $(this).scrollTop() > 400 ? $("#toTop").fadeIn() : $("#toTop").fadeOut();
    });

    /* ---------- STICKY HEADER ---------- */
    $(window).on("scroll", function () {
      $("header").toggleClass("sticky", window.scrollY > 100);
    });

    /* ---------- OWL CAROUSELS ---------- */
    $(".testimonial").owlCarousel({
      loop: true,
      autoplay: true,
      smartSpeed: 1000,
      items: 1,
    });

    $(".gallery-carousel").owlCarousel({
      loop: true,
      autoplay: true,
      smartSpeed: 1000,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 },
        1300: { items: 4 },
      },
    });

    $(".news-carousel").owlCarousel({
      loop: true,
      nav: true,
      navText: [
        '<i class="ti-angle-left"></i>',
        '<i class="ti-angle-right"></i>',
      ],
      autoplay: true,
      smartSpeed: 1000,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 },
      },
    });

    /* ---------- FAQ ACCORDION ---------- */
    $(".set > a").on("click", function () {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active").siblings(".content").slideUp(200);
      } else {
        $(".set > a").removeClass("active");
        $(".content").slideUp(200);
        $(this).addClass("active").siblings(".content").slideDown(200);
      }
    });

    /* ---------- DATE PICKER ---------- */
    window.openDatePicker = function () {
      document.getElementById("dob")?.showPicker();
    };

    $("#dob").on("change", function () {
      $(".date-placeholder").toggle(!this.value);
    });

    /* ---------- CAPTCHA 1 ---------- */
    let captcha1 = "";

    function randomColor() {
      return `rgb(${Math.random() * 150},${Math.random() * 150},${Math.random() * 150})`;
    }

    window.generateCaptcha1 = function () {
      const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
      captcha1 = Array.from(
        { length: 5 },
        () => chars[Math.floor(Math.random() * chars.length)],
      ).join("");

      $("#captchaBox1").html(
        captcha1
          .split("")
          .map(
            (c) =>
              `<span style="font-size:${18 + Math.random() * 10}px;color:${randomColor()};
              transform:rotate(${Math.random() * 40 - 20}deg);padding:0 4px;">${c}</span>`,
          )
          .join(""),
      );
    };

    window.validateForm1 = function () {
      if ($("#captchaInput1").val().toUpperCase() !== captcha1) {
        alert("Captcha does not match");
        generateCaptcha1();
        return false;
      }
      return true;
    };

    generateCaptcha1();

    /* ---------- CAPTCHA 2 ---------- */
    let captcha2 = "";

    window.generateCaptcha = function () {
      const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
      captcha2 = Array.from(
        { length: 5 },
        () => chars[Math.floor(Math.random() * chars.length)],
      ).join("");

      $("#captchaBox2").html(
        captcha2
          .split("")
          .map(
            (c) =>
              `<span style="font-size:${18 + Math.random() * 10}px;color:${randomColor()};
              transform:rotate(${Math.random() * 40 - 20}deg);padding:0 4px;">${c}</span>`,
          )
          .join(""),
      );
    };

    window.validateForm = function () {
      if ($("#captchaInput").val().toUpperCase() !== captcha2) {
        alert("Captcha does not match");
        generateCaptcha();
        return false;
      }
      return true;
    };

    generateCaptcha();
  });

  /* ===============================
     WINDOW LOAD
  =============================== */
  $(window).on("load", function () {
    $("#preloader").fadeOut(500);
  });
})(jQuery);
