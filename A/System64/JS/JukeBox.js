
window.music = (function () {
    let audio = new Audio();
    let song_location = "./A/System64/Audio/Music/";
    let songs = ["Aria_Math.mp3", "Biome_Fest.mp3", "Blind_Spots.mp3", "Clark.mp3", "Haunt_Muskie.mp3", "Minecraft.mp3", "Moog_City.mp3", "Moog_City_2.mp3", "Mutation.mp3", "Subwoofer_Lullaby.mp3", "Sweden.mp3", "Wet_Hands.mp3"];
    let station_location = "https://nightride.fm/stream/";
    let stations = ["nightride.mp3", "chillsynth.mp3", "datawave.mp3", "spacesynth.mp3", "darksynth.mp3", "horrorsynth.mp3", "ebsm.mp3"];
    let WCVEFM = 'https://22223.live.streamtheworld.com/WCVEFM.mp3';
    let WCVEHD2 = 'https://22223.live.streamtheworld.com/WCVEHD2.mp3';
    let nowPlayingElement = document.getElementById('now-playing');
    let currentSongIndex = 0;
    let currentStationIndex = 0;
    let currently_playing;

    function volume(vol) {
        audio.volume = vol;
    };

    function playMCSong() {
        currently_playing = "MC";
        if (currentSongIndex >= songs.length) {
            currentSongIndex = 0;
        }
        let randomSong = songs[currentSongIndex];
        audio.src = song_location + randomSong;
        audio.play();
        randomSong = randomSong.replace(/_/g, ' ');
        randomSong = randomSong.replace(/\.[^.]+$/, '');
        nowPlayingElement.innerHTML = randomSong;
        currentSongIndex++;
    }
    function playRandomStation() {
        if (currentStationIndex >= stations.length) {
            currentStationIndex = 0;
        }
        let randomStation = stations[currentStationIndex];
        audio.src = station_location + randomStation;
        audio.play();
        randomStation = randomStation.replace(/_/g, ' ');
        randomStation = randomStation.replace(/\.[^.]+$/, '');
        nowPlayingElement.innerHTML = randomStation;
        currentStationIndex++;
    }

    function playWCVEFM() {
        currently_playing = "FM1";
        audio.src = WCVEFM;
        audio.play();
        nowPlayingElement.innerHTML = "FM-1";
    }

    function playWCVEHD2() {
        currently_playing = "FM2";
        audio.src = WCVEHD2;
        audio.play();
        nowPlayingElement.innerHTML = "FM-2";
    }

    function stop() {
        audio.pause();
    }

    function play() {
        if (audio.src === '') {
            playMCSong();
        } else {
            audio.play();
        }
    }

    function skip() {
        if (currently_playing === 'MC') {
            playMCSong();
        } else if (currently_playing === 'Station') {
            playRandomStation();
        } else {
            toast({
                message: "Nothing to skip."
            })
        }
    }

    return {
        playMCSong,
        playRandomStation,
        playWCVEFM,
        playWCVEHD2,
        volume,
        skip,
        stop,
        play,
    };
})();

//# sourceURL=MagnusWare
