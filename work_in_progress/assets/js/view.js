//  show new start
showCategoriesInMenu = () => {
  let elmAreaCategoryNews = $("ul#news");
  const API_PREFIX = "http://apiforlearning.zendvn.com/api/";
  $.getJSON(API_PREFIX + "categories_news", function (data) {
    let xhtml = "";
    $.each(data, function (key, val) {
      xhtml += `<li><a href="category.html?id=${val.id}">- ${val.name}</a></li>`;
    });
    elmAreaCategoryNews.html(xhtml);
  });
};
showNewsInCategories = () => {
  let urlID = $.urlParam("id");
  let elemAreaCategoryNewsDetail = $("#news-details");
  $.getJSON(
    "http://apiforlearning.zendvn.com/api/categories_news/" +
      urlID +
      "/articles?offset=0&limit=10&sort_by=id&sort_dir=desc",
    function (data) {
      let xhtml = "";

      $.each(data, function (key, val) {
        let day = val.publish_date.split(" ")[0];
        let newdate = day.split("-");
        let date = newdate[2] + "-" + newdate[1] + "-" + newdate[0];
        xhtml +=
          `<div class="col-lg-12">
          <div class="single-news">
          <div class="news-bg-1" style="background:url(${val.thumb}); background-size: cover;  ">
          <div id="fav-news" class="fav-news" onClick="funcFavNews('${val.id}', '${val.title}', '${val.thumb}', '${val.link},', '${val.heartColor},')" >
          &#x02665
        </div>
            <div class="news-date">
           ` +
          date +
          `
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

      elemAreaCategoryNewsDetail.html(xhtml);
    }
  );
};

showGoldPrices = () => {
  let elemGoldPrice = $("#gold-price");
  $.getJSON("http://apiforlearning.zendvn.com/api/get-gold", function (data) {
    let xhtml = "";
    $.each(data, function (key, val) {
      xhtml += `
     
      <tr>    
                <td>${val.type}</td>
                <td>${val.buy}.000 VNĐ</td>
                <td>${val.sell}.000 VNĐ</td>
              </tr>
			

			`;
    });

    elemGoldPrice.html(xhtml);
  });
};
showCoinPrices = () => {
  let elemCoinPrice = $("#coin-price");
  $.getJSON("http://apiforlearning.zendvn.com/api/get-coin", function (data) {
    let xhtml = "";
    $.each(data, function (key, val) {
      val.price = val.price.toLocaleString();
      val.percent_change_24h = val.percent_change_24h.toFixed(2);
      let classPrice = val.percent_change_24h > 0 ? "green" : "red";

      xhtml += `
       
        <tr>    
                  <td>${val.name}</td>
                  <td>${val.price}$</td>
                  <td  class="sell-${classPrice}">
                  ${val.percent_change_24h}%
                  </td>
                  
                </tr>
        
  
        `;
    });

    elemCoinPrice.html(xhtml);
  });
};
showArticleViewed = (data) => {
  // let elemViewedNews = $("#viewed-news");
  let xhtml = "";

  $.each(data, function (key, val) {
    xhtml += `
    
    <div class="col-lg-12" >
    
    <div class="news-bg-1" style=" background:url(${val.thumb});"></div>
    <input type="hidden" id="${val.id}">
    <div class="news-date1" onclick="funcDeleteTask('${val.id}')"> 
            <a href="#" >
             xóa</a>
            </div>
            <div>
              <h4 ><a href="${val.link}" target=blank; >${val.title}</a></h4>
            </div>
           
          </div>
          </div>
            
      </div>
    
      `;
    $("#viewed-news").html(xhtml);
  });
};

showFavNews = (data1) => {
  let elemFavNews = $("#fav-news1");
  let xhtml = "";

  $.each(data1, function (key, val) {
    xhtml += `
      <div class="col-lg-12">     
      <div class="single-news">
      <div class="news-bg-1" style="background:url(${val.thumb}); background-size: cover;  ">
      <div id="fav-news1" class="fav-news" onClick="funcFavNews('${val.id}', '${val.title}', '${val.thumb}', '${val.link},', '${val.heartColor},')" >
      <a href="#"><img src="https://img.icons8.com/emoji/48/000000/heart-suit.png"/></a>
    </div>
       
      </div>
      <h4>
          <a href="${val.link}" target=blank; onClick="funcViewArticle('${val.id}', '${val.title}', '${val.thumb}', '${val.link}')" >
          ${val.title}
         </a>
          </h4>
     
     
    </div>
      </div>
      
      </div>

    `;
  });
  elemFavNews.html(xhtml);
};

showNews1 = () => {
  let elemSportNews = $("#news-1");
  $.getJSON(
    "http://apiforlearning.zendvn.com/api/categories_news/3/articles?offset=0&limit=4&sort_by=id&sort_dir=desc",
    function (data) {
      let xhtml = "";

      $.each(data, function (key, val) {
        xhtml += `<div class="col-lg-6 col-md-4 col-sm-6">
      <div class="single-portfolio">
      <div class="single-portfolio-img">
      
    <a
      href="${val.link}" target=blank
      class="popup-youtube"
    >
    <img  id="fix-img"
    src="${val.thumb}"
    alt="portfolio"
  />
 
          </a>
      </div>
        <div class="portfolio-content">
         <h2>${val.title} <a href="${val.link}"></a></h2>
        <div class="review">
      
     
    </div>
  </div>
</div>
</div>

`;
      });
      elemSportNews.html(xhtml);
    }
  );
};

showNewsX = () => {
  $.getJSON(
    "http://apiforlearning.zendvn.com/api/categories_news/3/articles?offset=0&limit=4&sort_by=id&sort_dir=desc",
    function (data) {
      let xhtml = "";

      $.each(data, function (key, val) {
        xhtml += `<div class="col-lg-6 col-md-4 col-sm-6">
      <div class="single-portfolio">
      <div class="single-portfolio-img">
      
    <a
      href="${val.link}" target=blank
      class="popup-youtube"
    >
    <img id="fix-img"
      src="${val.thumb}"
      alt="portfolio"
    />
   
          </a>
      </div>
        <div class="portfolio-content">
         <h2>${val.title} <a href="${val.link}"></a></h2>
        <div class="review">
      
     
    </div>
  </div>
</div>
</div>

`;
      });
      $("#news-x").html(xhtml);
    }
  );
};
showNews1Index = () => {
  let elemSportNews = $("#news-2");
  $.getJSON(
    "http://apiforlearning.zendvn.com/api/categories_news/3/articles?offset=0&limit=8&sort_by=id&sort_dir=desc",
    function (data) {
      let xhtml = "";

      $.each(data, function (key, val) {
        xhtml += `<div class="col-lg-3 col-md-4 col-sm-6">
      <div class="single-portfolio">
      <div class="single-portfolio-img">
      
    <a
      href="${val.link}" target=blank
      class="popup-youtube"
    >
    <img  id="fix-img"
      src="${val.thumb}"
      alt="portfolio"
    />
          </a>
      </div>
        <div class="portfolio-content">
         <h2 style="font-size:14px;">${val.title}</h2>
        <div class="review">
      
  
    </div>
  </div>
</div>
</div>

`;
      });
      elemSportNews.html(xhtml);
    }
  );
};

showNews2 = () => {
  let elemNews2 = $("#news-3");
  $.getJSON(
    "http://apiforlearning.zendvn.com/api/categories_news/2/articles?offset=0&limit=4&sort_by=id&sort_dir=desc",
    function (data) {
      let xhtml = "";

      $.each(data, function (key, val) {
        xhtml += `<div class="col-lg-6 col-md-4 col-sm-6">
      <div class="single-portfolio">
      <div class="single-portfolio-img">
     
    <a
      href="${val.link}" target=blank
      class="popup-youtube"
    >
    <img  id="fix-img"
    src="${val.thumb}"
    alt="portfolio"
  />
          </a>
      </div>
        <div class="portfolio-content">
         <h2>${val.title}</h2>
        <div class="review">
     
    </div>
  </div>
</div>
</div>`;
      });
      elemNews2.html(xhtml);
    }
  );
};

showNews3 = () => {
  let elemNews3 = $("#news-3");
  $.getJSON(
    "http://apiforlearning.zendvn.com/api/categories_news/1/articles?offset=0&limit=4&sort_by=id&sort_dir=desc",
    function (data) {
      let xhtml = "";

      $.each(data, function (key, val) {
        xhtml += `<div class="col-lg-6 col-md-4 col-sm-6">
      <div class="single-portfolio">
      <div class="single-portfolio-img">
      
    <a
      href="${val.link}" target=blank
      class="popup-youtube"
    >
    <img  id="fix-img"
      src="${val.thumb}"
      alt="portfolio"
    />
      
          </a>
      </div>
        <div class="portfolio-content">
         <h2>${val.title}</h2>
        <div class="review">
      
     
    </div>
  </div>
</div>
</div>`;
      });
      elemNews3.html(xhtml);
    }
  );
};

showNews4 = () => {
  let elemNews4 = $("#news-4");
  $.getJSON(
    "http://apiforlearning.zendvn.com/api/categories_news/6/articles?offset=0&limit=4&sort_by=id&sort_dir=desc",
    function (data) {
      let xhtml = "";

      $.each(data, function (key, val) {
        xhtml += `<div class="col-lg-6 col-md-4 col-sm-6">
        
      <div class="single-portfolio">
      <div class="single-portfolio-img">
     
    <a
      href="${val.link}" target=blank
      class="popup-youtube"
    >
    <img  id="fix-img"
      src="${val.thumb}"
      alt="portfolio"
    />
      
          </a>
      </div>
        <div class="portfolio-content">
         <h2>${val.title}</h2>
        <div class="review">
      
      
    </div>
  </div>
</div>
</div>`;
      });
      elemNews4.html(xhtml);
    }
  );
};
//  show news end

// show movie start
showMoviesCategories = () => {
  $.getJSON(
    "http://apiforlearning.zendvn.com/api/playlists?offset=0&limit=7&sortBy=id&sort_dir=asc&type=film",
    function (data) {
      let xhtml = "";
      $.each(data, function (key, val) {
        xhtml += `<li><a href="movies.html?id=${val.id}">- ${val.title}</a></li>`;
      });

      $("#movies-category").html(xhtml);
    }
  );
};
showMovies = () => {
  $.getJSON(
    "http://apiforlearning.zendvn.com/api/playlists/" +
      urlID +
      "/videos?offset=0&limit=21&sort_by=id&sort_dir=asc",
    function (data) {
      let xhtml = "";
      $.each(data, function (key, val) {
        let thumbnailObj = JSON.parse(val.thumbnail);

        xhtml += `<div class="col-lg-4 col-md-4 col-sm-6 released">
        <div class="single-portfolio">
          <div class="single-portfolio-img">
          <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val}">
            <img
            src="${thumbnailObj.high.url}"
              alt="portfolio"
            />
            <a
              id="abc"
              href="movie-details.html?id=${val.id}"
              class="popup-youtube"
              onclick="funcViewedVideos('${val.id}','${val.title}')">
              <i class="icofont icofont-ui-play"></i>
            </a>
          </div>
          <div class="portfolio-content">
            <h2>${val.title}</h2>
           
          </div>
        </div>
      </div>`;
      });
      $("#movies-videos").html(xhtml);
    }
  );
};

showSlideMovies = () => {
  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  $.getJSON(
    "http://apiforlearning.zendvn.com/api/playlists/82/videos?offset=" +
      randomInteger(0, 30) +
      "&limit=1&sort_by=id&sort_dir=asc",
    function (data) {
      let xhtml = "";
      $.each(data, function (key, val) {
        const data = val.iframe;

        xhtml += `<div class="row hero-area-slide">
        <div class="col-lg-12 col-md-5">
          <div class="hero-area-content">
            ${data}
          </div>
        </div>
       
          
            
            
          </div>
        </div>
      </div>`;
      });

      $("#videos-slide").html(xhtml);
    }
  );
};

showActionMovie = () => {
  $.getJSON(
    "http://apiforlearning.zendvn.com/api/playlists/80/videos?offset=0&limit=9&sort_by=id&sort_dir=asc",
    function (data) {
      let xhtml = "";
      $.each(data, function (key, val) {
        let thumbnailObj = JSON.parse(val.thumbnail);

        xhtml += `<div class="col-md-4 col-sm-6 soon released">
  <div class="single-portfolio">
  <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val.id}">
    <div class="single-portfolio-img">
      <a
        href="movie-details.html?id=${val.id}"
        class="popup-youtube"
        onclick="funcViewedVideos('${val.id}','${val.title}')">

        <img
        id="video-img-id"
        src="${thumbnailObj.medium.url}"
        alt="portfolio"
        />
        <i  class="icofont icofont-ui-play"></i>
      </a>
    </div>
    <div class="portfolio-content">
      <h2 style="font-size:14px">${val.title}</h2>
      
    </div>
  </div>
</div>`;
      });

      $("#home-movie1").html(xhtml);
    }
  );
};

showActionMovie2 = () => {
  $.getJSON(
    "http://apiforlearning.zendvn.com/api/playlists/80/videos?offset=17&limit=9&sort_by=id&sort_dir=asc",
    function (data) {
      let xhtml = "";
      $.each(data, function (key, val) {
        let thumbnailObj = JSON.parse(val.thumbnail);

        xhtml += `<div class="col-md-4 col-sm-6 soon released">
  <div class="single-portfolio">
    <div class="single-portfolio-img">
    <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val.id}">
      <a
        href="movie-details.html?id=${val.id}"
        class="popup-youtube"
        onclick="funcViewedVideos('${val.id}','${val.title}')">
        
        <img
        src="${thumbnailObj.medium.url}"
        alt="portfolio"
      />
        <i class="icofont icofont-ui-play"></i>
      </a>
    </div>
    <div class="portfolio-content">
      <h2 style="font-size:14px">${val.title}</h2>
      
    </div>
  </div>
</div>`;
      });
      $("#home-movie2").html(xhtml);
    }
  );
};

// movies category
showLoveMovie = () => {
  $.getJSON(
    "http://apiforlearning.zendvn.com/api/playlists/84/videos?offset=0&limit=6&sort_by=id&sort_dir=asc",
    function (data) {
      let xhtml = "";
      $.each(data, function (key, val) {
        let thumbnailObj = JSON.parse(val.thumbnail);

        xhtml += `<div class="col-md-4 col-sm-6 soon released">
  <div class="single-portfolio">
  <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val.id}">
    <div class="single-portfolio-img">
      <img
        src="${thumbnailObj.medium.url}"
        alt="portfolio"
      />
      <a
        
        href="movie-details.html?id=${val.id}"
        class="popup-youtube"
        onclick="funcViewedVideos('${val.id}','${val.title}')">
      
        <i class="icofont icofont-ui-play"></i>
      </a>
    </div>
    <div class="portfolio-content">
      <h2 style="font-size:14px">${val.title}</h2>
      
    </div>
  </div>
</div>`;
      });

      $("#home-movie6").html(xhtml);
    }
  );
};
showCartoonMovie = () => {
  $.getJSON(
    "http://apiforlearning.zendvn.com/api/playlists/82/videos?offset=0&limit=6&sort_by=id&sort_dir=asc",
    function (data) {
      let xhtml = "";
      $.each(data, function (key, val) {
        let thumbnailObj = JSON.parse(val.thumbnail);

        xhtml += `<div class="col-md-4 col-sm-6 soon released">
  <div class="single-portfolio">
  <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val.id}}">
    <div class="single-portfolio-img">
      <img
        src="${thumbnailObj.medium.url}"
        alt="portfolio"
      />
      <a
        
        href="movie-details.html?id=${val.id}"
        class="popup-youtube"
        onclick="funcViewedVideos('${val.id}','${val.title}')">
      
        <i class="icofont icofont-ui-play"></i>
      </a>
    </div>
    <div class="portfolio-content">
      <h2 style="font-size:14px">${val.title}</h2>
      
    </div>
  </div>
