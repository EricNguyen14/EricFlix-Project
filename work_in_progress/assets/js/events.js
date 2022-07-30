funcDeleteTask = (id) => {
  let text = "DELETE!\nBạn chắc chắn muốn xoá tin đã xem ?";
  if (confirm(text) == true) {
    let items = deleteItem(id);
    showArticleViewed(items);
  }
};

funcSubmitForm = () => {
  let valueName = elemInputName.value;
  let valueLevel = elemInputLevel.value;
  let valueID = elemInputID.value;
  let items = [];

  if (valueID == "") {
    // add
    items = addItem(valueName, valueLevel);
  } else {
    // edit
    items = editItem(valueID, valueName, valueLevel);
  }

  // Load lại danh sách
  showItems(items);
};

funcViewArticle = (id, title, thumb, link) => {
  let items = [];
  items = addItem(id, title, thumb, link);
  showArticleViewed();
};
funcFavNews = (id, title, thumb, link) => {
  let favs = [];
  if (localStorage.getItem("FAV_NEWS") === null) {
    favs = addFavs(id, title, thumb, link);
  } else {
    const favs = listFavs().map((fav) => {
      if (fav.id === id) {
        deleteFavs(id);
      } else {
        addFavs(id, title, thumb, link);
      }
    });
  }
};
