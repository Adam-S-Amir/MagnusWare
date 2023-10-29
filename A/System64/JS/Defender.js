document.addEventListener('keydown', function (event) {
    if (event.key === 'F12') {
        if (document.location.href.startsWith("file:")) {
            console.log("Dev Settings Enabled!");
        } else if (document.location.href.startsWith("127.0.0.1:")) {
            console.log("Dev Settings Enabled!");
        } else if (document.location.href.startsWith("localhost:")) {
            console.log("Dev Settings Enabled!");
        } else {
            event.preventDefault();
            console.log("Dev Settings disabled!");
            toast({
                message: "Dev Tools have been\ndisabled for the public :(",
            })
        }
    }
})

function beforeUnloadHandler() {
    LogOff.play();
    setTimeout(() => {
        location.reload()
    }, "3000");
}

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'r') {
        event.preventDefault();
        confirm_reboot();
    } else if (event.key == 'F5') {
        event.preventDefault();
        confirm_reboot();
    }
});

const confirm_reboot = function () {
    showMessageBox({
        title: "Turbo Defender: Confirm Reboot?",
        message: "Are you sure you want to reboot? You will lose any unsaved data, but your settings and saved data will still be available!",
        iconID: "shutdown",
        sound: [SecurityBand.play()],
        buttons: [{
                label: "Yes",
                value: "yes",
                action: () => {
                    rebooting();
                    beforeUnloadHandler();
                },
            },
            {
                label: "No",
                value: "no",
            },
        ],
    })
}

const rebooting = function () {
    let count = 3;
    const intervalId = setInterval(() => {
        count--;
        if (count === 0) {
            clearInterval(intervalId);
            toast({
                message: `Rebooting...`,
            });
        } else {
            toast({
                message: `Rebooting in...${count}`,
            });
        }
    }, 900);
    intervalId;
};
