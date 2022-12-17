$("#conference .owl-carousel").owlCarousel({
  loop: false,
  margin: 30,
  nav: true,
  // center: true,
  stagePadding: 110, 
  responsiveClass: true,
  navText: ["<img src='img/left.png' />", "<img src='img/right.png' />"],
  dots: false,
  onDragged: callback,
  responsive: {
    0: {
      items: 1,
      stagePadding: 20
    },
    768: {
      items: 2,
      stagePadding: 110
    },
    1000: {
      items: 3
    },
  },
});

function callback() {
  for (let i = 0; i < $(".owl-stage").children().length; i++ ) {    
      if ($("#conference .owl-item").eq(i).hasClass("active")) 
      {
        $("#conference .owl-item").eq(i).css({
          opacity: "1"
        })
      } 
      else {
        $("#conference .owl-item").eq(i).css({
          opacity: ".6"
        })
      }
  }
}

const mediaQuery = window.matchMedia('(min-width: 768px)')
if(mediaQuery.matches) {
  function opacityOwl() {
    for (let i = 0; i < $("#conference .owl-item").length; i++) {
      if ($("#conference .owl-item").eq(i).hasClass("active")) {
        $("#conference .owl-item").eq(i).css({opacity: "1"})
      } else {
        $("#conference .owl-item").eq(i).css({
          opacity: ".2",
          transition: "all .5s"
        })
      }
    }
  }
  
  $("#conference .owl-item.active").last().next().css({opacity: ".2"})

  $("#conference .owl-prev").click(function(){
    opacityOwl();
    if ($("#conference .owl-item").first().hasClass("active")) {
      $("#conference .owl-prev").removeClass("visible");
    }
    if(!$("#conference .owl-item").first().hasClass("active")) {
      $("#conference .owl-next").css({visibility: "visible"})
    }
  })
  
  $("#conference .owl-next").click(function(){
    opacityOwl();
    $("#conference .owl-prev").addClass("visible");
    if($("#conference .owl-item").last().hasClass("active")) {
      $("#conference .owl-next").css({visibility: "hidden"})
    }
  })
  
  for (let i = 0; i < $("#conference .owl-item").length; i++) {
    if ($("#conference .owl-item").eq(i).hasClass("active")) {
      $("#conference .owl-prev").css({visibility: "hidden"})
    }
  }
  
}

// news slick-nav

$("#news .container .row").append("<div class='nav-button col-1'></div>");
$("#news .nav-button").css({position:"relative", height: "50px", display: "flex", alignItems: "center"})
let arr = [
"<button type='button' class='slick-prev-one slick-arrow' style=''><img src='img/left.png'></button>",
"<button type='button' class='slick-next-one slick-arrow' style=''><img src='img/right.png'></button>"
]
$("#news .nav-button").prepend(arr[0])
$("#news .nav-button").append(arr[1])
$("#news .slick-next-one").css({
  right: "0px"
})
$("#news .slick-prev-one").click(function() {
  $("#news .slick-prev").click()
})
$("#news .slick-next-one").click(function() {
  $("#news .slick-next").click()
})

// -------------------------------------------

$("#members .owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  autoplay: true,
  autoplayTimeout: 2000,
  navText: ["<img src='img/left.png' />", "<img src='img/right.png' />"],
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 5,
    },
  },
});

$("#management .owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  smartSpeed: 800,
  mouseDrag: false,
  navText: ["<img src='img/left.png' />", "<img src='img/right.png' />"],
  dots: false,
  responsive: {
    0: {
      items: 1,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true
    },
    600: {
      items: 2
     
    },
    1000: {
      items: 4,
    },
  },
});

// subscribe
for (let i = 0; i < $(".sub").length; i++) {
  $(".subBox").html($(".subContent").eq(0).text())
  $(".subTitle").eq(0).addClass("active");
  $(".sub").eq(i).click(function (e) {
    let target = $(e.target)
    let a = 0;
    $(".subBox").html(target.parent().children().eq(1).text());
    while (a < $(".subTitle").length) {
      $(".subTitle").eq(a++).attr('class', 'subTitle');
    }
    $(".subTitle").eq(i).addClass("active");
  });
}
// ------------

// management
function owlhidden() {  
  for (let i = 0; i < $("#management .owl-item").length; i++) {
    if (!$("#management .owl-item").eq(i).hasClass("active")) {
      $("#management .owl-item").eq(i).addClass('animate')
  }
  else if ($("#management .owl-item").eq(i).hasClass("active")) {
    $("#management .owl-item").eq(i).removeClass('animate')
  } 
}}

  // next button
$("#management .owl-next").on("click", function () {
  $("#management .owl-next").addClass("rl");
  setTimeout(function(){
    $("#management .owl-next").removeClass("rl");
  }, 600)
  $("#management .owl-prev").addClass("prev-rl");
  setTimeout(function(){
    $("#management .owl-prev").removeClass("prev-rl");
  }, 600)
  for(let i=0; i<$("#management .active").length; i++) {
    $("#management .active")
    .eq(3)
    .css({visibility: "visible"})
    .addClass("scale-up-center")
    .siblings()
    .removeClass("scale-up-center");
    owlhidden()
  }
});

  // prev button

$("#management .owl-prev").on("click", function () {
  $("#management .owl-prev").addClass("lr")
  setTimeout(function(){
    $("#management .owl-prev").removeClass("lr");
  }, 600)
  $("#management .owl-next").addClass("next-lr");
  setTimeout(function(){
    $("#management .owl-next").removeClass("next-lr");
  }, 600)
  for(let i=0; i<$("#management .active").length; i++) {
    $("#management .active")
    .eq(0)
    .css({visibility: "visible"})
    .addClass("scale-up-center")
    .siblings()
    .removeClass("scale-up-center");
    owlhidden()
  } 
});