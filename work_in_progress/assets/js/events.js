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
funcFavNews = (id, title, thumb, link, imgBg) => {
  // let imgBgs = document.getElementById("fav-news");
  // console.log(imgBgs);
  const isExist = listFavs().some((el) => {
    return el?.id === id;
  });
  if (isExist) {
    deleteFavs(id);
  } else {
    addFavs(id, title, thumb, link, imgBg);
    $("#fav-news").css({
      "background-image":
        'url("https://img.icons8.com/emoji/48/000000/heart-suit.png");',
    });
  }
};
