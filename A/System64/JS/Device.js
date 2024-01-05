let device;

function isiPadAir() {
  const userAgent = navigator.userAgent;
  return /iPad/i.test(userAgent) && /AppleWebKit/i.test(userAgent) && /CriOS/i.test(userAgent);
}

function detectDeviceType() {
  const userAgent = navigator.userAgent;
  if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera Mini/i.test(userAgent)) {
    UnsupportedPlatform();
    console.log("Device Type: Phone");
    device = "Phone";
  } else if (isiPadAir()) {
    console.log("Device Type: Tablet");
    device = "Tablet";
  } else if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
    console.log("Device Type: Tablet");
    device = "Tablet";
  } else {
    console.log("Device Type: Computer");
    device = "Computer";
  }
}

function UnsupportedPlatform() {
  document.body.style.userSelect = 'none';
  document.body.style.msUserSelect = 'none';
  document.body.style.webkitUserSelect = 'none';
  document.body.style.mozUserSelect = 'none';
  document.body.style.khtmlUserSelect = 'none';
  document.body.draggable = false;
  document.body.style.overflow = 'hidden';
  document.addEventListener('dragstart', function (e) {
    e.preventDefault();
  });
  document.addEventListener('touchmove', function (e) {
    e.preventDefault();
  }, {
    passive: false
  });
  const audioElements = document.querySelectorAll('audio');
  audioElements.forEach((audio) => {
    audio.muted = true;
  });
  let x = document.createElement("div");
  x.style.opacity = 1;
  x.id = "splash-screen";
  x.style.zIndex = 999999999999999;
  document.body.appendChild(x);
  let sorry = document.createElement("p");
  sorry.classList.add("Unsupported-Platform");
  sorry.innerHTML = "We're sorry, but the platform you are using is unsupported by MagnusWare.<br><br>See you soon!";
  x.appendChild(sorry);
}

if (device === "Phone") {
  UnsupportedPlatform();
}

detectDeviceType()

//# sourceURL=MagnusWare