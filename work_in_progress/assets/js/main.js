(function ($) {
  "use strict";

  /*----------------------------
    Responsive menu Active
    ------------------------------ */
  $(".mainmenu ul#primary-menu").slicknav({
    allowParentLinks: true,
    prependTo: ".responsive-menu",
  });

  /*----------------------------
    START - Scroll to Top
    ------------------------------ */
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 600) {
      $(".scrollToTop").fadeIn();
    } else {
      $(".scrollToTop").fadeOut();
    }
  });
  $(".scrollToTop").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 2000);
    return false;
  });
  $(".menu-area ul > li > .theme-btn").on("click", function () {
    $(".buy-ticket").show();
    return false;
  });
  $(".buy-ticket .buy-ticket-area > a").on("click", function () {
    $(".buy-ticket").hide();
    return false;
  });
  $(".login-popup").on("click", function () {
    $(".login-area").show();
    return false;
  });
  $(".login-box > a").on("click", function () {
    $(".login-area").hide();
    return false;
  });

  /*----------------------------
    START - Slider activation
    ------------------------------ */
  var heroSlider = $(".hero-area-slider");
  heroSlider.owlCarousel({
    loop: true,
    dots: true,
    autoplay: false,
    autoplayTimeout: 4000,
    nav: false,
    items: 1,
    responsive: {
      992: {
        dots: false,
      },
    },
  });
  heroSlider.on("changed.owl.carousel", function (property) {
    var current = property.item.index;
    var prevRating = $(property.target)
      .find(".owl-item")
      .eq(current)
      .prev()
      .find(".hero-area-slide")
      .html();
    var nextRating = $(property.target)
      .find(".owl-item")
      .eq(current)
      .next()
      .find(".hero-area-slide")
      .html();
    $(".thumb-prev .hero-area-slide").html(prevRating);
    $(".thumb-next .hero-area-slide").html(nextRating);
  });
  $(".thumb-next").on("click", function () {
    heroSlider.trigger("next.owl.carousel", [300]);
    return false;
  });
  $(".thumb-prev").on("click", function () {
    heroSlider.trigger("prev.owl.carousel", [300]);
    return false;
  });
  var newsSlider = $(".news-slider");
  newsSlider.owlCarousel({
    loop: true,
    dots: true,
    autoplay: false,
    autoplayTimeout: 4000,
    nav: false,
    items: 1,
    responsive: {
      992: {
        dots: false,
      },
    },
  });
  newsSlider.on("changed.owl.carousel", function (property) {
    var current = property.item.index;
    var prevRating = $(property.target)
      .find(".owl-item")
      .eq(current)
      .prev()
      .find(".single-news")
      .html();
    var nextRating = $(property.target)
      .find(".owl-item")
      .eq(current)
      .next()
      .find(".single-news")
      .html();
    $(".news-prev .single-news").html(prevRating);
    $(".news-next .single-news").html(nextRating);
  });
  $(".news-next").on("click", function () {
    newsSlider.trigger("next.owl.carousel", [300]);
    return false;
  });
  $(".news-prev").on("click", function () {
    newsSlider.trigger("prev.owl.carousel", [300]);
    return false;
  });
  var videoSlider = $(".video-slider");
  videoSlider.owlCarousel({
    loop: true,
    dots: true,
    autoplay: false,
    autoplayTimeout: 4000,
    nav: false,
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      576: {
        items: 2,
        margin: 30,
      },
      768: {
        items: 3,
        margin: 30,
      },
      992: {
        items: 4,
        margin: 30,
      },
    },
  });

  /*----------------------------
	START - videos popup
	------------------------------ */
  $(".popup-youtube").magnificPopup({ type: "iframe" });
  //iframe scripts
  $.extend(true, $.magnificPopup.defaults, {
    iframe: {
      patterns: {
        //youtube videos
        youtube: {
          index: "youtube.com/",
          id: "v=",
          src: "https://www.youtube.com/embed/%id%?autoplay=1",
        },
      },
    },
  });

  /*----------------------------
    START - Isotope
    ------------------------------ */
  jQuery(".portfolio-item").isotope();
  $(".portfolio-menu li").on("click", function () {
    $(".portfolio-menu li").removeClass("active");
    $(this).addClass("active");
    var selector = $(this).attr("data-filter");
    $(".portfolio-item").isotope({
      filter: selector,
    });
  });

  /*----------------------------
    START - Preloader
    ------------------------------ */
  jQuery(window).load(function () {
    jQuery("#preloader").fadeOut(500);
  });
})(jQuery);

// my turn
//  get API

$(document).ready(function () {
  showCategoriesInMenu();
  showNewsInCategories();
  showGoldPrices();
  showCoinPrices();
  showNewsX();
  showNews1Index();
  showNews1();
  showNews2();
  showNews3();
  showNews4();
  showMoviesCategories();
  showMovies();
  showArticleViewed();
  showActionMovie();
  showActionMovie2();
  showSlideMovies();
  showLoveMovie();
  showCartoonMovie();
  showHorrorMovie();
  showPsychoMovie();
  showComedyMovie();
  showActionMovie3();
  showActionMovie4();
  playVideos();
  // showSearchNews();
  showAmazingMovie();
});
// get id API
$.urlParam = function (name) {
  var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(
    window.location.href
  );
  if (results == null) {
    return null;
  }
  return decodeURI(results[1]) || 0;
};

