if (process.browser) {
  window.onNuxtReady((app) => {
    // 禁止双击缩放
    document.documentElement.addEventListener(
      "touchstart",
      function (event) {
        if (event.touches.length > 1) {
          event.preventDefault()
        }
      },
      false
    );
    // 禁止双指缩放
    var lastTouchEnd = 0;
    document.documentElement.addEventListener(
      "touchend",
      function (event) {
        var now = Date.now()
        if (now - lastTouchEnd <= 300) {
          event.preventDefault()
        }
        lastTouchEnd = now
      },
      false
    );
  });
}