</div>`;
      });

      $("#home-movie4").html(xhtml);
    }
  );
};

showHorrorMovie = () => {
  $.getJSON(
    "http://apiforlearning.zendvn.com/api/playlists/85/videos?offset=0&limit=6&sort_by=id&sort_dir=asc",
    function (data) {
      let xhtml = "";
      $.each(data, function (key, val) {
        let thumbnailObj = JSON.parse(val.thumbnail);

        xhtml += `<div class="col-md-4 col-sm-6 soon released">
  <div class="single-portfolio">
  <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val.id}>
    <div class="single-portfolio-img">
      <img
        src="${thumbnailObj.medium.url}"
        alt="portfolio"
      />
      <a
        
        href="movie-details.html?id=${val.id}"
        class="popup-youtube"
        onclick="funcViewedVideos('${val.id}','${val.title}')">
      
        <i class="icofont icofont-ui-play"></i>
      </a>
    </div>
    <div class="portfolio-content">
      <h2 style="font-size:14px">${val.title}</h2>
      
    </div>
  </div>
</div>`;
      });

      $("#home-movie7").html(xhtml);
    }
  );
};

showPsychoMovie = () => {
  $.getJSON(
    "http://apiforlearning.zendvn.com/api/playlists/81/videos?offset=0&limit=6&sort_by=id&sort_dir=asc",
    function (data) {
      let xhtml = "";
      $.each(data, function (key, val) {
        let thumbnailObj = JSON.parse(val.thumbnail);

        xhtml += `<div class="col-md-4 col-sm-6 soon released">
  <div class="single-portfolio">
  <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val.id}">
    <div class="single-portfolio-img">
      <img
        src="${thumbnailObj.medium.url}"
        alt="portfolio"
      />
      <a
        
        href="movie-details.html?id=${val.id}"
        class="popup-youtube"
        onclick="funcViewedVideos('${val.id}','${val.title}')">
      
        <i class="icofont icofont-ui-play"></i>
      </a>
    </div>
    <div class="portfolio-content">
      <h2 style="font-size:14px">${val.title}</h2>
      
    </div>
  </div>
