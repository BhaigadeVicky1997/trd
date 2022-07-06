// page loader
// window.addEventListener("load", function () {
//   var preloadpage = document.getElementById("page_loader");
//   preloadpage.style.display = "none";
// });
//faq toggle stuff
$(".wrap-toggle").click(function (es) {
  es.preventDefault();
  var notthis = $(".active").not(this);
  notthis.find(".bx-minus").addClass("bx-plus").removeClass("bx-minus");
  notthis.toggleClass("active").next(".wrap-ans").slideToggle(300);
  $(this).toggleClass("active").next().slideToggle("fast");
  $(this).children("i").toggleClass("bx-plus bx-minus");
});
// footer footer-wrap-toggle
$(".footer-wrap-toggle").click(function (e) {
  e.preventDefault();
  var notthis = $(".actives").not(this);
  notthis
    .find(".bx-minus")
    .addClass("bx-chevron-right")
    .removeClass("bx-minus");
  notthis.toggleClass("active").next(".wrap-ans").slideToggle(300);
  $(this).toggleClass("active").next().slideToggle("fast");
  $(this).children("i").toggleClass("bx-chevron-right bx-minus");
});


//owl for partners
$(".partners-owl").owlCarousel({
  loop: false,
  margin: 0,
  dots: false,
  autoplay: true,
  autoPlaySpeed: 5000,
  autoPlayTimeout: 5000,
  autoplayHoverPause: true,
  nav: true,
  navText: [
    '<i class="bx bx-chevron-left"></i>',
    '<i class="bx bx-chevron-right"></i>',
  ],
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
// steps-owl
$(".steps-owl").owlCarousel({
  loop:true,
  margin: 0,
  dots: false,
  autoplay: true,
  autoPlaySpeed: 5000,
  autoPlayTimeout: 5000,
  autoplayHoverPause: true,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
//  Back to top
var btt = $("#back-to-top");
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btt.addClass("show");
  } else {
    btt.removeClass("show");
  }
});
btt.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});
// header
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 300) {
    $("#header").addClass("active");
  } else {
    $("#header").removeClass("active");
  }
});
// hero
$(".bannerslider").owlCarousel({
  loop: false,
  margin: 10,
  dots: true,
  // nav: true,
  autoplay: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
// testimonials
$(".testimonials-slider").owlCarousel({
  loop: true,
  margin: 10,
  dots: true,
  // nav: true,
  autoplay: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
// policies-slider
$(".policies-slider").owlCarousel({
  loop: false,
  margin: 10,
  nav: true,
  navText: [
    "<div class='nav-btn prev-slide'><i class='bx bx-chevron-left' ></i></div>",
    "<div class='nav-btn next-slide'><i class='bx bx-chevron-right'></i></div>",
  ],
  dots: false,
  autoplay: false,
  slideBy: "page",
  responsive: {
    0: {
      items: 1,
      stagePadding: 25,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
// sidebar
$(function () {
  var $ul = $(".sidebar-navigation > ul");

  $ul.find("li a").click(function (e) {
    var $li = $(this).parent();

    if ($li.find("ul").length > 0) {
      e.preventDefault();

      if ($li.hasClass("selected")) {
        $li.removeClass("selected").find("li").removeClass("selected");
        $li.find("ul").slideUp(400);
        $li.find("a em").addClass("bx-plus");
      } else {
        if ($li.parents("li.selected").length == 0) {
          $ul.find("li").removeClass("selected");
          $ul.find("ul").slideUp(400);
          $ul.find("li a em").addClass("bx-plus");
        } else {
          $li.parent().find("li").removeClass("selected");
          $li.parent().find("> li ul").slideUp(400);
          $li
            .parent()
            .find("> li a em")
            .removeClass("bx-plus")
            .addClass("bx-minus");
        }

        $li.addClass("selected");
        $li.find(">ul").slideDown(400);
        $li.find(">a>em").addClass("bx-minus").removeClass("bx-plus");
      }
    }
  });
});

$("#datepickerInput").on("keyup changes", function () {
  //  e.attr('type' , 'date')
  console.log("asdsd");
});
// password
var eye = document.getElementById("pass-icon");
var coneye = document.getElementById("conpass-icon");
eye.addEventListener("click", function () {
  var pass = document.getElementById("password");
  if (pass.type == "password") {
    pass.type = "text";
    eye.classList.add("opacity-100");
    eye.classList.remove("opacity-50");
  } else {
    pass.type = "password";
    eye.classList.remove("opacity-100");
    eye.classList.add("opacity-50");
  }
});
coneye.addEventListener("click", function () {
  var conpass = document.getElementById("conpassword");
  if (conpass.type == "password") {
    conpass.type = "text";
    coneye.classList.add("opacity-100");
    coneye.classList.remove("opacity-50");
  } else {
    conpass.type = "password";
    coneye.classList.remove("opacity-100");
    coneye.classList.add("opacity-50");
  }
});

// loginPassword
var loginPasswordEye = document.getElementById("loginPassword-icon");
loginPasswordEye.addEventListener("click", function () {
  var loginPassword = document.getElementById("loginPassword");
  if (loginPassword.type == "password") {
    loginPassword.type = "text";
    loginPasswordEye.classList.add("opacity-100");
    loginPasswordEye.classList.remove("opacity-50");
  } else {
    loginPassword.type = "password";
    loginPasswordEye.classList.remove("opacity-100");
    loginPasswordEye.classList.add("opacity-50");
  }
});

// OTP Form
$("#otp-verification .form-control").keyup(function () {
  if (this.value.length == 0) {
    $(this).blur().parent().prev().children(".form-control").focus();
    $(this).blur().prev(".form-control").focus();
  } else if (this.value.length == this.maxLength) {
    $(this).blur().parent().next().children(".form-control").focus();
    $(this).blur().next(".form-control").focus();
  }
});

// for  increaseValue and decreaseValue
function increaseValue() {
  var value = parseInt(
    document.getElementById("number-of-passengers").value,
    10
  );
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("number-of-passengers").value = value;
}

function decreaseValue() {
  var value = parseInt(
    document.getElementById("number-of-passengers").value,
    10
  );
  value = isNaN(value) ? 0 : value;
  value < 1 ? (value = 1) : "";
  value--;
  document.getElementById("number-of-passengers").value = value;
}

// for copy claim text
