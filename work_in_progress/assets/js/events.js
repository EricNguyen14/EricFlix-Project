funcDeleteTask = (id) => {
  let text = "DELETE!\nBạn chắc chắn muốn xoá tin đã xem ?";
  if (confirm(text) == true) {
    let items = deleteItem(id);
    showArticleViewed(items);
  }
};

funcDeleteVideo = (id) => {
  let text = "DELETE!\nBạn chắc chắn muốn xoá phim đã xem ?";
  if (confirm(text) == true) {
    let videos = deleteVideos(id);
    showVideosViewed(videos);
  }
};
funcDeleteFavVideo = (id) => {
  let text = "DELETE!\nBạn chắc chắn muốn xoá phim yêu thích ?";
  if (confirm(text) == true) {
    let films = deleteFavsVideos(id);
    showFavVideos(films);
  }
};
funcViewArticle = (id, title, thumb, link) => {
  let items = [];
  items = addItem(id, title, thumb, link);
  showArticleViewed();
};
funcFavNews = (id, title, thumb, link, heartColor) => {
  // let imgBgs = document.getElementById("fav-news");
  // console.log(imgBgs);
  const isExist = listFavs().some((el) => {
    return el?.id === id;
  });
  if (isExist) {
    deleteFavs(id);
  } else {
    console.log("clickhere", id);
    addFavs(id, title, thumb, link, heartColor);
    alert(" Đã thêm vào trang yêu thích");
  }
  $("#d" + id + "").css("color", "red");
  showHeartActive(id);
  showFavNews();
};
favsVideo = (id, title, thumb, playlist_id) => {
  let fimls = [];
  const isExist = listFavsVideos().some((el) => {
    return el?.id === id;
  });
  if (isExist) {
    deleteFavsVideo(id);
  } else {
    fimls = addFavsVideos(id, title, thumb, playlist_id);
    alert(" Đã thêm vào trang yêu thích");
  }

  showFavVideos();
};
funcViewedVideos = (id, title, thumb, playlist_id) => {
  let videos = [];
  videos = addVideo(id, title, thumb, playlist_id);

  showVideosViewed();
  showVideoClick(id);
};