</div>`;
      });

      $("#home-movie3").html(xhtml);
    }
  );
};

showComedyMovie = () => {
  $.getJSON(
    "http://apiforlearning.zendvn.com/api/playlists/83/videos?offset=0&limit=6&sort_by=id&sort_dir=asc",
    function (data) {
      let xhtml = "";
      $.each(data, function (key, val) {
        let thumbnailObj = JSON.parse(val.thumbnail);

        xhtml += `<div class="col-md-4 col-sm-6 soon released">
  <div class="single-portfolio">
  <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val.id}">
    <div class="single-portfolio-img">
      <img
        src="${thumbnailObj.medium.url}"
        alt="portfolio"
      />
      <a
        
        href="movie-details.html?id=${val.id}"
        class="popup-youtube"
        onclick="funcViewedVideos('${val.id}','${val.title}')">
      
        <i class="icofont icofont-ui-play"></i>
      </a>
    </div>
    <div class="portfolio-content">
      <h2 style="font-size:14px">${val.title}</h2>
      
    </div>
  </div>
</div>`;
      });

      $("#home-movie5").html(xhtml);
    }
  );
};
showActionMovie3 = () => {
  $.getJSON(
    "http://apiforlearning.zendvn.com/api/playlists/79/videos?offset=0&limit=6&sort_by=id&sort_dir=asc",
    function (data) {
      let xhtml = "";
      $.each(data, function (key, val) {
        let thumbnailObj = JSON.parse(val.thumbnail);

        xhtml += `<div class="col-md-4 col-sm-6 soon released">
  <div class="single-portfolio">
  <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val.id}">
    <div class="single-portfolio-img">
      <img
        src="${thumbnailObj.medium.url}"
        alt="portfolio"
      />
      <a
        
        href="movie-details.html?id=${val.id}"
        class="popup-youtube"
        onclick="funcViewedVideos('${val.id}','${val.title}')">
      
        <i class="icofont icofont-ui-play"></i>
      </a>
    </div>
    <div class="portfolio-content">
      <h2 style="font-size:14px">${val.title}</h2>
      
    </div>
  </div>
