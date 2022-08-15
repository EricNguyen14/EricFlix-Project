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

deleteVideos = (id) => {
  let videos = listVideos();
  videos = videos.filter((video) => video.id !== id);
  saveStorageVideos(videos);
  return videos;
};

addVideo = (id, title, iframe) => {
  let taskVideo = { id: id, title: title, iframe: iframe };

  let videos = listVideos();
  videos.push(taskVideo);
  console.log(taskVideo);
  // Lưu item vào storgare
  saveStorageVideos(videos);

  return videos;
};
