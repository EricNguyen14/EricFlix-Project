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
  $("#fav-news img").css(
    'src="https://img.icons8.com/carbon-copy/100/000000/filled-like.png"/>'
  );
  let favs = [];
  if (localStorage.getItem("FAV_NEWS") === null) {
    favs = addFavs(id, title, thumb, link);
    console.log("===");
  } else {
    const favs = listFavs().map((item, index) => {
      if (item.id === id) {
        deleteFavs(id);
        console.log("---- delete");
      } else {
        addFavs(id, title, thumb, link);
        console.log("---- add");
      }
    });
  }
};
