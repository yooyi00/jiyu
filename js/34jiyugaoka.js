$(function () {
  /*mobile header*/
  $("header.mo .big_menu > li").on("click", function () {
    let j = $(this).index();

    if (j == 0) {
      $("header.mo .small_menu").slideUp();
      $("header.mo .big_menu > li:first-child .small_menu")
        .stop()
        .slideToggle();
    } else if (j == 1) {
      $("header.mo .small_menu").slideUp();
      $("header.mo .big_menu > li:nth-child(2) .small_menu")
        .stop()
        .slideToggle();
    } else if (j == 2) {
      $("header.mo .small_menu").slideUp();
      $("header.mo .big_menu > li:nth-child(3) .small_menu")
        .stop()
        .slideToggle();
    } else if (j == 3) {
      $("header.mo .small_menu").slideUp();
      $("header.mo .big_menu > li:last-child .small_menu").stop().slideToggle();
    }
    $("header.mo .big_menu .minus1").eq(j).toggleClass("on");
  });

  $("header.mo .menu_bar").on("click", function () {
    $("header.mo .menu").stop().animate({ right: "0px" });
    $("header.mo .menu").show();
    $("#visual").css({ filter: "brightness(0.5)" });
  });

  $("header.mo .mo_bar").on("click", function () {
    $("header.mo .menu").stop().animate({ right: "-300px" });
    $("#visual").css({ filter: "brightness(1)" });
  });

  /*pc header*/
  $("header.pc .big_menu > li").on("mouseenter", function () {
    let i = $(this).index();
    $("header.pc .small_menu").hide();
    $("header.pc .small_menu").eq(i).show();
  });
  $("header.pc .big_menu > li").on("mouseleave", function () {
    $("header.pc .small_menu").hide();
  });

  $("header.pc .small_menu > li").on("mouseenter", function () {
    $("header.pc .small_menu > li a").css({ color: "#666" });
    $(this).children("a").css({ color: "#313a6b" });
  });

  $("header.pc .menu_bar").on("click", function () {
    $(".modal").css({ "background-color": "rgba(0,0,0,0.6)" });
    $(".modal").addClass("on");
  });
  $(".close").on("click", function () {
    $(".modal").removeClass("on");
    $(".modal").css({ "background-color": "transparent" });
  });
});
