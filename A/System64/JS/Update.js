window.onload = function () {
  localStorage.removeItem("Update");
  localStorage.setItem("Update", "3");
}

function checkUpdate() {
  let UpdateData = localStorage.getItem("Update");
  if (UpdateData) {
    let UpdateObj = JSON.parse(UpdateData);
    if (!UpdateObj.hasOwnProperty("1")) {
      console.warn("System Is Up To Date!");
    }
  } else {
    toast({
      message: `Welcome to\nMagnusWare v${MagnusWare_V}`
    })
  }
}

function checkUpdate2() {
  let changers = document.getElementById("update-rs");
  let upbutton = document.getElementById("update-buttons");
  let UpdateData = localStorage.getItem("Update");

  if (UpdateData === null) {
    changers.innerHTML = "System is Not Up to Date!<br>Install Update?";
    const yes = document.createElement("button");
    const no = document.createElement("button");
    yes.setAttribute("onclick", "Accept();");
    no.setAttribute("onclick", "Decline();");
    yes.textContent = "Yes";
    no.textContent = "No";
    upbutton.appendChild(yes);
    upbutton.appendChild(no);
  } else {
    let UpdateObj = JSON.parse(UpdateData);
    if (!UpdateObj.hasOwnProperty("1")) {
      changers.innerHTML = "System is Up to Date!";
    }
  }
}

function Accept() {
  let changers = document.getElementById("update-rs");
  let upbutton = document.getElementById("update-buttons");
  let secounds = " seconds...";
  let seconds = 6; // Number of seconds for the countdown
  while (upbutton.firstChild) {
    upbutton.removeChild(upbutton.firstChild);
  }
  function countdown() {
    seconds--;
    changers.innerHTML =
      "Will Perform System<br>Update in " + seconds + secounds;
    if (seconds > 1) {
      if (seconds === 2) {
        secounds = " second...";
      } else if (seconds === 1) {
        secounds = " seconds...";
      }
      setTimeout(countdown, 1000);
    } else {
      Update();
    }
  }
  countdown();
}

function Decline() {
  let changers = document.getElementById("update-rs");
  let upbutton = document.getElementById("update-buttons");
  changers.innerHTML = "Update Will Not Be Installed!";
  while (upbutton.firstChild) {
    upbutton.removeChild(upbutton.firstChild);
  }
}

function Update() {
  function reloadCSS() {
    var links = document.getElementsByTagName("link");
    for (var i = 0; i < links.length; i++) {
      if (links[i].rel === "stylesheet") {
        var href = links[i].href;
        href +=
          (href.includes("?") ? "&" : "?") +
          "timestamp=" +
          new Date().getTime();
        links[i].href = href;
      }
    }
  }

  function reloadCachedJS() {
    console.log(scriptUrls);
    scriptUrls.forEach(function (filePath) {
      var scriptElement = document.createElement("script");
      scriptElement.src = filePath + "?v=" + Date.now();
      document.head.appendChild(scriptElement);
    });
  }
  reloadCSS();
  reloadCachedJS();

  localStorage.removeItem("Update");
  localStorage.setItem("Update", "3");
  location.reload();
}

checkUpdate();
