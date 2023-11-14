function iconsAtTwoSizes(iconID, size) {
    iconID = iconID.toLowerCase();

    const iconSizes = [16, 32, 48, 64, 128, 256, 512];

    if (!iconSizes.includes(size)) {
        console.error("Invalid size. Using the default (16x16).");
        size = 16;
    }

    const iconPaths = {
        "0hh1": {
            "16": "./A/System64/Images/Icons/0hh1-16x16.png",
            "32": "./A/System64/Images/Icons/0hh1-32x32.png",
            "48": "./A/System64/Images/Icons/0hh1-48x48.png"
        },
        "0hn0": {
            "16": "./A/System64/Images/Icons/0hn0-16x16.png",
            "32": "./A/System64/Images/Icons/0hn0-32x32.png",
            "48": "./A/System64/Images/Icons/0hn0-48x48.png"
        },
        "2048": {
            "16": "./A/System64/Images/Icons/2048-16x16.png",
            "256": "./A/System64/Images/Icons/2048-256x256.png",
            "32": "./A/System64/Images/Icons/2048-32x32.png",
            "48": "./A/System64/Images/Icons/2048-48x48.png"
        },
        "2d": {
            "16": "./A/System64/Images/Icons/2d-16x16.png",
            "32": "./A/System64/Images/Icons/2d-32x32.png"
        },
        "3d-mode": {
            "32": "./A/System64/Images/Icons/3d-mode-32x32.png"
        },
        "4": {
            "16": "./A/System64/Images/Icons/4-16x16.png",
            "32": "./A/System64/Images/Icons/4-32x32.png",
            "512": "./A/System64/Images/Icons/4-512x512.png"
        },
        "64": {
            "16": "./A/System64/Images/Icons/64-16x16.png",
            "32": "./A/System64/Images/Icons/64-32x32.png",
            "48": "./A/System64/Images/Icons/64-48x48.png"
        },
        "aaronos": {
            "16": "./A/System64/Images/Icons/aaronos-16x16.png",
            "32": "./A/System64/Images/Icons/aaronos-32x32.png",
            "48": "./A/System64/Images/Icons/aaronos-48x48.png"
        },
        "about": {
            "16": "./A/System64/Images/Icons/about-16x16.png",
            "32": "./A/System64/Images/Icons/about-32x32.png",
            "48": "./A/System64/Images/Icons/about-48x48.png"
        },
        "acidbox": {
            "16": "./A/System64/Images/Icons/acidbox-16x16.png",
            "32": "./A/System64/Images/Icons/acidbox-32x32.png",
            "48": "./A/System64/Images/Icons/acidbox-48x48.png",
            "512": "./A/System64/Images/Icons/acidbox-512x512.png"
        },
        "arcade": {
            "16": "./A/System64/Images/Icons/arcade-16x16.png",
            "32": "./A/System64/Images/Icons/arcade-32x32.png",
            "48": "./A/System64/Images/Icons/arcade-48x48.png"
        },
        "archive": {
            "16": "./A/System64/Images/Icons/archive-16x16.png",
            "32": "./A/System64/Images/Icons/archive-32x32.png",
            "48": "./A/System64/Images/Icons/archive-48x48.png"
        },
        "audio-nope": {
            "16": "./A/System64/Images/Icons/audio-nope-16x16.png"
        },
        "audio-okay": {
            "16": "./A/System64/Images/Icons/audio-okay-16x16.png"
        },
        "baldi": {
            "16": "./A/System64/Images/Icons/baldi-16x16.png",
            "32": "./A/System64/Images/Icons/baldi-32x32.png",
            "48": "./A/System64/Images/Icons/baldi-48x48.png",
            "64": "./A/System64/Images/Icons/baldi-64x64.png"
        },
        "batman": {
            "16": "./A/System64/Images/Icons/batman-16x16.png",
            "32": "./A/System64/Images/Icons/batman-32x32.png",
            "48": "./A/System64/Images/Icons/batman-48x48.png",
            "512": "./A/System64/Images/Icons/batman-512x512.png"
        },
        "battery": {
            "16": "./A/System64/Images/Icons/battery-16x16.png",
            "32": "./A/System64/Images/Icons/battery-32x32.png",
            "512": "./A/System64/Images/Icons/battery-512x512.png"
        },
        "battery-err": {
            "16": "./A/System64/Images/Icons/battery-err-16x16.png"
        },
        "box": {
            "128": "./A/System64/Images/Icons/box-128x128.png",
            "16": "./A/System64/Images/Icons/box-16x16.png",
            "32": "./A/System64/Images/Icons/box-32x32.png"
        },
        "brain": {
            "16": "./A/System64/Images/Icons/brain-16x16.png",
            "32": "./A/System64/Images/Icons/brain-32x32.png"
        },
        "brutal": {
            "16": "./A/System64/Images/Icons/brutal-16x16.png",
            "32": "./A/System64/Images/Icons/brutal-32x32.png"
        },
        "btsx": {
            "16": "./A/System64/Images/Icons/btsx-16x16.png",
            "32": "./A/System64/Images/Icons/btsx-32x32.png"
        },
        "button": {
            "16": "./A/System64/Images/Icons/button-16x16.png",
            "32": "./A/System64/Images/Icons/button-32x32.png"
        },
        "calculator": {
            "16": "./A/System64/Images/Icons/calculator-16x16.png",
            "32": "./A/System64/Images/Icons/calculator-32x32.png",
            "48": "./A/System64/Images/Icons/calculator-48x48.png"
        },
        "castle": {
            "16": "./A/System64/Images/Icons/castle-16x16.png",
            "32": "./A/System64/Images/Icons/castle-32x32.png"
        },
        "chat": {
            "16": "./A/System64/Images/Icons/chat-16x16.png",
            "32": "./A/System64/Images/Icons/chat-32x32.png",
            "48": "./A/System64/Images/Icons/chat-48x48.png"
        },
        "chex": {
            "16": "./A/System64/Images/Icons/chex-16x16.png",
            "32": "./A/System64/Images/Icons/chex-32x32.png"
        },
        "chex2": {
            "16": "./A/System64/Images/Icons/chex2-16x16.png",
            "32": "./A/System64/Images/Icons/chex2-32x32.png"
        },
        "chex3": {
            "16": "./A/System64/Images/Icons/chex3-16x16.png",
            "32": "./A/System64/Images/Icons/chex3-32x32.png"
        },
        "chm": {
            "16": "./A/System64/Images/Icons/chm-16x16.png",
            "32": "./A/System64/Images/Icons/chm-32x32.png",
            "48": "./A/System64/Images/Icons/chm-48x48.png"
        },
        "clock": {
            "16": "./A/System64/Images/Icons/clock-16x16.png",
            "32": "./A/System64/Images/Icons/clock-32x32.png"
        },
        "clouddesk": {
            "16": "./A/System64/Images/Icons/clouddesk-16x16.png"
        },
        "contranoid": {
            "16": "./A/System64/Images/Icons/contranoid-16x16.png",
            "32": "./A/System64/Images/Icons/contranoid-32x32.png",
            "48": "./A/System64/Images/Icons/contranoid-48x48.png"
        },
        "contranoid-dell-7480": {
            "48": "./A/System64/Images/Icons/contranoid-48x48-dell-7480.png"
        },
        "convert-audio": {
            "16": "./A/System64/Images/Icons/convert-audio-16x16.png",
            "32": "./A/System64/Images/Icons/convert-audio-32x32.png"
        },
        "convert-video": {
            "16": "./A/System64/Images/Icons/convert-video-16x16.png",
            "32": "./A/System64/Images/Icons/convert-video-32x32.png"
        },
        "cookie": {
            "16": "./A/System64/Images/Icons/cookie-16x16.png",
            "32": "./A/System64/Images/Icons/cookie-32x32.png",
            "48": "./A/System64/Images/Icons/cookie-48x48.png"
        },
        "css-file": {
            "16": "./A/System64/Images/Icons/css-file-16x16.png",
            "32": "./A/System64/Images/Icons/css-file-32x32.png",
            "48": "./A/System64/Images/Icons/css-file-48x48.png"
        },
        "dario": {
            "16": "./A/System64/Images/Icons/dario-16x16.png",
            "32": "./A/System64/Images/Icons/dario-32x32.png"
        },
        "desktop": {
            "16": "./A/System64/Images/Icons/desktop-16x16.png",
            "32": "./A/System64/Images/Icons/desktop-32x32.png",
            "48": "./A/System64/Images/Icons/desktop-48x48.png"
        },
        "dino": {
            "16": "./A/System64/Images/Icons/dino-16x16.png",
            "32": "./A/System64/Images/Icons/dino-32x32.png",
            "48": "./A/System64/Images/Icons/dino-48x48.png"
        },
        "doc": {
            "16": "./A/System64/Images/Icons/doc-16x16.png",
            "32": "./A/System64/Images/Icons/doc-32x32.png"
        },
        "document": {
            "16": "./A/System64/Images/Icons/document-16x16.png",
            "32": "./A/System64/Images/Icons/document-32x32.png",
            "48": "./A/System64/Images/Icons/document-48x48.png"
        },
        "doom": {
            "16": "./A/System64/Images/Icons/doom-16x16.png",
            "32": "./A/System64/Images/Icons/doom-32x32.png",
            "48": "./A/System64/Images/Icons/doom-48x48.png"
        },
        "doom2": {
            "16": "./A/System64/Images/Icons/doom2-16x16.png",
            "32": "./A/System64/Images/Icons/doom2-32x32.png",
            "48": "./A/System64/Images/Icons/doom2-48x48.png"
        },
        "doomguy": {
            "16": "./A/System64/Images/Icons/doomguy-16x16.gif"
        },
        "drift": {
            "128": "./A/System64/Images/Icons/drift-128x128.png",
            "16": "./A/System64/Images/Icons/drift-16x16.png",
            "256": "./A/System64/Images/Icons/drift-256x256.png",
            "32": "./A/System64/Images/Icons/drift-32x32.png",
            "512": "./A/System64/Images/Icons/drift-512x512.png",
            "64": "./A/System64/Images/Icons/drift-64x64.png"
        },
        "duke": {
            "16": "./A/System64/Images/Icons/duke-16x16.png",
            "32": "./A/System64/Images/Icons/duke-32x32.png",
            "48": "./A/System64/Images/Icons/duke-48x48.png"
        },
        "emu": {
            "16": "./A/System64/Images/Icons/emu-16x16.png",
            "32": "./A/System64/Images/Icons/emu-32x32.png",
            "48": "./A/System64/Images/Icons/emu-48x48.png"
        },
        "emuos": {
            "16": "./A/System64/Images/Icons/emuos-16x16.png",
            "32": "./A/System64/Images/Icons/emuos-32x32.png",
            "48": "./A/System64/Images/Icons/emuos-48x48.png"
        },
        "error-8bpp": {
            "16": "./A/System64/Images/Icons/error-16x16-8bpp.png",
            "32": "./A/System64/Images/Icons/error-32x32-8bpp.png"
        },
        "error": {
            "16": "./A/System64/Images/Icons/error-16x16.png",
            "32": "./A/System64/Images/Icons/error-32x32.png",
            "48": "./A/System64/Images/Icons/error-48x48.png"
        },
        "error-1bpp": {
            "32": "./A/System64/Images/Icons/error-32x32-1bpp.png"
        },
        "explorer": {
            "16": "./A/System64/Images/Icons/explorer-16x16.png",
            "32": "./A/System64/Images/Icons/explorer-32x32.png",
            "48": "./A/System64/Images/Icons/explorer-48x48.png"
        },
        "favorites": {
            "16": "./A/System64/Images/Icons/favorites-16x16.png",
            "32": "./A/System64/Images/Icons/favorites-32x32.png",
            "48": "./A/System64/Images/Icons/favorites-48x48.png"
        },
        "favorites-folder": {
            "16": "./A/System64/Images/Icons/favorites-folder-16x16.png",
            "32": "./A/System64/Images/Icons/favorites-folder-32x32.png",
            "48": "./A/System64/Images/Icons/favorites-folder-48x48.png"
        },
        "fdoom": {
            "16": "./A/System64/Images/Icons/fdoom-16x16.png",
            "32": "./A/System64/Images/Icons/fdoom-32x32.png"
        },
        "file": {
            "16": "./A/System64/Images/Icons/file-16x16.png",
            "32": "./A/System64/Images/Icons/file-32x32.png",
            "48": "./A/System64/Images/Icons/file-48x48.png"
        },
        "find-computer": {
            "16": "./A/System64/Images/Icons/find-computer-16x16.png",
            "32": "./A/System64/Images/Icons/find-computer-32x32.png"
        },
        "find-file": {
            "16": "./A/System64/Images/Icons/find-file-16x16.png",
            "32": "./A/System64/Images/Icons/find-file-32x32.png",
            "48": "./A/System64/Images/Icons/find-file-48x48.png"
        },
        "find-folder": {
            "16": "./A/System64/Images/Icons/find-folder-16x16.png",
            "32": "./A/System64/Images/Icons/find-folder-32x32.png",
            "48": "./A/System64/Images/Icons/find-folder-48x48.png"
        },
        "folder": {
            "16": "./A/System64/Images/Icons/folder-16x16.png",
            "32": "./A/System64/Images/Icons/folder-32x32.png",
            "48": "./A/System64/Images/Icons/folder-48x48.png"
        },
        "folder-open": {
            "16": "./A/System64/Images/Icons/folder-open-16x16.png",
            "32": "./A/System64/Images/Icons/folder-open-32x32.png",
            "48": "./A/System64/Images/Icons/folder-open-48x48.png"
        },
        "font-file": {
            "16": "./A/System64/Images/Icons/font-file-16x16.png",
            "32": "./A/System64/Images/Icons/font-file-32x32.png",
            "48": "./A/System64/Images/Icons/font-file-48x48.png"
        },
        "fonts-folder": {
            "16": "./A/System64/Images/Icons/fonts-folder-16x16.png",
            "32": "./A/System64/Images/Icons/fonts-folder-32x32.png",
            "48": "./A/System64/Images/Icons/fonts-folder-48x48.png"
        },
        "fps": {
            "128": "./A/System64/Images/Icons/fps-128x128.png",
            "16": "./A/System64/Images/Icons/fps-16x16.png",
            "256": "./A/System64/Images/Icons/fps-256x256.png",
            "32": "./A/System64/Images/Icons/fps-32x32.png",
            "48": "./A/System64/Images/Icons/fps-48x48.png",
            "512": "./A/System64/Images/Icons/fps-512x512.png",
            "64": "./A/System64/Images/Icons/fps-64x64.png"
        },
        "freedoom": {
            "16": "./A/System64/Images/Icons/freedoom-16x16.png",
            "32": "./A/System64/Images/Icons/freedoom-32x32.png"
        },
        "friend": {
            "16": "./A/System64/Images/Icons/friend-16x16.png"
        },
        "funky": {
            "128": "./A/System64/Images/Icons/funky-128x128.png",
            "16": "./A/System64/Images/Icons/funky-16x16.png",
            "32": "./A/System64/Images/Icons/funky-32x32.png",
            "48": "./A/System64/Images/Icons/funky-48x48.png"
        },
        "funky-grey": {
            "32": "./A/System64/Images/Icons/funky-grey-32x32.png"
        },
        "game-folder": {
            "16": "./A/System64/Images/Icons/game-folder-16x16.png",
            "32": "./A/System64/Images/Icons/game-folder-32x32.png",
            "48": "./A/System64/Images/Icons/game-folder-48x48.png"
        },
        "gore": {
            "16": "./A/System64/Images/Icons/gore-16x16.png",
            "32": "./A/System64/Images/Icons/gore-32x32.png"
        },
        "gta": {
            "16": "./A/System64/Images/Icons/gta-16x16.png",
            "32": "./A/System64/Images/Icons/gta-32x32.png",
            "48": "./A/System64/Images/Icons/gta-48x48.png"
        },
        "hard-disk-drive": {
            "16": "./A/System64/Images/Icons/hard-disk-drive-16x16.png",
            "32": "./A/System64/Images/Icons/hard-disk-drive-32x32.png",
            "48": "./A/System64/Images/Icons/hard-disk-drive-48x48.png"
        },
        "help": {
            "16": "./A/System64/Images/Icons/help-16x16.png",
            "32": "./A/System64/Images/Icons/help-32x32.png",
            "48": "./A/System64/Images/Icons/help-48x48.png"
        },
        "heretic": {
            "16": "./A/System64/Images/Icons/heretic-16x16.png",
            "32": "./A/System64/Images/Icons/heretic-32x32.png"
        },
        "heretic2": {
            "16": "./A/System64/Images/Icons/heretic2-16x16.png",
            "32": "./A/System64/Images/Icons/heretic2-32x32.png"
        },
        "hex": {
            "128": "./A/System64/Images/Icons/hex-128x128.png",
            "16": "./A/System64/Images/Icons/hex-16x16.png",
            "256": "./A/System64/Images/Icons/hex-256x256.png",
            "32": "./A/System64/Images/Icons/hex-32x32.png",
            "64": "./A/System64/Images/Icons/hex-64x64.png"
        },
        "hexen": {
            "16": "./A/System64/Images/Icons/hexen-16x16.png",
            "32": "./A/System64/Images/Icons/hexen-32x32.png"
        },
        "hextris": {
            "16": "./A/System64/Images/Icons/hextris-16x16.png",
            "32": "./A/System64/Images/Icons/hextris-32x32.png",
            "48": "./A/System64/Images/Icons/hextris-48x48.png"
        },
        "html": {
            "16": "./A/System64/Images/Icons/html-16x16.png",
            "32": "./A/System64/Images/Icons/html-32x32.png",
            "48": "./A/System64/Images/Icons/html-48x48.png"
        },
        "ice": {
            "16": "./A/System64/Images/Icons/ice-16x16.png",
            "32": "./A/System64/Images/Icons/ice-32x32.png"
        },
        "image-file": {
            "16": "./A/System64/Images/Icons/image-file-16x16.png",
            "32": "./A/System64/Images/Icons/image-file-32x32.png",
            "48": "./A/System64/Images/Icons/image-file-48x48.png"
        },
        "info-8bpp": {
            "16": "./A/System64/Images/Icons/info-16x16-8bpp.png",
            "32": "./A/System64/Images/Icons/info-32x32-8bpp.png"
        },
        "info": {
            "16": "./A/System64/Images/Icons/info-16x16.png",
            "32": "./A/System64/Images/Icons/info-32x32.png"
        },
        "info-1bpp": {
            "32": "./A/System64/Images/Icons/info-32x32-1bpp.png"
        },
        "internet-explorer": {
            "16": "./A/System64/Images/Icons/internet-explorer-16x16.png",
            "32": "./A/System64/Images/Icons/internet-explorer-32x32.png",
            "48": "./A/System64/Images/Icons/internet-explorer-48x48.png"
        },
        "internet-folder": {
            "16": "./A/System64/Images/Icons/internet-folder-16x16.png",
            "32": "./A/System64/Images/Icons/internet-folder-32x32.png",
            "48": "./A/System64/Images/Icons/internet-folder-48x48.png"
        },
        "joystick": {
            "16": "./A/System64/Images/Icons/joystick-16x16.png",
            "32": "./A/System64/Images/Icons/joystick-32x32.png"
        },
        "js-file": {
            "16": "./A/System64/Images/Icons/js-file-16x16.png",
            "32": "./A/System64/Images/Icons/js-file-32x32.png",
            "48": "./A/System64/Images/Icons/js-file-48x48.png"
        },
        "kodak-imaging": {
            "16": "./A/System64/Images/Icons/kodak-imaging-16x16.png",
            "32": "./A/System64/Images/Icons/kodak-imaging-32x32.png"
        },
        "kodak-imaging-file": {
            "16": "./A/System64/Images/Icons/kodak-imaging-file-16x16.png",
            "32": "./A/System64/Images/Icons/kodak-imaging-file-32x32.png"
        },
        "logoff": {
            "16": "./A/System64/Images/Icons/logoff-16x16.png",
            "32": "./A/System64/Images/Icons/logoff-32x32.png",
            "48": "./A/System64/Images/Icons/logoff-48x48.png"
        },
        "mail": {
            "16": "./A/System64/Images/Icons/mail-16x16.png",
            "32": "./A/System64/Images/Icons/mail-32x32.png"
        },
        "mario": {
            "16": "./A/System64/Images/Icons/mario-16x16.png",
            "32": "./A/System64/Images/Icons/mario-32x32.png",
            "48": "./A/System64/Images/Icons/mario-48x48.png"
        },
        "master": {
            "16": "./A/System64/Images/Icons/master-16x16.png",
            "32": "./A/System64/Images/Icons/master-32x32.png"
        },
        "media-player": {
            "16": "./A/System64/Images/Icons/media-player-16x16.png",
            "32": "./A/System64/Images/Icons/media-player-32x32.png"
        },
        "microphone": {
            "16": "./A/System64/Images/Icons/microphone-16x16.png",
            "32": "./A/System64/Images/Icons/microphone-32x32.png"
        },
        "microphone-volume-control": {
            "32": "./A/System64/Images/Icons/microphone-volume-control-32x32.png"
        },
        "minecraft": {
            "16": "./A/System64/Images/Icons/minecraft-16x16.png",
            "32": "./A/System64/Images/Icons/minecraft-32x32.png",
            "48": "./A/System64/Images/Icons/minecraft-48x48.png"
        },
        "minesweeper": {
            "16": "./A/System64/Images/Icons/minesweeper-16x16.png",
            "32": "./A/System64/Images/Icons/minesweeper-32x32.png",
            "48": "./A/System64/Images/Icons/minesweeper-48x48.png"
        },
        "msdos": {
            "16": "./A/System64/Images/Icons/msdos-16x16.png",
            "32": "./A/System64/Images/Icons/msdos-32x32.png",
            "48": "./A/System64/Images/Icons/msdos-48x48.png"
        },
        "my-computer": {
            "16": "./A/System64/Images/Icons/my-computer-16x16.png",
            "32": "./A/System64/Images/Icons/my-computer-32x32.png",
            "48": "./A/System64/Images/Icons/my-computer-48x48.png"
        },
        "my-documents": {
            "16": "./A/System64/Images/Icons/my-documents-16x16.png",
            "32": "./A/System64/Images/Icons/my-documents-32x32.png",
            "48": "./A/System64/Images/Icons/my-documents-48x48.png"
        },
        "my-documents-folder": {
            "16": "./A/System64/Images/Icons/my-documents-folder-16x16.png",
            "32": "./A/System64/Images/Icons/my-documents-folder-32x32.png",
            "48": "./A/System64/Images/Icons/my-documents-folder-48x48.png"
        },
        "network": {
            "16": "./A/System64/Images/Icons/network-16x16.png",
            "32": "./A/System64/Images/Icons/network-32x32.png",
            "48": "./A/System64/Images/Icons/network-48x48.png"
        },
        "news": {
            "16": "./A/System64/Images/Icons/news-16x16.png",
            "32": "./A/System64/Images/Icons/news-32x32.png"
        },
        "nogame": {
            "16": "./A/System64/Images/Icons/nogame-16x16.png",
            "32": "./A/System64/Images/Icons/nogame-32x32.png"
        },
        "notepad": {
            "16": "./A/System64/Images/Icons/notepad-16x16.png",
            "32": "./A/System64/Images/Icons/notepad-32x32.png",
            "48": "./A/System64/Images/Icons/notepad-48x48.png"
        },
        "notepad-file": {
            "16": "./A/System64/Images/Icons/notepad-file-16x16.png",
            "32": "./A/System64/Images/Icons/notepad-file-32x32.png",
            "48": "./A/System64/Images/Icons/notepad-file-48x48.png"
        },
        "nuke": {
            "32": "./A/System64/Images/Icons/nuke-32x32.png"
        },
        "offline-8bpp": {
            "32": "./A/System64/Images/Icons/offline-32x32-8bpp.png"
        },
        "offline": {
            "32": "./A/System64/Images/Icons/offline-32x32.png"
        },
        "os-js": {
            "16": "./A/System64/Images/Icons/os-js-16x16.png",
            "32": "./A/System64/Images/Icons/os-js-32x32.png",
            "48": "./A/System64/Images/Icons/os-js-48x48.png"
        },
        "outlook-express": {
            "16": "./A/System64/Images/Icons/outlook-express-16x16.png",
            "32": "./A/System64/Images/Icons/outlook-express-32x32.png",
            "48": "./A/System64/Images/Icons/outlook-express-48x48.png"
        },
        "pacman": {
            "16": "./A/System64/Images/Icons/pacman-16x16.png",
            "32": "./A/System64/Images/Icons/pacman-32x32.png"
        },
        "paint": {
            "16": "./A/System64/Images/Icons/paint-16x16.png",
            "32": "./A/System64/Images/Icons/paint-32x32.png",
            "48": "./A/System64/Images/Icons/paint-48x48.png"
        },
        "paint-file": {
            "16": "./A/System64/Images/Icons/paint-file-16x16.png",
            "32": "./A/System64/Images/Icons/paint-file-32x32.png",
            "48": "./A/System64/Images/Icons/paint-file-48x48.png"
        },
        "pinball": {
            "16": "./A/System64/Images/Icons/pinball-16x16.png",
            "32": "./A/System64/Images/Icons/pinball-32x32.png",
            "48": "./A/System64/Images/Icons/pinball-48x48.png"
        },
        "pipes": {
            "16": "./A/System64/Images/Icons/pipes-16x16.png",
            "32": "./A/System64/Images/Icons/pipes-32x32.png",
            "48": "./A/System64/Images/Icons/pipes-48x48.png"
        },
        "plutonia": {
            "16": "./A/System64/Images/Icons/plutonia-16x16.png",
            "32": "./A/System64/Images/Icons/plutonia-32x32.png"
        },
        "plutonia2": {
            "16": "./A/System64/Images/Icons/plutonia2-16x16.png",
            "32": "./A/System64/Images/Icons/plutonia2-32x32.png"
        },
        "pong": {
            "16": "./A/System64/Images/Icons/pong-16x16.png",
            "32": "./A/System64/Images/Icons/pong-32x32.png"
        },
        "printer": {
            "16": "./A/System64/Images/Icons/printer-16x16.png",
            "32": "./A/System64/Images/Icons/printer-32x32.png",
            "48": "./A/System64/Images/Icons/printer-48x48.png"
        },
        "printers-folder": {
            "16": "./A/System64/Images/Icons/printers-folder-16x16.png",
            "32": "./A/System64/Images/Icons/printers-folder-32x32.png",
            "48": "./A/System64/Images/Icons/printers-folder-48x48.png"
        },
        "programs-folder": {
            "16": "./A/System64/Images/Icons/programs-folder-16x16.png",
            "32": "./A/System64/Images/Icons/programs-folder-32x32.png",
            "48": "./A/System64/Images/Icons/programs-folder-48x48.png"
        },
        "python": {
            "16": "./A/System64/Images/Icons/python-16x16.png",
            "32": "./A/System64/Images/Icons/python-32x32.png",
            "48": "./A/System64/Images/Icons/python-48x48.png"
        },
        "q1m": {
            "128": "./A/System64/Images/Icons/q1m-128x128.png",
            "16": "./A/System64/Images/Icons/q1m-16x16.png",
            "256": "./A/System64/Images/Icons/q1m-256x256.png",
            "32": "./A/System64/Images/Icons/q1m-32x32.png",
            "512": "./A/System64/Images/Icons/q1m-512x512.png",
            "64": "./A/System64/Images/Icons/q1m-64x64.png"
        },
        "quake": {
            "16": "./A/System64/Images/Icons/quake-16x16.png",
            "32": "./A/System64/Images/Icons/quake-32x32.png",
            "48": "./A/System64/Images/Icons/quake-48x48.png"
        },
        "quake2": {
            "16": "./A/System64/Images/Icons/quake2-16x16.png",
            "32": "./A/System64/Images/Icons/quake2-32x32.png",
            "48": "./A/System64/Images/Icons/quake2-48x48.png"
        },
        "quento": {
            "16": "./A/System64/Images/Icons/quento-16x16.png",
            "32": "./A/System64/Images/Icons/quento-32x32.png",
            "48": "./A/System64/Images/Icons/quento-48x48.png"
        },
        "question-1bpp": {
            "32": "./A/System64/Images/Icons/question-32x32-1bpp.png"
        },
        "question-8bpp": {
            "32": "./A/System64/Images/Icons/question-32x32-8bpp.png"
        },
        "recycle-bin": {
            "16": "./A/System64/Images/Icons/recycle-bin-16x16.png",
            "32": "./A/System64/Images/Icons/recycle-bin-32x32.png",
            "48": "./A/System64/Images/Icons/recycle-bin-48x48.png"
        },
        "recycle-bin-full": {
            "16": "./A/System64/Images/Icons/recycle-bin-full-16x16.png",
            "32": "./A/System64/Images/Icons/recycle-bin-full-32x32.png",
            "48": "./A/System64/Images/Icons/recycle-bin-full-48x48.png"
        },
        "recycle-bin-stuff": {
            "32": "./A/System64/Images/Icons/recycle-bin-stuff-32x32.png"
        },
        "rekkr": {
            "16": "./A/System64/Images/Icons/rekkr-16x16.png",
            "32": "./A/System64/Images/Icons/rekkr-32x32.png"
        },
        "rioluvania": {
            "128": "./A/System64/Images/Icons/rioluvania-128x128.png",
            "16": "./A/System64/Images/Icons/rioluvania-16x16.png",
            "256": "./A/System64/Images/Icons/rioluvania-256x256.png",
            "32": "./A/System64/Images/Icons/rioluvania-32x32.png"
        },
        "rocket": {
            "16": "./A/System64/Images/Icons/rocket-16x16.png",
            "32": "./A/System64/Images/Icons/rocket-32x32.png",
            "48": "./A/System64/Images/Icons/rocket-48x48.png"
        },
        "run": {
            "16": "./A/System64/Images/Icons/run-16x16.png",
            "32": "./A/System64/Images/Icons/run-32x32.png",
            "48": "./A/System64/Images/Icons/run-48x48.png"
        },
        "sans": {
            "16": "./A/System64/Images/Icons/sans-16x16.png",
            "32": "./A/System64/Images/Icons/sans-32x32.png"
        },
        "school": {
            "16": "./A/System64/Images/Icons/school-16x16.png",
            "32": "./A/System64/Images/Icons/school-32x32.png",
            "48": "./A/System64/Images/Icons/school-48x48.png"
        },
        "settings": {
            "16": "./A/System64/Images/Icons/settings-16x16.png",
            "32": "./A/System64/Images/Icons/settings-32x32.png",
            "48": "./A/System64/Images/Icons/settings-48x48.png"
        },
        "shortcut": {
            "16": "./A/System64/Images/Icons/shortcut-16x16.png",
            "32": "./A/System64/Images/Icons/shortcut-32x32.png"
        },
        "shutdown": {
            "16": "./A/System64/Images/Icons/shutdown-16x16.png",
            "32": "./A/System64/Images/Icons/shutdown-32x32.png",
            "48": "./A/System64/Images/Icons/shutdown-48x48.png"
        },
        "sleep": {
            "16": "./A/System64/Images/Icons/sleep-16x16.png",
            "32": "./A/System64/Images/Icons/sleep-32x32.png",
            "48": "./A/System64/Images/Icons/sleep-48x48.png"
        },
        "solitaire": {
            "16": "./A/System64/Images/Icons/solitaire-16x16.png",
            "32": "./A/System64/Images/Icons/solitaire-32x32.png",
            "48": "./A/System64/Images/Icons/solitaire-48x48.png"
        },
        "sound": {
            "16": "./A/System64/Images/Icons/sound-16x16.png",
            "32": "./A/System64/Images/Icons/sound-32x32.png",
            "48": "./A/System64/Images/Icons/sound-48x48.png"
        },
        "space": {
            "16": "./A/System64/Images/Icons/space-16x16.png",
            "32": "./A/System64/Images/Icons/space-32x32.png"
        },
        "speaker": {
            "16": "./A/System64/Images/Icons/speaker-16x16.png",
            "32": "./A/System64/Images/Icons/speaker-32x32.png",
            "48": "./A/System64/Images/Icons/speaker-48x48.png"
        },
        "speaker-volume-control": {
            "32": "./A/System64/Images/Icons/speaker-volume-control-32x32.png"
        },
        "spear": {
            "16": "./A/System64/Images/Icons/spear-16x16.png",
            "32": "./A/System64/Images/Icons/spear-32x32.png"
        },
        "spelunky": {
            "16": "./A/System64/Images/Icons/spelunky-16x16.png",
            "32": "./A/System64/Images/Icons/spelunky-32x32.png"
        },
        "stardoom": {
            "16": "./A/System64/Images/Icons/stardoom-16x16.png",
            "32": "./A/System64/Images/Icons/stardoom-32x32.png",
            "48": "./A/System64/Images/Icons/stardoom-48x48.png",
            "512": "./A/System64/Images/Icons/stardoom-512x512.png"
        },
        "start-menu-programs": {
            "32": "./A/System64/Images/Icons/start-menu-programs-32x32.png"
        },
        "start-settings": {
            "16": "./A/System64/Images/Icons/start-settings-16x16.png",
            "32": "./A/System64/Images/Icons/start-settings-32x32.png"
        },
        "starwars": {
            "16": "./A/System64/Images/Icons/starwars-16x16.png",
            "32": "./A/System64/Images/Icons/starwars-32x32.png"
        },
        "store": {
            "128": "./A/System64/Images/Icons/store-128x128.png",
            "16": "./A/System64/Images/Icons/store-16x16.png",
            "256": "./A/System64/Images/Icons/store-256x256.png",
            "32": "./A/System64/Images/Icons/store-32x32.png",
            "48": "./A/System64/Images/Icons/store-48x48.png",
            "512": "./A/System64/Images/Icons/store-512x512.png",
            "64": "./A/System64/Images/Icons/store-64x64.png"
        },
        "strife": {
            "16": "./A/System64/Images/Icons/strife-16x16.png",
            "32": "./A/System64/Images/Icons/strife-32x32.png"
        },
        "surf": {
            "16": "./A/System64/Images/Icons/surf-16x16.png",
            "32": "./A/System64/Images/Icons/surf-32x32.png"
        },
        "system": {
            "16": "./A/System64/Images/Icons/system-16x16.png"
        },
        "task": {
            "16": "./A/System64/Images/Icons/task-16x16.png",
            "32": "./A/System64/Images/Icons/task-32x32.png"
        },
        "task-scheduler": {
            "16": "./A/System64/Images/Icons/task-scheduler-16x16.png"
        },
        "tboi": {
            "16": "./A/System64/Images/Icons/tboi-16x16.png",
            "32": "./A/System64/Images/Icons/tboi-32x32.png",
            "48": "./A/System64/Images/Icons/tboi-48x48.png"
        },
        "tetris": {
            "16": "./A/System64/Images/Icons/tetris-16x16.png",
            "32": "./A/System64/Images/Icons/tetris-32x32.png"
        },
        "themes": {
            "16": "./A/System64/Images/Icons/themes-16x16.png",
            "32": "./A/System64/Images/Icons/themes-32x32.png",
            "48": "./A/System64/Images/Icons/themes-48x48.png"
        },
        "tools-folder": {
            "16": "./A/System64/Images/Icons/tools-folder-16x16.png",
            "32": "./A/System64/Images/Icons/tools-folder-32x32.png",
            "48": "./A/System64/Images/Icons/tools-folder-48x48.png"
        },
        "trail": {
            "16": "./A/System64/Images/Icons/trail-16x16.png",
            "32": "./A/System64/Images/Icons/trail-32x32.png",
            "48": "./A/System64/Images/Icons/trail-48x48.png"
        },
        "turbo": {
            "16": "./A/System64/Images/Icons/turbo-16x16.png"
        },
        "ud2": {
            "16": "./A/System64/Images/Icons/ud2-16x16.png",
            "32": "./A/System64/Images/Icons/ud2-32x32.png"
        },
        "unknown-printer": {
            "16": "./A/System64/Images/Icons/unknown-printer-16x16.png",
            "32": "./A/System64/Images/Icons/unknown-printer-32x32.png",
            "48": "./A/System64/Images/Icons/unknown-printer-48x48.png"
        },
        "update": {
            "32": "./A/System64/Images/Icons/update-32x32.png"
        },
        "url": {
            "16": "./A/System64/Images/Icons/url-16x16.png",
            "32": "./A/System64/Images/Icons/url-32x32.png",
            "48": "./A/System64/Images/Icons/url-48x48.png"
        },
        "video": {
            "16": "./A/System64/Images/Icons/video-16x16.png",
            "32": "./A/System64/Images/Icons/video-32x32.png"
        },
        "virtualdesktop.org": {
            "16": "./A/System64/Images/Icons/virtualdesktop.org-16x16.png"
        },
        "vlc": {
            "16": "./A/System64/Images/Icons/vlc-16x16.png",
            "32": "./A/System64/Images/Icons/vlc-32x32.png",
            "48": "./A/System64/Images/Icons/vlc-48x48.png"
        },
        "vue-win3.1": {
            "16": "./A/System64/Images/Icons/vue-win3.1-16x16.png",
            "32": "./A/System64/Images/Icons/vue-win3.1-32x32.png"
        },
        "wadcmd": {
            "128": "./A/System64/Images/Icons/wadcmd-128x128.png",
            "16": "./A/System64/Images/Icons/wadcmd-16x16.png",
            "256": "./A/System64/Images/Icons/wadcmd-256x256.png",
            "32": "./A/System64/Images/Icons/wadcmd-32x32.png",
            "48": "./A/System64/Images/Icons/wadcmd-48x48.png",
            "512": "./A/System64/Images/Icons/wadcmd-512x512.png",
            "64": "./A/System64/Images/Icons/wadcmd-64x64.png"
        },
        "warning-8bpp": {
            "16": "./A/System64/Images/Icons/warning-16x16-8bpp.png",
            "32": "./A/System64/Images/Icons/warning-32x32-8bpp.png"
        },
        "warning": {
            "16": "./A/System64/Images/Icons/warning-16x16.png",
            "32": "./A/System64/Images/Icons/warning-32x32.png"
        },
        "warning-1bpp": {
            "32": "./A/System64/Images/Icons/warning-32x32-1bpp.png"
        },
        "webdesktop": {
            "16": "./A/System64/Images/Icons/webdesktop-16x16.png"
        },
        "winamp2": {
            "16": "./A/System64/Images/Icons/winamp2-16x16.png",
            "32": "./A/System64/Images/Icons/winamp2-32x32.png",
            "48": "./A/System64/Images/Icons/winamp2-48x48.png"
        },
        "windows-1bpp": {
            "16": "./A/System64/Images/Icons/windows-16x16-1bpp.png"
        },
        "windows-8bpp": {
            "32": "./A/System64/Images/Icons/windows-32x32-8bpp.png"
        },
        "windows-93": {
            "16": "./A/System64/Images/Icons/windows-93-16x16.png",
            "32": "./A/System64/Images/Icons/windows-93-32x32.png",
            "48": "./A/System64/Images/Icons/windows-93-48x48.png"
        },
        "windows-update": {
            "16": "./A/System64/Images/Icons/windows-update-16x16.png",
            "32": "./A/System64/Images/Icons/windows-update-32x32.png",
            "48": "./A/System64/Images/Icons/windows-update-48x48.png"
        },
        "winxp-doge": {
            "16": "./A/System64/Images/Icons/winxp-doge-16x16.png"
        },
        "wolf": {
            "16": "./A/System64/Images/Icons/wolf-16x16.png",
            "32": "./A/System64/Images/Icons/wolf-32x32.png",
            "48": "./A/System64/Images/Icons/wolf-48x48.png"
        },
        "youtube": {
            "16": "./A/System64/Images/Icons/youtube-16x16.png",
            "32": "./A/System64/Images/Icons/youtube-32x32.png"
        },
        "zamboni": {
            "16": "./A/System64/Images/Icons/zamboni-16x16.png",
            "32": "./A/System64/Images/Icons/zamboni-32x32.png",
            "48": "./A/System64/Images/Icons/zamboni-48x48.png"
        },
        "zero": {
            "16": "./A/System64/Images/Icons/zero-16x16.png",
            "32": "./A/System64/Images/Icons/zero-32x32.png",
            "48": "./A/System64/Images/Icons/zero-48x48.png"
        },
        "zone-internet": {
            "16": "./A/System64/Images/Icons/zone-internet-16x16.png",
            "32": "./A/System64/Images/Icons/zone-internet-32x32.png"
        }
    };

    if (iconPaths[iconID] && iconPaths[iconID][size]) {
        return iconPaths[iconID][size];
    } else {
        console.error(iconID + " " + size + " not found.");
    }
}