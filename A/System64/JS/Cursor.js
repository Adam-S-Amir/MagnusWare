function cursor() {
  var direction = "";
  var oldx = 0;
  var oldy = 0;
  let prevX = null;
  let prevY = null;
  mousemovemethod = function (e) {

    if (e.pageX > oldx && e.pageY == oldy) {
      direction = "East";
      document.body.style.cursor = "url('./A/System64/Images/common/cursor/Right.png'), auto";
    } else if (e.pageX == oldx && e.pageY > oldy) {
      direction = "South";
      document.body.style.cursor = "url('./A/System64/Images/common/cursor/Down.png'), auto";
    } else if (e.pageX == oldx && e.pageY < oldy) {
      direction = "North";
      document.body.style.cursor = "url('./A/System64/Images/common/cursor/Up.png'), auto";
    } else if (e.pageX < oldx && e.pageY == oldy) {
      direction = "West";
      document.body.style.cursor = "url('./A/System64/Images/common/cursor/Left.png'), auto";
    }


    oldx = e.pageX;
    oldy = e.pageY;
  }

  window.addEventListener('mousemove', (event) => {
    const currX = event.clientX;
    const currY = event.clientY;

    if (prevX !== null && prevY !== null) {
      if (currX < prevX && currY < prevY) {
        document.body.style.cursor = "url('./A/System64/Images/common/cursor/UpLeft.png'), auto";
      }
      if (currX > prevX && currY < prevY) {
        document.body.style.cursor = "url('./A/System64/Images/common/cursor/UpRight.png'), auto";
      }
      if (currX > prevX && currY > prevY) {
        // Mouse moved down and to the right diagonally
        document.body.style.cursor = "url('./A/System64/Images/common/cursor/DownRight.png'), auto";
      }
      if (currX < prevX && currY > prevY) {
        // Mouse moved down and to the left diagonally
        document.body.style.cursor = "url('./A/System64/Images/common/cursor/DownLeft.png'), auto";
      }
    }

    prevX = currX;
    prevY = currY;
  });

  document.addEventListener('mousemove', mousemovemethod);

  localStorage.removeItem("cur");
  localStorage.setItem("cur", "cursor()");
}
//# sourceURL=MagnusWare
