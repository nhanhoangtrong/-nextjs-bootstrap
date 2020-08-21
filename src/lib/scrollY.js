export default (element, { headerHeight = 0, duration = 500 }) => {
  // Polyfill requestAnimationFrame
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame =
      window[vendors[x] + 'CancelAnimationFrame'] ||
      window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function () {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }

  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
  }

  let posY = 0;
  if (typeof element === 'number') {
    // Scroll to Y
    posY = element;
  } else {
    posY = element.offsetTop;
  }

  let initialPosY = window.pageYOffset;
  let distance = posY - initialPosY;
  if (distance > 0) {
    distance -= headerHeight;
  } else {
    distance += headerHeight;
  }

  let start = null;
  let animationFunc = (timestamp) => {
    if (!start) start = timestamp;

    let progress = timestamp - start;
    if (progress < duration) {
      let toPosY = initialPosY + (progress / duration) * distance;
      window.scrollTo(0, toPosY);
      window.requestAnimationFrame(animationFunc);
    } else {
      window.scrollTo(0, initialPosY + distance);
    }
  };

  window.requestAnimationFrame(animationFunc);
};
