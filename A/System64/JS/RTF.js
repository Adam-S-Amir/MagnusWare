const fs = BrowserFS.BFSRequire('fs');

function readShortcutFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        const iconMatch = content.match(/icon:(.+)/i);

        if (iconMatch && iconMatch[1]) {
            const iconText = iconMatch[1].trim();
            console.log(iconText);
        } else {
            console.log('No icon information found in the shortcut file.');
        }
    } catch (error) {
        console.error('Error reading shortcut file:', error.message);
    }
}

// Replace 'your_shortcut_file_path' with the actual path to your ".shortcut" file
const shortcutFilePath = './A/desktop/Icon.shortcut';
readShortcutFile(shortcutFilePath);
