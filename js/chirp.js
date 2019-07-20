function chirp(n) {
  // FIX ME

  if (n === 0) {
    return "";
  }
  return "chirp " + chirp(n - 1);
}

$(document).ready(function() {
  $("#result").html(chirp(3));
});
