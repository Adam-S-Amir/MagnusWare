function detectDeviceType() {
  const userAgent = navigator.userAgent;
  function isiPadAir() {
    const userAgent = navigator.userAgent;
    return /iPad/i.test(userAgent) && /AppleWebKit/i.test(userAgent) && /CriOS/i.test(userAgent);
  }
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
    navbar();
    console.log("Device Type: Tablet");
  } else if (isiPadAir()) {
    console.log("Device Type: Tablet");
  } else if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera Mini/i.test(userAgent)) {
    console.log("Device Type: Phone");
  } else {
    console.log("Device Type: Computer");
  }
}
window.addEventListener('resize', function (event) {
  detectDeviceType();
});
detectDeviceType();
