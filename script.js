console.log("ASdfasf")
$("#add-button").click(function() {
  $("#add-display").html("4")
})

$("#picture-button").click(function() {
  $("#picture-display").html("Andre of Giem");
  wasadude("https://i.ytimg.com/vi/wo5d_VSogfc/0.jpg", 500, 500, "null")
})

$("#counter-button").click(function() {
  counter()
  $("#counter-display").html(inc)
})

var inc = 0
function counter() {
  inc = inc + 100;
}

function wasadude(src, width, height, alt) {
  var img = document.createElement("img");
  img.src = src;
  img.width = width;
  img.height = height;
  img.alt = alt;
  document.body.appendChild(img)
}
  