//  show new start
showCategoriesInMenu = () => {
  let elmAreaCategoryNews = $("div#news");
  const API_PREFIX = "http://apiforlearning.zendvn.com/api/";
  $.getJSON(API_PREFIX + "categories_news", function (data) {
    let xhtml = "";
    $.each(data, function (key, val) {
      xhtml += `<a href="category.html?id=${val.id}" class="dropdown-item">${val.name}</a>`;
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
        let idheart = val.id;
        console.log(idheart);
        let day = val.publish_date.split(" ")[0];
        let newdate = day.split("-");
        let date = newdate[2] + "-" + newdate[1] + "-" + newdate[0];
        let newheartColor =
          `
        <div id="d` +
          idheart +
          `" class="fav-news" onClick="funcFavNews('${val.id}', '${val.title}', '${val.thumb}', '${val.link},', '${val.heartColor},')" >
        &#x02665
      </div>`;

        let localId = listFavs();
        for (let i = 0; i < localId.length; i++) {
          if (localId[i].id == idheart) {
            newheartColor = `
            <div class="fav-news heartActive" onClick="funcFavNews('${val.id}', '${val.title}', '${val.thumb}', '${val.link},', '${val.heartColor},')" >
            &#x02665
          </div>`;
          }
        }

        xhtml +=
          `<div class="col-lg-12">
          <div class="single-news">
          <div class="news-bg-1" style="background:url(${val.thumb}); background-size: cover;  
             <input type="hidden"  id="input-hidden" name="${val.title}" value="${val.id}">
            ` +
          newheartColor +
          `
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
  if (data1.length === 0) {
    xhtml = `<h3>Danh sách trống</h3>`;
  } else {
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
  }
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
        xhtml += `<div class="col-lg-3 col-md-3 col-sm-4 col-6">
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
        let videoImg = `  <div class="single-portfolio-img">
        <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val}">
          <img 
          src="${thumbnailObj.high.url}"
            alt="portfolio"
          />
        
          <a
            
            href="movie-details.html?id=${val.id}&playlist-id=${val.playlist_id}"
            class="popup-youtube"
            onclick="funcViewedVideos('${val.id}','${val.title}','${thumbnailObj.medium.url}','${val.playlist_id}')">
            <i class="icofont icofont-ui-play"></i>
          </a>
        </div>`;
        let movieId = val.id;
        let seenMovie = listVideos();
        for (let i = 0; i < seenMovie.length; i++) {
          if (seenMovie[i].id == movieId) {
            videoImg = `  <div class="single-portfolio-img">
            <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val}">
              <img class="cssImg"
              src="${thumbnailObj.high.url}"
                alt="portfolio"
              />
              <h6 class=h6-videos> Phim đã xem</h6>
              <a
                
                href="movie-details.html?id=${val.id}&playlist-id=${val.playlist_id}"
                class="popup-youtube"
                onclick="funcViewedVideos('${val.id}','${val.title}','${thumbnailObj.medium.url}','${val.playlist_id}')">
                <i class="icofont icofont-ui-play"></i>
              </a>
            </div>`;
          }
        }

        xhtml +=
          `<div class="col-lg-4 col-md-4 col-sm-6 col-6 released">
        <div class="single-portfolio">
        ` +
          videoImg +
          `
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
        const data1 = val.iframe;
        console.log(data, "hihi");

        xhtml += `<div class="row hero-area-slide">
        <div class="col-lg-12 col-md-12 col-12 col-sm-12">
          <div class="hero-area-content">
            ${data1}
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
        let videoImg = `  <div class="single-portfolio-img">
        <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val}">
          <img 
          src="${thumbnailObj.high.url}"
            alt="portfolio"
          />
        
          <a
            
            href="movie-details.html?id=${val.id}&playlist-id=${val.playlist_id}"
            class="popup-youtube"
            onclick="funcViewedVideos('${val.id}','${val.title}','${thumbnailObj.medium.url}','${val.playlist_id}')">
            <i class="icofont icofont-ui-play"></i>
          </a>
        </div>`;
        let movieId = val.id;
        let seenMovie = listVideos();
        for (let i = 0; i < seenMovie.length; i++) {
          if (seenMovie[i].id == movieId) {
            videoImg = `  <div class="single-portfolio-img">
            <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val}">
              <img class="cssImg"
              src="${thumbnailObj.high.url}"
                alt="portfolio"
              />
              <h6 class=h6-videos> Phim đã xem</h6>
              <a
                
                href="movie-details.html?id=${val.id}&playlist-id=${val.playlist_id}"
                class="popup-youtube"
                onclick="funcViewedVideos('${val.id}','${val.title}','${thumbnailObj.medium.url}','${val.playlist_id}')">
                <i class="icofont icofont-ui-play"></i>
              </a>
            </div>`;
          }
        }

        xhtml +=
          `<div class="col-md-4 col-sm-4 col-6 soon released">
  <div class="single-portfolio">
  <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val.id}">
  ` +
          videoImg +
          `
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
        let videoImg = `  <div class="single-portfolio-img">
        <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val}">
          <img 
          src="${thumbnailObj.high.url}"
            alt="portfolio"
          />
        
          <a
            
            href="movie-details.html?id=${val.id}&playlist-id=${val.playlist_id}"
            class="popup-youtube"
            onclick="funcViewedVideos('${val.id}','${val.title}','${thumbnailObj.medium.url}','${val.playlist_id}')">
            <i class="icofont icofont-ui-play"></i>
          </a>
        </div>`;
        let movieId = val.id;
        let seenMovie = listVideos();
        for (let i = 0; i < seenMovie.length; i++) {
          if (seenMovie[i].id == movieId) {
            videoImg = `  <div class="single-portfolio-img">
            <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val}">
              <img class="cssImg"
              src="${thumbnailObj.high.url}"
                alt="portfolio"
              />
              <h6 class=h6-videos> Phim đã xem</h6>
              <a
                
                href="movie-details.html?id=${val.id}&playlist-id=${val.playlist_id}"
                class="popup-youtube"
                onclick="funcViewedVideos('${val.id}','${val.title}','${thumbnailObj.medium.url}','${val.playlist_id}')">
                <i class="icofont icofont-ui-play"></i>
              </a>
            </div>`;
          }
        }

        xhtml +=
          `<div class="col-md-4 col-sm-4 col-6 soon released">
  <div class="single-portfolio">
  ` +
          videoImg +
          `
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
        let videoImg = `  <div class="single-portfolio-img">
        <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val}">
          <img 
          src="${thumbnailObj.high.url}"
            alt="portfolio"
          />
        
          <a
            
            href="movie-details.html?id=${val.id}&playlist-id=${val.playlist_id}"
            class="popup-youtube"
            onclick="funcViewedVideos('${val.id}','${val.title}','${thumbnailObj.medium.url}','${val.playlist_id}')">
            <i class="icofont icofont-ui-play"></i>
          </a>
        </div>`;
        let movieId = val.id;
        let seenMovie = listVideos();
        for (let i = 0; i < seenMovie.length; i++) {
          if (seenMovie[i].id == movieId) {
            videoImg = `  <div class="single-portfolio-img">
            <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val}">
              <img class="cssImg"
              src="${thumbnailObj.high.url}"
                alt="portfolio"
              />
              <h6 class=h6-videos> Phim đã xem</h6>
              <a
                
                href="movie-details.html?id=${val.id}&playlist-id=${val.playlist_id}"
                class="popup-youtube"
                onclick="funcViewedVideos('${val.id}','${val.title}','${thumbnailObj.medium.url}','${val.playlist_id}')">
                <i class="icofont icofont-ui-play"></i>
              </a>
            </div>`;
          }
        }

        xhtml +=
          `<div class="col-md-4 col-sm-4 col-6 soon released">
  <div class="single-portfolio">
  <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val.id}">
  ` +
          videoImg +
          `
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
        let videoImg = `  <div class="single-portfolio-img">
        <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val}">
          <img 
          src="${thumbnailObj.high.url}"
            alt="portfolio"
          />
        
          <a
            
            href="movie-details.html?id=${val.id}&playlist-id=${val.playlist_id}"
            class="popup-youtube"
            onclick="funcViewedVideos('${val.id}','${val.title}','${thumbnailObj.medium.url}','${val.playlist_id}')">
            <i class="icofont icofont-ui-play"></i>
          </a>
        </div>`;
        let movieId = val.id;
        let seenMovie = listVideos();
        for (let i = 0; i < seenMovie.length; i++) {
          if (seenMovie[i].id == movieId) {
            videoImg = `  <div class="single-portfolio-img">
            <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val}">
              <img class="cssImg"
              src="${thumbnailObj.high.url}"
                alt="portfolio"
              />
              <h6 class=h6-videos> Phim đã xem</h6>
              <a
                
                href="movie-details.html?id=${val.id}&playlist-id=${val.playlist_id}"
                class="popup-youtube"
                onclick="funcViewedVideos('${val.id}','${val.title}','${thumbnailObj.medium.url}','${val.playlist_id}')">
                <i class="icofont icofont-ui-play"></i>
              </a>
            </div>`;
          }
        }

        xhtml +=
          `<div class="col-md-4 col-sm-4 col-6 soon released">
  <div class="single-portfolio">
  <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val.id}}">
  ` +
          videoImg +
          `
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
        let videoImg = `  <div class="single-portfolio-img">
        <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val}">
          <img 
          src="${thumbnailObj.high.url}"
            alt="portfolio"
          />
        
          <a
            
            href="movie-details.html?id=${val.id}&playlist-id=${val.playlist_id}"
            class="popup-youtube"
            onclick="funcViewedVideos('${val.id}','${val.title}','${thumbnailObj.medium.url}','${val.playlist_id}')">
            <i class="icofont icofont-ui-play"></i>
          </a>
        </div>`;
        let movieId = val.id;
        let seenMovie = listVideos();
        for (let i = 0; i < seenMovie.length; i++) {
          if (seenMovie[i].id == movieId) {
            videoImg = `  <div class="single-portfolio-img">
            <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val}">
              <img class="cssImg"
              src="${thumbnailObj.high.url}"
                alt="portfolio"
              />
              <h6 class=h6-videos> Phim đã xem</h6>
              <a
                
                href="movie-details.html?id=${val.id}&playlist-id=${val.playlist_id}"
                class="popup-youtube"
                onclick="funcViewedVideos('${val.id}','${val.title}','${thumbnailObj.medium.url}','${val.playlist_id}')">
                <i class="icofont icofont-ui-play"></i>
              </a>
            </div>`;
          }
        }

        xhtml +=
          `<div class="col-md-4 col-sm-4 col-6 soon released">
  <div class="single-portfolio">
  <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val.id}>
  ` +
          videoImg +
          `
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
        let videoImg = `  <div class="single-portfolio-img">
        <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val}">
          <img 
          src="${thumbnailObj.high.url}"
            alt="portfolio"
          />
        
          <a
            
            href="movie-details.html?id=${val.id}&playlist-id=${val.playlist_id}"
            class="popup-youtube"
            onclick="funcViewedVideos('${val.id}','${val.title}','${thumbnailObj.medium.url}','${val.playlist_id}')">
            <i class="icofont icofont-ui-play"></i>
          </a>
        </div>`;
        let movieId = val.id;
        let seenMovie = listVideos();
        for (let i = 0; i < seenMovie.length; i++) {
          if (seenMovie[i].id == movieId) {
            videoImg = `  <div class="single-portfolio-img">
            <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val}">
              <img class="cssImg"
              src="${thumbnailObj.high.url}"
                alt="portfolio"
              />
              <h6 class=h6-videos> Phim đã xem</h6>
              <a
                
                href="movie-details.html?id=${val.id}&playlist-id=${val.playlist_id}"
                class="popup-youtube"
                onclick="funcViewedVideos('${val.id}','${val.title}','${thumbnailObj.medium.url}','${val.playlist_id}')">
                <i class="icofont icofont-ui-play"></i>
              </a>
            </div>`;
          }
        }

        xhtml +=
          `<div class="col-md-4 col-sm-4 col-6 soon released">
  <div class="single-portfolio">
  <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val.id}">
  ` +
          videoImg +
          `
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
        let videoImg = `  <div class="single-portfolio-img">
        <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val}">
          <img 
          src="${thumbnailObj.high.url}"
            alt="portfolio"
          />
        
          <a
            
            href="movie-details.html?id=${val.id}&playlist-id=${val.playlist_id}"
            class="popup-youtube"
            onclick="funcViewedVideos('${val.id}','${val.title}','${thumbnailObj.medium.url}','${val.playlist_id}')">
            <i class="icofont icofont-ui-play"></i>
          </a>
        </div>`;
        let movieId = val.id;
        let seenMovie = listVideos();
        for (let i = 0; i < seenMovie.length; i++) {
          if (seenMovie[i].id == movieId) {
            videoImg = `  <div class="single-portfolio-img">
            <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val}">
              <img class="cssImg"
              src="${thumbnailObj.high.url}"
                alt="portfolio"
              />
              <h6 class=h6-videos> Phim đã xem</h6>
              <a
                
                href="movie-details.html?id=${val.id}&playlist-id=${val.playlist_id}"
                class="popup-youtube"
                onclick="funcViewedVideos('${val.id}','${val.title}','${thumbnailObj.medium.url}','${val.playlist_id}')">
                <i class="icofont icofont-ui-play"></i>
              </a>
            </div>`;
          }
        }

        xhtml +=
          `<div class="col-md-4 col-sm-4 col-6 soon released">
  <div class="single-portfolio">
  <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val.id}">
  ` +
          videoImg +
          `
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
        let videoImg = `  <div class="single-portfolio-img">
        <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val}">
          <img 
          src="${thumbnailObj.high.url}"
            alt="portfolio"
          />
        
          <a
            
            href="movie-details.html?id=${val.id}&playlist-id=${val.playlist_id}"
            class="popup-youtube"
            onclick="funcViewedVideos('${val.id}','${val.title}','${thumbnailObj.medium.url}','${val.playlist_id}')">
            <i class="icofont icofont-ui-play"></i>
          </a>
        </div>`;
        let movieId = val.id;
        let seenMovie = listVideos();
        for (let i = 0; i < seenMovie.length; i++) {
          if (seenMovie[i].id == movieId) {
            videoImg = `  <div class="single-portfolio-img">
            <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val}">
              <img class="cssImg"
              src="${thumbnailObj.high.url}"
                alt="portfolio"
              />
              <h6 class=h6-videos> Phim đã xem</h6>
              <a
                
                href="movie-details.html?id=${val.id}&playlist-id=${val.playlist_id}"
                class="popup-youtube"
                onclick="funcViewedVideos('${val.id}','${val.title}','${thumbnailObj.medium.url}','${val.playlist_id}')">
                <i class="icofont icofont-ui-play"></i>
              </a>
            </div>`;
          }
        }

        xhtml +=
          `<div class="col-md-4 col-sm-4 col-6 soon released">
  <div class="single-portfolio">
  <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val.id}">
  ` +
          videoImg +
          `
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
showActionMovie4 = () => {
  $.getJSON(
    "http://apiforlearning.zendvn.com/api/playlists/80/videos?offset=0&limit=6&sort_by=id&sort_dir=asc",
    function (data) {
      let xhtml = "";
      $.each(data, function (key, val) {
        let thumbnailObj = JSON.parse(val.thumbnail);
        let videoImg = `  <div class="single-portfolio-img">
        <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val}">
          <img 
          src="${thumbnailObj.high.url}"
            alt="portfolio"
          />
        
          <a
            
            href="movie-details.html?id=${val.id}&playlist-id=${val.playlist_id}"
            class="popup-youtube"
            onclick="funcViewedVideos('${val.id}','${val.title}','${thumbnailObj.medium.url}','${val.playlist_id}')">
            <i class="icofont icofont-ui-play"></i>
          </a>
        </div>`;
        let movieId = val.id;
        let seenMovie = listVideos();
        for (let i = 0; i < seenMovie.length; i++) {
          if (seenMovie[i].id == movieId) {
            videoImg = `  <div class="single-portfolio-img">
            <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val}">
              <img class="cssImg"
              src="${thumbnailObj.high.url}"
                alt="portfolio"
              />
              <h6 class=h6-videos> Phim đã xem</h6>
              <a
                
                href="movie-details.html?id=${val.id}&playlist-id=${val.playlist_id}"
                class="popup-youtube"
                onclick="funcViewedVideos('${val.id}','${val.title}','${thumbnailObj.medium.url}','${val.playlist_id}')">
                <i class="icofont icofont-ui-play"></i>
              </a>
            </div>`;
          }
        }

        xhtml +=
          `<div class="col-md-4 col-sm-4 col-6 soon released">
  <div class="single-portfolio">
  <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val.id}">
  ` +
          videoImg +
          `
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
showAmazingMovie = () => {
  let urlPlaylistId = $.urlParam("playlist-id");
  $.getJSON(
    "http://apiforlearning.zendvn.com/api/playlists/" +
      urlPlaylistId +
      "/videos?offset=0&limit=21&sort_by=id&sort_dir=asc",
    function (data) {
      let xhtml = "";
      $.each(data, function (key, val) {
        let thumbnailObj = JSON.parse(val.thumbnail);
        let videoImg = `  <div class="single-portfolio-img">
        <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val}">
          <img 
          src="${thumbnailObj.high.url}"
            alt="portfolio"
          />
        
          <a
            
            href="movie-details.html?id=${val.id}&playlist-id=${val.playlist_id}"
            class="popup-youtube"
            onclick="funcViewedVideos('${val.id}','${val.title}','${thumbnailObj.medium.url}','${val.playlist_id}')">
            <i class="icofont icofont-ui-play"></i>
          </a>
        </div>`;
        let movieId = val.id;
        let seenMovie = listVideos();
        for (let i = 0; i < seenMovie.length; i++) {
          if (seenMovie[i].id == movieId) {
            videoImg = `  <div class="single-portfolio-img">
            <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val}">
              <img class="cssImg"
              src="${thumbnailObj.high.url}"
                alt="portfolio"
              />
              <h6 class=h6-videos> Phim đã xem</h6>
              <a
                
                href="movie-details.html?id=${val.id}&playlist-id=${val.playlist_id}"
                class="popup-youtube"
                onclick="funcViewedVideos('${val.id}','${val.title}','${thumbnailObj.medium.url}','${val.playlist_id}')">
                <i class="icofont icofont-ui-play"></i>
              </a>
            </div>`;
          }
        }

        xhtml +=
          `<div class="col-md-4 col-sm-4 col-6 soon released">
  <div class="single-portfolio">
  <input type="hidden" class=input-hidden id="${val.id}" name="${val.title}" value="${val.id}">
  ` +
          videoImg +
          `
    <div class="portfolio-content">
      <h2 style="font-size:14px">${val.title}</h2>
      
    </div>
  </div>
</div>`;
      });

      $("#home-movie11").html(xhtml);
    }
  );
};
playVideos = () => {
  let urlID = $.urlParam("id");
  console.log(urlID, "hihi");

  $.getJSON(
    "http://apiforlearning.zendvn.com/api/videos/" + urlID + "",
    function (data) {
      let thumbnailObj = JSON.parse(data.thumbnail);

      let data1 = data.iframe;
      var xhtml =
        `
        <div class="movie-detail-ifram">
        ` +
        data1 +
        `
      </div>
      <a href="#" class="theme-btn" onclick="favsVideo('${data.id}','${data.title}','${thumbnailObj.medium.url}','${data.playlist_id}')">
        <img src="/work_in_progress/assets/icoin/icons8-love-26.png" /> Yêu
        thích</a
      >
  			`;
      $("#play-movie").html(xhtml);
    }
  );
};
showVideosViewed = (data2) => {
  let xhtml = "";

  $.each(data2, function (key, val) {
    xhtml += `
    
    <div class="col-lg-12" >
    
    <div class="news-bg-2" style=" background:url(${val.thumb});">
    <a
        
            href="movie-details.html?id=${val.id}&playlist-id=${val.playlist_id}"
            class="popup-youtube"
          >
          <i class="icofont icofont-ui-play" style="transform:translateY(-40px)"></i>
          </a>
    <img
            src="${val.thumb}"
              alt="portfolio"
            /></div>
    <input type="hidden" id="${val.id}">
    <div class="news-date1" onclick="funcDeleteVideo('${val.id}')"> 
            <a href="#" >
             xóa</a>
            </div>
            
            <div>
              <h5 ><a href="movie-details.html?id=${val.id}&playlist-id=${val.playlist_id}" target=blank; >${val.title}</a></h5>
            </div>
            
          
           
         
          </div>
          </div>
            
      </div>
    
      `;
    $("#viewed-videos").html(xhtml);
  });
};
showVideoClick = (id) => {
  console.log(id);
  // let seenId = $(".input-hidden").val();
  if (id) {
    $("#video-img-id").css("opacity", "0.5");
  }
};
showHeartActive = (id) => {
  console.log(id);
};

showFavVideos = (data3) => {
  let xhtml = "";
  if (data1.length === 0) {
    xhtml = `<h3>Danh sách trống</h3>`;
  } else {
    $.each(data3, function (key, val) {
      xhtml += `
      <div class="col-lg-6">
      <div class="single-news">
      <div class="news-bg-1" style="background:url(${val.thumb}); background-size: cover;  ">
      <div class="news-date2" onclick="funcDeleteFavVideo('${val.id}')"> 
      
       Xóa yêu thích
      </div>
      </div>
      <h4>
        <a href="movie-details.html?id=${val.id}&playlist-id=${val.playlist_id}">
          ${val.title}
         </a>
        
          </h4> 
        
          <a

          href="movie-details.html?id=${val.id}&playlist-id=${val.playlist_id}"
          class="popup-youtube"
        >

          <i class="icofont icofont-ui-play"></i>
        </a>
   
      </div>

      </div>

    `;
    });
  }
  $("#videos-details").html(xhtml);
};
