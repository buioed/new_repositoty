console.log("complete");
console.log($(window).width());
console.log($(window).height());

let width = $(window).width();
let height = $(window).height();

console.log(width);
console.log(height);

console.log(width);
console.log(height);

let isResizing = false; // ★ 박스를 누르고 있는지
let isDragging = false; // ★ 고양이를 누르고 있는지

$(".box").mousedown(function (e) {
  // ★ 박스 누르면 크기 조절 시작
  isResizing = true;
  e.preventDefault();
});

$(".cat-img").mousedown(function (e) {
  // ★ 고양이 누르면 이동 시작
  isDragging = true;
  e.preventDefault();
});

$(document).mouseup(function () {
  // ★ 마우스 떼면 둘 다 멈춤
  isResizing = false;
  isDragging = false;
});

// mousemove 이벤트가 일어날때마다 커서의 x,y값을 구해서 적용할 수 있다.

/*$(document).mousemove(function (e) {
  $("#status").html(e.pageX + "," + e.pageY);
  $(".box").css("width", e.pageX);
  $(".box").css("height", e.pageY);
}); */

$(document).mousemove(function (e) {
  $("#status").html(e.pageX + "," + e.pageY);

  if (isResizing) {
    // ★ 누르고 있을 때만 박스 크기 변경
    $(".box").css("width", e.pageX - $(".box").offset().left);
    $(".box").css("height", e.pageY - $(".box").offset().top);
  }

  if (isDragging) {
    // ★ 누르고 있을 때만 고양이 이동
    $(".cat-img").css("left", e.pageX - 100);
    $(".cat-img").css("top", e.pageY - 100);
  }
});
