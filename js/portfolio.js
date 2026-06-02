const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {

    const target =
      document.getElementById(
        button.dataset.target
      );

    target.scrollIntoView({
      behavior: "smooth",
      inline: "start"
    });

  });
});


const menuItems =
  document.querySelectorAll(".work_btn");

menuItems.forEach(item => {

  item.addEventListener("click", () => {

    // 全active削除
    menuItems.forEach(link => {
      link.classList.remove("active");
    });

    // 押したものだけ追加
    item.classList.add("active");

  });

});

// すべてのvideoタグを取得
const videos = document.querySelectorAll('.my-video');

videos.forEach(video => {
  // 動画の再生が開始されたときのイベントを検知
  video.addEventListener('play', () => {
    videos.forEach(otherVideo => {
      // 再生された動画（自分自身）以外をすべて一時停止
      if (otherVideo !== video) {
        otherVideo.pause();
      }
    });
  });
});
