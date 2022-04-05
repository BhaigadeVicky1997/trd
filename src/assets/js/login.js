$(document).ready(function () {
  $("#wazen-login-from").on("blur", "input", isValidations);
  $("#wazen-login-from").on("focus", "input", notValidations);
});
function isValidations(e) {
  var i = $(this);
  if (i.hasClass("required")) {
    if (emptyField(i)) {
      shake(i);
    } else {
      i.removeClass("error animated shake").addClass("success");
    }
  }
}

function notValidations(e) {
  $(this).removeClass("success error animated shake");
}
function emptyField(e) {
  return e.val() == "" ? true : false;
}

function shake(e) {
  e.removeClass("success").addClass("error animated shake");
}

