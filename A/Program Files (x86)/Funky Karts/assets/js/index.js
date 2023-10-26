const audio = new Audio();
audio.initialize();
const style = document.createElement('style');
style.innerText =
  `
html, body
{
  height: 100%;
  margin: 0px;
}
.hidden
{
  display: none;
}
`;
document.body.appendChild(style);
const embed = document.createElement('embed');
embed.width = '100%';
embed.height = '100%';
embed.src = './assets/lib/fk.nmf';
embed.type = 'application/x-nacl';
embed.tabIndex = 0;
embed.id = navigator.platform.toLowerCase();
embed.addEventListener('load', function () {
  embed.focus();
});
embed.addEventListener('message', function (ev) {
  switch (ev.data[0]) {
    case 'exit':
      if (!navigator.platform.toLowerCase().startsWith('mac')) {
        chrome.app.window.current().restore();
      }
      chrome.app.window.current().close();
      break;
    case 'open-uri':
      window.open(ev.data[1], '');
      break;
    case 'send-screen-view':
      tracker.sendAppView(ev.data[1]);
      break;
    case 'set-fx-volume':
      audio.setFXVolume(ev.data[1]);
      break;
    case 'load-start-fx':
      audio.loadAndStartFX(ev.data[1], ev.data[2]);
      break;
    case 'start-fx':
      audio.startFX(ev.data[1]);
      break;
    case 'set-music-volume':
      audio.setMusicVolume(ev.data[1]);
      break;
    case 'load-start-music':
      audio.loadAndStartMusic(ev.data[1]);
      break;
    case 'start-music':
      audio.startMusic(ev.data[1]);
      break;
    case 'pause-music':
      audio.pauseMusic();
      break;
    case 'resume-music':
      audio.resumeMusic();
      break;
    case 'show-3d-error':
      document.body.innerHTML =
        `
      <h2>
      Sorry, but we are unable to create a 3D graphics context for the game.
      </h2>
      <p>
      It appears that your GPU may be blacklisted by Chrome.  You can find out
      more details by opening <b>chrome://gpu</b> in a browser tab.  It is
      possible that changing some <b>chrome://flags</b> might enable 3D
      graphics for you.
      </p>
      `;
      break;
  }
});
document.body.appendChild(embed);
window.addEventListener('message', function (ev) {
  switch (ev.data[0]) {
    case 'show-game':
      ad.classList.add("hidden");
      embed.focus();
      break;
    default:
      break;
  }
});
if (navigator.userAgent.includes('CrOS')) {
  // https://code.google.com/p/chromium/issues/detail?id=402340
  chrome.app.window.current().onFullscreened.addListener(function () {
    chrome.app.window.current().hide();
    chrome.app.window.current().show();
    chrome.app.window.current().focus();
    embed.focus();
  });
}