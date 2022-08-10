loadStorage = () => {
  return JSON.parse(localStorage.getItem("ARTICLES_VIEWED"));
};

saveStorage = (items) => {
  localStorage.setItem("ARTICLES_VIEWED", JSON.stringify(items));
};

listItems = () => {
  let items = loadStorage();
  if (items === null) items = []; //
  return items;
};

deleteItem = (id) => {
  let items = listItems();
  items = items.filter((item) => item.id !== id);
  saveStorage(items);
  return items;
};

addItem = (id, title, thumb, link) => {
  let taskNew = { id: id, title: title, thumb: thumb, link: link };

  let items = listItems();
  items.push(taskNew);

  // Lưu item vào storgare
  saveStorage(items);

  return items;
};

//  favnews
loadStorageFavs = () => {
  return JSON.parse(localStorage.getItem("FAV_NEWS"));
};
saveStorageFavs = (favs) => {
  localStorage.setItem("FAV_NEWS", JSON.stringify(favs));
};
listFavs = () => {
  let favs = loadStorageFavs();
  if (favs === null) favs = []; //
  return favs;
};

deleteFavs = (id) => {
  let favs = listFavs();
  favs = favs.filter((fav) => fav.id !== id);
  saveStorageFavs(favs);
  return favs;
};

addFavs = (id, title, thumb, link, heartColor) => {
  let taskNew = {
    id: id,
    title: title,
    thumb: thumb,
    link: link,
    heartColor: `red`,
  };

  let favs = listFavs();
  favs.push(taskNew);

  // Lưu item vào storgare
  saveStorageFavs(favs);

  return favs;
};

loadStorageVideos = () => {
  return JSON.parse(localStorage.getItem("VIDEOS_VIEWED"));
};

saveStorageVideos = (videos) => {
  localStorage.setItem("VIDEOS_VIEWED", JSON.stringify(videos));
};

listVideos = () => {
  let videos = loadStorageVideos();
  if (videos === null) videos = []; //
  return videos;
};

deleteVideo = (id) => {
  let videos = listVideos();
  videos = videos.filter((video) => video.id !== id);
  saveStorageVideos(videos);
  return videos;
};

addVideo = (val) => {
  let taskVideos = { id: val.id, title: val.title, iframe: val.iframe };

  let videos = listVideos();
  videos.push(taskVideos);

  // Lưu item vào storgare
  saveStorageVideos(videos);

  return videos;
};
