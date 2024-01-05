var ImageLocation = "/A/System64/Images/Icons/";

function iconsAtTwoSizes(iconID, size) {
    iconID = iconID.toLowerCase();

    const iconSizes = [16, 32, 48, 64, 128, 256, 512];

    if (!iconSizes.includes(size)) {
        console.error("Invalid size. Using the default (16x16).");
        size = 16;
    }

    const iconPaths = {
        "0hh1": {
            "16": ImageLocation + "0hh1-16x16.png",
            "32": ImageLocation + "0hh1-32x32.png",
            "48": ImageLocation + "0hh1-48x48.png"
        },
        "0hn0": {
            "16": ImageLocation + "0hn0-16x16.png",
            "32": ImageLocation + "0hn0-32x32.png",
            "48": ImageLocation + "0hn0-48x48.png"
        },
        "2048": {
            "16": ImageLocation + "2048-16x16.png",
            "256": ImageLocation + "2048-256x256.png",
            "32": ImageLocation + "2048-32x32.png",
            "48": ImageLocation + "2048-48x48.png"
        },
        "2d": {
            "16": ImageLocation + "2d-16x16.png",
            "32": ImageLocation + "2d-32x32.png"
        },
        "3d-mode": {
            "32": ImageLocation + "3d-mode-32x32.png"
        },
        "4": {
            "16": ImageLocation + "4-16x16.png",
            "32": ImageLocation + "4-32x32.png",
            "512": ImageLocation + "4-512x512.png"
        },
        "64": {
            "16": ImageLocation + "64-16x16.png",
            "32": ImageLocation + "64-32x32.png",
            "48": ImageLocation + "64-48x48.png"
        },
        "aaronos": {
            "16": ImageLocation + "aaronos-16x16.png",
            "32": ImageLocation + "aaronos-32x32.png",
            "48": ImageLocation + "aaronos-48x48.png"
        },
        "about": {
            "16": ImageLocation + "about-16x16.png",
            "32": ImageLocation + "about-32x32.png",
            "48": ImageLocation + "about-48x48.png"
        },
        "acidbox": {
            "16": ImageLocation + "acidbox-16x16.png",
            "32": ImageLocation + "acidbox-32x32.png",
            "48": ImageLocation + "acidbox-48x48.png",
            "512": ImageLocation + "acidbox-512x512.png"
        },
        "arcade": {
            "16": ImageLocation + "arcade-16x16.png",
            "32": ImageLocation + "arcade-32x32.png",
            "48": ImageLocation + "arcade-48x48.png"
        },
        "archive": {
            "16": ImageLocation + "archive-16x16.png",
            "32": ImageLocation + "archive-32x32.png",
            "48": ImageLocation + "archive-48x48.png"
        },
        "audio-nope": {
            "16": ImageLocation + "audio-nope-16x16.png"
        },
        "audio-okay": {
            "16": ImageLocation + "audio-okay-16x16.png"
        },
        "baldi": {
            "16": ImageLocation + "baldi-16x16.png",
            "32": ImageLocation + "baldi-32x32.png",
            "48": ImageLocation + "baldi-48x48.png",
            "64": ImageLocation + "baldi-64x64.png"
        },
        "batman": {
            "16": ImageLocation + "batman-16x16.png",
            "32": ImageLocation + "batman-32x32.png",
            "48": ImageLocation + "batman-48x48.png",
            "512": ImageLocation + "batman-512x512.png"
        },
        "battery": {
            "16": ImageLocation + "battery-16x16.png",
            "32": ImageLocation + "battery-32x32.png",
            "512": ImageLocation + "battery-512x512.png"
        },
        "battery-err": {
            "16": ImageLocation + "battery-err-16x16.png"
        },
        "box": {
            "128": ImageLocation + "box-128x128.png",
            "16": ImageLocation + "box-16x16.png",
            "32": ImageLocation + "box-32x32.png"
        },
        "brain": {
            "16": ImageLocation + "brain-16x16.png",
            "32": ImageLocation + "brain-32x32.png"
        },
        "brutal": {
            "16": ImageLocation + "brutal-16x16.png",
            "32": ImageLocation + "brutal-32x32.png"
        },
        "btsx": {
            "16": ImageLocation + "btsx-16x16.png",
            "32": ImageLocation + "btsx-32x32.png"
        },
        "button": {
            "16": ImageLocation + "button-16x16.png",
            "32": ImageLocation + "button-32x32.png"
        },
        "calculator": {
            "16": ImageLocation + "calculator-16x16.png",
            "32": ImageLocation + "calculator-32x32.png",
            "48": ImageLocation + "calculator-48x48.png"
        },
        "castle": {
            "16": ImageLocation + "castle-16x16.png",
            "32": ImageLocation + "castle-32x32.png"
        },
        "chat": {
            "16": ImageLocation + "chat-16x16.png",
            "32": ImageLocation + "chat-32x32.png",
            "48": ImageLocation + "chat-48x48.png"
        },
        "chex": {
            "16": ImageLocation + "chex-16x16.png",
            "32": ImageLocation + "chex-32x32.png"
        },
        "chex2": {
            "16": ImageLocation + "chex2-16x16.png",
            "32": ImageLocation + "chex2-32x32.png"
        },
        "chex3": {
            "16": ImageLocation + "chex3-16x16.png",
            "32": ImageLocation + "chex3-32x32.png"
        },
        "chm": {
            "16": ImageLocation + "chm-16x16.png",
            "32": ImageLocation + "chm-32x32.png",
            "48": ImageLocation + "chm-48x48.png"
        },
        "clock": {
            "16": ImageLocation + "clock-16x16.png",
            "32": ImageLocation + "clock-32x32.png"
        },
        "clouddesk": {
            "16": ImageLocation + "clouddesk-16x16.png"
        },
        "contranoid": {
            "16": ImageLocation + "contranoid-16x16.png",
            "32": ImageLocation + "contranoid-32x32.png",
            "48": ImageLocation + "contranoid-48x48.png"
        },
        "contranoid-dell-7480": {
            "48": ImageLocation + "contranoid-48x48-dell-7480.png"
        },
        "convert-audio": {
            "16": ImageLocation + "convert-audio-16x16.png",
            "32": ImageLocation + "convert-audio-32x32.png"
        },
        "convert-video": {
            "16": ImageLocation + "convert-video-16x16.png",
            "32": ImageLocation + "convert-video-32x32.png"
        },
        "cookie": {
            "16": ImageLocation + "cookie-16x16.png",
            "32": ImageLocation + "cookie-32x32.png",
            "48": ImageLocation + "cookie-48x48.png"
        },
        "css-file": {
            "16": ImageLocation + "css-file-16x16.png",
            "32": ImageLocation + "css-file-32x32.png",
            "48": ImageLocation + "css-file-48x48.png"
        },
        "dario": {
            "16": ImageLocation + "dario-16x16.png",
            "32": ImageLocation + "dario-32x32.png"
        },
        "desktop": {
            "16": ImageLocation + "desktop-16x16.png",
            "32": ImageLocation + "desktop-32x32.png",
            "48": ImageLocation + "desktop-48x48.png"
        },
        "dino": {
            "16": ImageLocation + "dino-16x16.png",
            "32": ImageLocation + "dino-32x32.png",
            "48": ImageLocation + "dino-48x48.png"
        },
        "doc": {
            "16": ImageLocation + "doc-16x16.png",
            "32": ImageLocation + "doc-32x32.png"
        },
        "document": {
            "16": ImageLocation + "document-16x16.png",
            "32": ImageLocation + "document-32x32.png",
            "48": ImageLocation + "document-48x48.png"
        },
        "doom": {
            "16": ImageLocation + "doom-16x16.png",
            "32": ImageLocation + "doom-32x32.png",
            "48": ImageLocation + "doom-48x48.png"
        },
        "doom2": {
            "16": ImageLocation + "doom2-16x16.png",
            "32": ImageLocation + "doom2-32x32.png",
            "48": ImageLocation + "doom2-48x48.png"
        },
        "doomguy": {
            "16": ImageLocation + "doomguy-16x16.gif"
        },
        "drift": {
            "128": ImageLocation + "drift-128x128.png",
            "16": ImageLocation + "drift-16x16.png",
            "256": ImageLocation + "drift-256x256.png",
            "32": ImageLocation + "drift-32x32.png",
            "512": ImageLocation + "drift-512x512.png",
            "64": ImageLocation + "drift-64x64.png"
        },
        "duke": {
            "16": ImageLocation + "duke-16x16.png",
            "32": ImageLocation + "duke-32x32.png",
            "48": ImageLocation + "duke-48x48.png"
        },
        "emu": {
            "16": ImageLocation + "emu-16x16.png",
            "32": ImageLocation + "emu-32x32.png",
            "48": ImageLocation + "emu-48x48.png"
        },
        "emuos": {
            "16": ImageLocation + "emuos-16x16.png",
            "32": ImageLocation + "emuos-32x32.png",
            "48": ImageLocation + "emuos-48x48.png"
        },
        "error-8bpp": {
            "16": ImageLocation + "error-16x16-8bpp.png",
            "32": ImageLocation + "error-32x32-8bpp.png"
        },
        "error": {
            "16": ImageLocation + "error-16x16.png",
            "32": ImageLocation + "error-32x32.png",
            "48": ImageLocation + "error-48x48.png"
        },
        "error-1bpp": {
            "32": ImageLocation + "error-32x32-1bpp.png"
        },
        "explorer": {
            "16": ImageLocation + "explorer-16x16.png",
            "32": ImageLocation + "explorer-32x32.png",
            "48": ImageLocation + "explorer-48x48.png"
        },
        "favorites": {
            "16": ImageLocation + "favorites-16x16.png",
            "32": ImageLocation + "favorites-32x32.png",
            "48": ImageLocation + "favorites-48x48.png"
        },
        "favorites-folder": {
            "16": ImageLocation + "favorites-folder-16x16.png",
            "32": ImageLocation + "favorites-folder-32x32.png",
            "48": ImageLocation + "favorites-folder-48x48.png"
        },
        "fdoom": {
            "16": ImageLocation + "fdoom-16x16.png",
            "32": ImageLocation + "fdoom-32x32.png"
        },
        "file": {
            "16": ImageLocation + "file-16x16.png",
            "32": ImageLocation + "file-32x32.png",
            "48": ImageLocation + "file-48x48.png"
        },
        "find-computer": {
            "16": ImageLocation + "find-computer-16x16.png",
            "32": ImageLocation + "find-computer-32x32.png"
        },
        "find-file": {
            "16": ImageLocation + "find-file-16x16.png",
            "32": ImageLocation + "find-file-32x32.png",
            "48": ImageLocation + "find-file-48x48.png"
        },
        "find-folder": {
            "16": ImageLocation + "find-folder-16x16.png",
            "32": ImageLocation + "find-folder-32x32.png",
            "48": ImageLocation + "find-folder-48x48.png"
        },
        "folder": {
            "16": ImageLocation + "folder-16x16.png",
            "32": ImageLocation + "folder-32x32.png",
            "48": ImageLocation + "folder-48x48.png"
        },
        "folder-open": {
            "16": ImageLocation + "folder-open-16x16.png",
            "32": ImageLocation + "folder-open-32x32.png",
            "48": ImageLocation + "folder-open-48x48.png"
        },
        "font-file": {
            "16": ImageLocation + "font-file-16x16.png",
            "32": ImageLocation + "font-file-32x32.png",
            "48": ImageLocation + "font-file-48x48.png"
        },
        "fonts-folder": {
            "16": ImageLocation + "fonts-folder-16x16.png",
            "32": ImageLocation + "fonts-folder-32x32.png",
            "48": ImageLocation + "fonts-folder-48x48.png"
        },
        "fps": {
            "128": ImageLocation + "fps-128x128.png",
            "16": ImageLocation + "fps-16x16.png",
            "256": ImageLocation + "fps-256x256.png",
            "32": ImageLocation + "fps-32x32.png",
            "48": ImageLocation + "fps-48x48.png",
            "512": ImageLocation + "fps-512x512.png",
            "64": ImageLocation + "fps-64x64.png"
        },
        "freedoom": {
            "16": ImageLocation + "freedoom-16x16.png",
            "32": ImageLocation + "freedoom-32x32.png"
        },
        "friend": {
            "16": ImageLocation + "friend-16x16.png"
        },
        "funky": {
            "128": ImageLocation + "funky-128x128.png",
            "16": ImageLocation + "funky-16x16.png",
            "32": ImageLocation + "funky-32x32.png",
            "48": ImageLocation + "funky-48x48.png"
        },
        "funky-grey": {
            "32": ImageLocation + "funky-grey-32x32.png"
        },
        "game-folder": {
            "16": ImageLocation + "game-folder-16x16.png",
            "32": ImageLocation + "game-folder-32x32.png",
            "48": ImageLocation + "game-folder-48x48.png"
        },
        "gore": {
            "16": ImageLocation + "gore-16x16.png",
            "32": ImageLocation + "gore-32x32.png"
        },
        "gta": {
            "16": ImageLocation + "gta-16x16.png",
            "32": ImageLocation + "gta-32x32.png",
            "48": ImageLocation + "gta-48x48.png"
        },
        "hard-disk-drive": {
            "16": ImageLocation + "hard-disk-drive-16x16.png",
            "32": ImageLocation + "hard-disk-drive-32x32.png",
            "48": ImageLocation + "hard-disk-drive-48x48.png"
        },
        "help": {
            "16": ImageLocation + "help-16x16.png",
            "32": ImageLocation + "help-32x32.png",
            "48": ImageLocation + "help-48x48.png"
        },
        "heretic": {
            "16": ImageLocation + "heretic-16x16.png",
            "32": ImageLocation + "heretic-32x32.png"
        },
        "heretic2": {
            "16": ImageLocation + "heretic2-16x16.png",
            "32": ImageLocation + "heretic2-32x32.png"
        },
        "hex": {
            "128": ImageLocation + "hex-128x128.png",
            "16": ImageLocation + "hex-16x16.png",
            "256": ImageLocation + "hex-256x256.png",
            "32": ImageLocation + "hex-32x32.png",
            "64": ImageLocation + "hex-64x64.png"
        },
        "hexen": {
            "16": ImageLocation + "hexen-16x16.png",
            "32": ImageLocation + "hexen-32x32.png"
        },
        "hextris": {
            "16": ImageLocation + "hextris-16x16.png",
            "32": ImageLocation + "hextris-32x32.png",
            "48": ImageLocation + "hextris-48x48.png"
        },
        "html": {
            "16": ImageLocation + "html-16x16.png",
            "32": ImageLocation + "html-32x32.png",
            "48": ImageLocation + "html-48x48.png"
        },
        "ice": {
            "16": ImageLocation + "ice-16x16.png",
            "32": ImageLocation + "ice-32x32.png"
        },
        "image-file": {
            "16": ImageLocation + "image-file-16x16.png",
            "32": ImageLocation + "image-file-32x32.png",
            "48": ImageLocation + "image-file-48x48.png"
        },
        "info-8bpp": {
            "16": ImageLocation + "info-16x16-8bpp.png",
            "32": ImageLocation + "info-32x32-8bpp.png"
        },
        "info": {
            "16": ImageLocation + "info-16x16.png",
            "32": ImageLocation + "info-32x32.png"
        },
        "info-1bpp": {
            "32": ImageLocation + "info-32x32-1bpp.png"
        },
        "internet-explorer": {
            "16": ImageLocation + "internet-explorer-16x16.png",
            "32": ImageLocation + "internet-explorer-32x32.png",
            "48": ImageLocation + "internet-explorer-48x48.png"
        },
        "internet-folder": {
            "16": ImageLocation + "internet-folder-16x16.png",
            "32": ImageLocation + "internet-folder-32x32.png",
            "48": ImageLocation + "internet-folder-48x48.png"
        },
        "joystick": {
            "16": ImageLocation + "joystick-16x16.png",
            "32": ImageLocation + "joystick-32x32.png"
        },
        "js-file": {
            "16": ImageLocation + "js-file-16x16.png",
            "32": ImageLocation + "js-file-32x32.png",
            "48": ImageLocation + "js-file-48x48.png"
        },
        "kodak-imaging": {
            "16": ImageLocation + "kodak-imaging-16x16.png",
            "32": ImageLocation + "kodak-imaging-32x32.png"
        },
        "kodak-imaging-file": {
            "16": ImageLocation + "kodak-imaging-file-16x16.png",
            "32": ImageLocation + "kodak-imaging-file-32x32.png"
        },
        "logoff": {
            "16": ImageLocation + "logoff-16x16.png",
            "32": ImageLocation + "logoff-32x32.png",
            "48": ImageLocation + "logoff-48x48.png"
        },
        "mail": {
            "16": ImageLocation + "mail-16x16.png",
            "32": ImageLocation + "mail-32x32.png"
        },
        "mario": {
            "16": ImageLocation + "mario-16x16.png",
            "32": ImageLocation + "mario-32x32.png",
            "48": ImageLocation + "mario-48x48.png"
        },
        "master": {
            "16": ImageLocation + "master-16x16.png",
            "32": ImageLocation + "master-32x32.png"
        },
        "media-player": {
            "16": ImageLocation + "media-player-16x16.png",
            "32": ImageLocation + "media-player-32x32.png"
        },
        "microphone": {
            "16": ImageLocation + "microphone-16x16.png",
            "32": ImageLocation + "microphone-32x32.png"
        },
        "microphone-volume-control": {
            "32": ImageLocation + "microphone-volume-control-32x32.png"
        },
        "minecraft": {
            "16": ImageLocation + "minecraft-16x16.png",
            "32": ImageLocation + "minecraft-32x32.png",
            "48": ImageLocation + "minecraft-48x48.png"
        },
        "minesweeper": {
            "16": ImageLocation + "minesweeper-16x16.png",
            "32": ImageLocation + "minesweeper-32x32.png",
            "48": ImageLocation + "minesweeper-48x48.png"
        },
        "msdos": {
            "16": ImageLocation + "msdos-16x16.png",
            "32": ImageLocation + "msdos-32x32.png",
            "48": ImageLocation + "msdos-48x48.png"
        },
        "my-computer": {
            "16": ImageLocation + "my-computer-16x16.png",
            "32": ImageLocation + "my-computer-32x32.png",
            "48": ImageLocation + "my-computer-48x48.png"
        },
        "my-documents": {
            "16": ImageLocation + "my-documents-16x16.png",
            "32": ImageLocation + "my-documents-32x32.png",
            "48": ImageLocation + "my-documents-48x48.png"
        },
        "my-documents-folder": {
            "16": ImageLocation + "my-documents-folder-16x16.png",
            "32": ImageLocation + "my-documents-folder-32x32.png",
            "48": ImageLocation + "my-documents-folder-48x48.png"
        },
        "network": {
            "16": ImageLocation + "network-16x16.png",
            "32": ImageLocation + "network-32x32.png",
            "48": ImageLocation + "network-48x48.png"
        },
        "news": {
            "16": ImageLocation + "news-16x16.png",
            "32": ImageLocation + "news-32x32.png"
        },
        "nogame": {
            "16": ImageLocation + "nogame-16x16.png",
            "32": ImageLocation + "nogame-32x32.png"
        },
        "notepad": {
            "16": ImageLocation + "notepad-16x16.png",
            "32": ImageLocation + "notepad-32x32.png",
            "48": ImageLocation + "notepad-48x48.png"
        },
        "notepad-file": {
            "16": ImageLocation + "notepad-file-16x16.png",
            "32": ImageLocation + "notepad-file-32x32.png",
            "48": ImageLocation + "notepad-file-48x48.png"
        },
        "nuke": {
            "16": ImageLocation + "nuke-16x16.png",
            "32": ImageLocation + "nuke-32x32.png"
        },
        "offline-8bpp": {
            "32": ImageLocation + "offline-32x32-8bpp.png"
        },
        "offline": {
            "32": ImageLocation + "offline-32x32.png"
        },
        "os-js": {
            "16": ImageLocation + "os-js-16x16.png",
            "32": ImageLocation + "os-js-32x32.png",
            "48": ImageLocation + "os-js-48x48.png"
        },
        "outlook-express": {
            "16": ImageLocation + "outlook-express-16x16.png",
            "32": ImageLocation + "outlook-express-32x32.png",
            "48": ImageLocation + "outlook-express-48x48.png"
        },
        "pacman": {
            "16": ImageLocation + "pacman-16x16.png",
            "32": ImageLocation + "pacman-32x32.png"
        },
        "paint": {
            "16": ImageLocation + "paint-16x16.png",
            "32": ImageLocation + "paint-32x32.png",
            "48": ImageLocation + "paint-48x48.png"
        },
        "paint-file": {
            "16": ImageLocation + "paint-file-16x16.png",
            "32": ImageLocation + "paint-file-32x32.png",
            "48": ImageLocation + "paint-file-48x48.png"
        },
        "pinball": {
            "16": ImageLocation + "pinball-16x16.png",
            "32": ImageLocation + "pinball-32x32.png",
            "48": ImageLocation + "pinball-48x48.png"
        },
        "pipes": {
            "16": ImageLocation + "pipes-16x16.png",
            "32": ImageLocation + "pipes-32x32.png",
            "48": ImageLocation + "pipes-48x48.png"
        },
        "plutonia": {
            "16": ImageLocation + "plutonia-16x16.png",
            "32": ImageLocation + "plutonia-32x32.png"
        },
        "plutonia2": {
            "16": ImageLocation + "plutonia2-16x16.png",
            "32": ImageLocation + "plutonia2-32x32.png"
        },
        "pong": {
            "16": ImageLocation + "pong-16x16.png",
            "32": ImageLocation + "pong-32x32.png"
        },
        "printer": {
            "16": ImageLocation + "printer-16x16.png",
            "32": ImageLocation + "printer-32x32.png",
            "48": ImageLocation + "printer-48x48.png"
        },
        "printers-folder": {
            "16": ImageLocation + "printers-folder-16x16.png",
            "32": ImageLocation + "printers-folder-32x32.png",
            "48": ImageLocation + "printers-folder-48x48.png"
        },
        "programs-folder": {
            "16": ImageLocation + "programs-folder-16x16.png",
            "32": ImageLocation + "programs-folder-32x32.png",
            "48": ImageLocation + "programs-folder-48x48.png"
        },
        "python": {
            "16": ImageLocation + "python-16x16.png",
            "32": ImageLocation + "python-32x32.png",
            "48": ImageLocation + "python-48x48.png"
        },
        "q1m": {
            "128": ImageLocation + "q1m-128x128.png",
            "16": ImageLocation + "q1m-16x16.png",
            "256": ImageLocation + "q1m-256x256.png",
            "32": ImageLocation + "q1m-32x32.png",
            "512": ImageLocation + "q1m-512x512.png",
            "64": ImageLocation + "q1m-64x64.png"
        },
        "quake": {
            "16": ImageLocation + "quake-16x16.png",
            "32": ImageLocation + "quake-32x32.png",
            "48": ImageLocation + "quake-48x48.png"
        },
        "quake2": {
            "16": ImageLocation + "quake2-16x16.png",
            "32": ImageLocation + "quake2-32x32.png",
            "48": ImageLocation + "quake2-48x48.png"
        },
        "quento": {
            "16": ImageLocation + "quento-16x16.png",
            "32": ImageLocation + "quento-32x32.png",
            "48": ImageLocation + "quento-48x48.png"
        },
        "question-1bpp": {
            "32": ImageLocation + "question-32x32-1bpp.png"
        },
        "question-8bpp": {
            "32": ImageLocation + "question-32x32-8bpp.png"
        },
        "recycle-bin": {
            "16": ImageLocation + "recycle-bin-16x16.png",
            "32": ImageLocation + "recycle-bin-32x32.png",
            "48": ImageLocation + "recycle-bin-48x48.png"
        },
        "recycle-bin-full": {
            "16": ImageLocation + "recycle-bin-full-16x16.png",
            "32": ImageLocation + "recycle-bin-full-32x32.png",
            "48": ImageLocation + "recycle-bin-full-48x48.png"
        },
        "recycle-bin-stuff": {
            "32": ImageLocation + "recycle-bin-stuff-32x32.png"
        },
        "rekkr": {
            "16": ImageLocation + "rekkr-16x16.png",
            "32": ImageLocation + "rekkr-32x32.png"
        },
        "rioluvania": {
            "128": ImageLocation + "rioluvania-128x128.png",
            "16": ImageLocation + "rioluvania-16x16.png",
            "256": ImageLocation + "rioluvania-256x256.png",
            "32": ImageLocation + "rioluvania-32x32.png"
        },
        "rocket": {
            "16": ImageLocation + "rocket-16x16.png",
            "32": ImageLocation + "rocket-32x32.png",
            "48": ImageLocation + "rocket-48x48.png"
        },
        "run": {
            "16": ImageLocation + "run-16x16.png",
            "32": ImageLocation + "run-32x32.png",
            "48": ImageLocation + "run-48x48.png"
        },
        "sans": {
            "16": ImageLocation + "sans-16x16.png",
            "32": ImageLocation + "sans-32x32.png"
        },
        "school": {
            "16": ImageLocation + "school-16x16.png",
            "32": ImageLocation + "school-32x32.png",
            "48": ImageLocation + "school-48x48.png"
        },
        "settings": {
            "16": ImageLocation + "settings-16x16.png",
            "32": ImageLocation + "settings-32x32.png",
            "48": ImageLocation + "settings-48x48.png"
        },
        "shortcut": {
            "16": ImageLocation + "shortcut-16x16.png",
            "32": ImageLocation + "shortcut-32x32.png"
        },
        "shutdown": {
            "16": ImageLocation + "shutdown-16x16.png",
            "32": ImageLocation + "shutdown-32x32.png",
            "48": ImageLocation + "shutdown-48x48.png"
        },
        "sleep": {
            "16": ImageLocation + "sleep-16x16.png",
            "32": ImageLocation + "sleep-32x32.png",
            "48": ImageLocation + "sleep-48x48.png"
        },
        "solitaire": {
            "16": ImageLocation + "solitaire-16x16.png",
            "32": ImageLocation + "solitaire-32x32.png",
            "48": ImageLocation + "solitaire-48x48.png"
        },
        "sound": {
            "16": ImageLocation + "sound-16x16.png",
            "32": ImageLocation + "sound-32x32.png",
            "48": ImageLocation + "sound-48x48.png"
        },
        "space": {
            "16": ImageLocation + "space-16x16.png",
            "32": ImageLocation + "space-32x32.png"
        },
        "speaker": {
            "16": ImageLocation + "speaker-16x16.png",
            "32": ImageLocation + "speaker-32x32.png",
            "48": ImageLocation + "speaker-48x48.png"
        },
        "speaker-volume-control": {
            "32": ImageLocation + "speaker-volume-control-32x32.png"
        },
        "spear": {
            "16": ImageLocation + "spear-16x16.png",
            "32": ImageLocation + "spear-32x32.png"
        },
        "spelunky": {
            "16": ImageLocation + "spelunky-16x16.png",
            "32": ImageLocation + "spelunky-32x32.png"
        },
        "stardoom": {
            "16": ImageLocation + "stardoom-16x16.png",
            "32": ImageLocation + "stardoom-32x32.png",
            "48": ImageLocation + "stardoom-48x48.png",
            "512": ImageLocation + "stardoom-512x512.png"
        },
        "start-menu-programs": {
            "32": ImageLocation + "start-menu-programs-32x32.png"
        },
        "start-settings": {
            "16": ImageLocation + "start-settings-16x16.png",
            "32": ImageLocation + "start-settings-32x32.png"
        },
        "starwars": {
            "16": ImageLocation + "starwars-16x16.png",
            "32": ImageLocation + "starwars-32x32.png"
        },
        "store": {
            "128": ImageLocation + "store-128x128.png",
            "16": ImageLocation + "store-16x16.png",
            "256": ImageLocation + "store-256x256.png",
            "32": ImageLocation + "store-32x32.png",
            "48": ImageLocation + "store-48x48.png",
            "512": ImageLocation + "store-512x512.png",
            "64": ImageLocation + "store-64x64.png"
        },
        "strife": {
            "16": ImageLocation + "strife-16x16.png",
            "32": ImageLocation + "strife-32x32.png"
        },
        "surf": {
            "16": ImageLocation + "surf-16x16.png",
            "32": ImageLocation + "surf-32x32.png"
        },
        "system": {
            "16": ImageLocation + "system-16x16.png"
        },
        "task": {
            "16": ImageLocation + "task-16x16.png",
            "32": ImageLocation + "task-32x32.png"
        },
        "task-scheduler": {
            "16": ImageLocation + "task-scheduler-16x16.png"
        },
        "tboi": {
            "16": ImageLocation + "tboi-16x16.png",
            "32": ImageLocation + "tboi-32x32.png",
            "48": ImageLocation + "tboi-48x48.png"
        },
        "tetris": {
            "16": ImageLocation + "tetris-16x16.png",
            "32": ImageLocation + "tetris-32x32.png"
        },
        "themes": {
            "16": ImageLocation + "themes-16x16.png",
            "32": ImageLocation + "themes-32x32.png",
            "48": ImageLocation + "themes-48x48.png"
        },
        "tools-folder": {
            "16": ImageLocation + "tools-folder-16x16.png",
            "32": ImageLocation + "tools-folder-32x32.png",
            "48": ImageLocation + "tools-folder-48x48.png"
        },
        "trail": {
            "16": ImageLocation + "trail-16x16.png",
            "32": ImageLocation + "trail-32x32.png",
            "48": ImageLocation + "trail-48x48.png"
        },
        "turbo": {
            "16": ImageLocation + "turbo-16x16.png"
        },
        "ud2": {
            "16": ImageLocation + "ud2-16x16.png",
            "32": ImageLocation + "ud2-32x32.png"
        },
        "unknown-printer": {
            "16": ImageLocation + "unknown-printer-16x16.png",
            "32": ImageLocation + "unknown-printer-32x32.png",
            "48": ImageLocation + "unknown-printer-48x48.png"
        },
        "update": {
            "32": ImageLocation + "update-32x32.png"
        },
        "url": {
            "16": ImageLocation + "url-16x16.png",
            "32": ImageLocation + "url-32x32.png",
            "48": ImageLocation + "url-48x48.png"
        },
        "video": {
            "16": ImageLocation + "video-16x16.png",
            "32": ImageLocation + "video-32x32.png"
        },
        "virtualdesktop.org": {
            "16": ImageLocation + "virtualdesktop.org-16x16.png"
        },
        "vlc": {
            "16": ImageLocation + "vlc-16x16.png",
            "32": ImageLocation + "vlc-32x32.png",
            "48": ImageLocation + "vlc-48x48.png"
        },
        "vue-win3.1": {
            "16": ImageLocation + "vue-win3.1-16x16.png",
            "32": ImageLocation + "vue-win3.1-32x32.png"
        },
        "wadcmd": {
            "128": ImageLocation + "wadcmd-128x128.png",
            "16": ImageLocation + "wadcmd-16x16.png",
            "256": ImageLocation + "wadcmd-256x256.png",
            "32": ImageLocation + "wadcmd-32x32.png",
            "48": ImageLocation + "wadcmd-48x48.png",
            "512": ImageLocation + "wadcmd-512x512.png",
            "64": ImageLocation + "wadcmd-64x64.png"
        },
        "warning-8bpp": {
            "16": ImageLocation + "warning-16x16-8bpp.png",
            "32": ImageLocation + "warning-32x32-8bpp.png"
        },
        "warning": {
            "16": ImageLocation + "warning-16x16.png",
            "32": ImageLocation + "warning-32x32.png"
        },
        "warning-1bpp": {
            "32": ImageLocation + "warning-32x32-1bpp.png"
        },
        "webdesktop": {
            "16": ImageLocation + "webdesktop-16x16.png"
        },
        "winamp2": {
            "16": ImageLocation + "winamp2-16x16.png",
            "32": ImageLocation + "winamp2-32x32.png",
            "48": ImageLocation + "winamp2-48x48.png"
        },
        "windows-1bpp": {
            "16": ImageLocation + "windows-16x16-1bpp.png"
        },
        "windows-8bpp": {
            "32": ImageLocation + "windows-32x32-8bpp.png"
        },
        "windows-93": {
            "16": ImageLocation + "windows-93-16x16.png",
            "32": ImageLocation + "windows-93-32x32.png",
            "48": ImageLocation + "windows-93-48x48.png"
        },
        "windows-update": {
            "16": ImageLocation + "windows-update-16x16.png",
            "32": ImageLocation + "windows-update-32x32.png",
            "48": ImageLocation + "windows-update-48x48.png"
        },
        "winxp-doge": {
            "16": ImageLocation + "winxp-doge-16x16.png"
        },
        "wolf": {
            "16": ImageLocation + "wolf-16x16.png",
            "32": ImageLocation + "wolf-32x32.png",
            "48": ImageLocation + "wolf-48x48.png"
        },
        "youtube": {
            "16": ImageLocation + "youtube-16x16.png",
            "32": ImageLocation + "youtube-32x32.png"
        },
        "zamboni": {
            "16": ImageLocation + "zamboni-16x16.png",
            "32": ImageLocation + "zamboni-32x32.png",
            "48": ImageLocation + "zamboni-48x48.png"
        },
        "zero": {
            "16": ImageLocation + "zero-16x16.png",
            "32": ImageLocation + "zero-32x32.png",
            "48": ImageLocation + "zero-48x48.png"
        },
        "zone-internet": {
            "16": ImageLocation + "zone-internet-16x16.png",
            "32": ImageLocation + "zone-internet-32x32.png"
        }
    };

    if (iconPaths[iconID] && iconPaths[iconID][size]) {
        return iconPaths[iconID][size];
    } else {
        console.error(iconID + " " + size + " not found.");
    }
}
//# sourceURL=MagnusWare