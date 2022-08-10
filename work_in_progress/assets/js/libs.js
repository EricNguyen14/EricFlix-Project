$.urlParam = function (name) {
  var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(
    window.location.href
  );
  if (results == null) {
    return null;
  }
  return decodeURI(results[1]) || 0;
};
$(document).ready(function () {
  // On button click, get value
  // of input control Show alert
  // message box
  $("#getValueBtn").click(function () {
    var inputString = $("#getUserValue").val();
  });
});
