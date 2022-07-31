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

addFavs = (id, title, thumb, link, imgBg) => {
  let taskNew = {
    id: id,
    title: title,
    thumb: thumb,
    link: link,
    imgBg: `https://img.icons8.com/emoji/48/000000/heart-suit.png`,
  };

  let favs = listFavs();
  favs.push(taskNew);

  // Lưu item vào storgare
  saveStorageFavs(favs);

  return favs;
};
