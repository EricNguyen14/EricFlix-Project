funcDeleteTask = (id) => {
  let text = "DELETE!\nBạn chắc chắn muốn xoá tin đã xem ?";
  if (confirm(text) == true) {
    let items = deleteItem(id);
    showArticleViewed(items);
  }
};

funcViewArticle = (id, title, thumb, link) => {
  let items = [];
  items = addItem(id, title, thumb, link);
  showArticleViewed();
};
funcFavNews = (id, title, thumb, link, heartColor) => {
  $("#" + id + "").addclass(".heartActive");
  // let imgBgs = document.getElementById("fav-news");
  // console.log(imgBgs);
  const isExist = listFavs().some((el) => {
    return el?.id === id;
  });
  if (isExist) {
    deleteFavs(id);
  } else {
    addFavs(id, title, thumb, link, heartColor);
  }

  showFavNews();
};
favsVideo = (id, title, thumb) => {
  const isExist = listFavsVideos().some((el) => {
    return el?.id === id;
  });
  if (isExist) {
    deleteFavsVideo(id);
  } else {
    addFavsVideo(id, title, thumb);
  }

  showFavVideos();
};
funcViewedVideos = (id, title, iframe) => {
  let videos = [];
  videos = addVideo(id, title, iframe);

  showVideosViewed();
  showVideoClick(id);
};