let urlID = $.urlParam("id");
let urlPlaylistId = $.urlParam("playlist-id");
let data = listItems();
showArticleViewed(data);
let data1 = listFavs();
showFavNews(data1);
// showHeartActive(data1);
let data2 = listVideos();
showVideosViewed(data2);
showVideoClick(data2);
let data3 = listFavsVideos();
showFavVideos(data3);
// showFavVideos(data2);
$(document).ready(function () {
  $("#reload").click(function () {
    location.reload();
  });
  // var selectedVal = $("#select-type option:selected").val();
  // console.log(selectedVal, "hiihi");
  // if (selectedVal == "News") {
  //   $("#getValueBtn").attr("href", "news-search.html");
  // }
  switch (urlID) {
    case "1":
      $("#sub-news1").addClass("active-news");
      $("#sub-name").html("Tin tức thế giới");
      break;
    case "2":
      $("#sub-news2").addClass("active-news");
      $("#sub-name").html("Tin tức thời sự ");
      break;
    case "3":
      $("#sub-news3").addClass("active-news");
      $("#sub-name").html("Tin tức kinh doanh ");
      break;

    case "4":
      $("#sub-news4").addClass("active-news");
      $("#sub-name").html("Tin tức giải trí ");
      break;

    case "5":
      $("#sub-news5").addClass("active-news");
      $("#sub-name").html("Tin tức thể thao ");
      break;

    case "6":
      $("#sub-news6").addClass("active-news");
      $("#sub-name").html("Tin tức pháp luật ");
      break;

    case "7":
      $("#sub-news7").addClass("active-news");
      $("#sub-name").html("Tin tức giáo dục ");
      break;
    case "8":
      $("#sub-news8").addClass("active-news");
      $("#sub-name").html("Tin tức sức khỏe ");
      break;

    case "9":
      $("#sub-news9").addClass("active-news");
      $("#sub-name").html("Tin tức đời sống ");
      break;

    case "10":
      $("#sub-news10").addClass("active-news");
      $("#sub-name").html("Tin tức du lịch ");
      break;
    case "79":
      $("#sub-video-name").html("Phim hành động");
      break;
    case "80":
      $("#sub-video-name").html("Phim viễn tưởng");
      break;
    case "81":
      $("#sub-video-name").html("Phim tâm lý");
      break;

    case "82":
      $("#sub-video-name").html("Phim hoạt hình");
      break;

    case "83":
      $("#sub-video-name").html("Phim hài");
      break;

    case "84":
      $("#sub-video-name").html("Phim tình cảm");
      break;

    case "85":
      $("#sub-video-name").html("Phim kinh dị");
      break;

    default:
    // code block
  }
  switch (urlPlaylistId) {
    case "79":
      $("#name-film").html("Phim hành động");
      break;
    case "80":
      $("#name-film").html("Phim viễn tưởng");
      break;
    case "81":
      $("#name-film").html("Phim tâm lý");
      break;

    case "82":
      $("#name-film").html("Phim hoạt hình");
      break;

    case "83":
      $("#name-film").html("Phim hài");
      break;

    case "84":
      $("#name-film").html("Phim tình cảm");
      break;

    case "85":
      $("#name-film").html("Phim kinh dị");
      break;

    default:
    // code block
  }
});
$(document).ready(function () {
  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split("&"),
      sParameterName,
      i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split("=");

      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined
          ? true
          : decodeURIComponent(sParameterName[1]);
      }
    }
    return false;
  };
  var urlQ = getUrlParameter("q");
  $("#getValueBtn").click(function () {
    var newInput = $("#getUserValue").val().replace(" ", "%20");
    console.log(newInput, "hihihihi");
    let xhtml = "";
    if (newInput === "") {
      alert(" Hãy nhập từ khóa tìm kiếm");
    } else {
      $("#getValueBtn").attr("href", "news-search.html?q=" + newInput + "");
      xhtml = `
          <i class="icofont icofont-search"></i>
        `;
    }
    $("#getValueBtn").html(xhtml);
  });
  $.getJSON(
    "http://apiforlearning.zendvn.com/api/articles/search?q=" +
      urlQ +
      "&offset=0&limit=10&sort_by=id&sort_dir=desc",
    function (data) {
      let xhtml = "";
      if (data.length === 0) {
        xhtml += `<div class="col-lg-12">
          <h2 style="margin-top:24px"> Không có kết quả tìm kiếm, vui lòng nhập từ khóa khác</h2>
        </div>
        `;
        $("#news-search-result").html(xhtml);
      } else {
        $.each(data, function (key, val) {
          xhtml += `<div class="col-lg-12">
            <div class="single-news">
            <div class="news-bg-1" style="background:url(${val.thumb}); background-size: cover;  ">
            <div id="fav-news" class="fav-news" onClick="funcFavNews('${val.id}', '${val.title}', '${val.thumb}', '${val.link},', '${val.heartColor},')" >
            &#x02665
          </div>
              <div class="news-date">
              ${val.publish_date}
              </div>
            </div>
            <h2>
                <a href="${val.link}" target=blank; onClick="funcViewArticle('${val.id}', '${val.title}', '${val.thumb}', '${val.link}')" >
                ${val.title}
               </a>
                </h2>
            <p>
            ${val.description}
            </p>
          </div>
            </div>
          `;
        });
        $("#news-search-result").html(xhtml);
      }
    }
  );
});