</div>`;
      });

      $("#home-movie9").html(xhtml);
    }
  );
};
showAmazingMovie = () => {
  $.getJSON(
    "http://apiforlearning.zendvn.com/api/playlists/80/videos?offset=0&limit=6&sort_by=id&sort_dir=asc",
    function (data) {
      let xhtml = "";
      $.each(data, function (key, val) {
        let thumbnailObj = JSON.parse(val.thumbnail);

        xhtml += `<div class="col-md-4 col-sm-6 soon released">
  <div class="single-portfolio">
  <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val.id}">
    <div class="single-portfolio-img">
      <img
        src="${thumbnailObj.medium.url}"
        alt="portfolio"
      />
      <a
        
        href="movie-details.html?id=${val.id}"
        class="popup-youtube"
        onclick="funcViewedVideos('${val.id}','${val.title}')">
      
        <i class="icofont icofont-ui-play"></i>
      </a>
    </div>
    <div class="portfolio-content">
      <h2 style="font-size:14px">${val.title}</h2>
      
    </div>
  </div>
</div>`;
      });

      $("#home-movie10").html(xhtml);
    }
  );
};
playVideos = () => {
  let urlID = $.urlParam("id");
  console.log(urlID, "hihi");

  $.getJSON(
    "http://apiforlearning.zendvn.com/api/videos/" + urlID + "",
    function (data) {
      console.log(data, "1");

      let xhtml = "";
      $.each(data, function (key, val) {
        console.log(data, "2");

        let data1 = val.iframe;
        xhtml +=
          `
        <div class="row flexbox-center">
        ` +
          data1 +
          `
      </div>
      <a href="#" class="theme-btn">
        <img src="/work_in_progress/assets/icoin/icons8-love-26.png" /> Yêu
        thích</a
      >
  			`;
      });

      $("#play-movies").html(xhtml);
    }
  );
};
showVideosViewed = (data2) => {};
showVideoClick = (id) => {
  console.log(id);

  // let seenId = $(".input-hidden").val();
  if (id) {
    $("#video-img-id").css("opacity", "0.5");
  }
};
