console.log("complete");
console.log($(window).width());
console.log($(window).height());

let width = $(window).width();
let height = $(window).height();

console.log(width);
console.log(height);

// mousemove 이벤트가 일어날때마다 커서의 x,y값을 구해서 적용할 수 있다.

$(document).on("mousemove", function (event) {
  let mouseX = event.pageX;
  let mouseY = event.pageY;

  $("#status").html(mouseX + "," + mouseY);

  $(".bg-img").css("object-position", `${mouseX / 10}% ${mouseY / 10}%`);

  let imgWidth = $(".cat-img").width();
  let imgHeight = $(".cat-img").height();

  $(".cat-img").css("left", mouseX - imgWidth / 2 + "px");
  $(".cat-img").css("top", mouseY - imgHeight / 2 + "px");
});
