window.music = (function () {
    let audio = new Audio();
    let stations = ["nightride", "chillsynth", "datawave", "spacesynth", "darksynth", "horrorsynth", "ebsm"];
    let songs = ["Aria_Math", "Biome_Fest", "Blind_Spots", "Clark", "Haunt_Muskie", "Minecraft", "Moog_City", "Moog_City_2", "Mutation", "Subwoofer_Lullaby", "Sweden", "Wet_Hands"];
    let insturl = "https://invidious.zapashcanon.fr";
    let WCVEFM = 'https://22223.live.streamtheworld.com/WCVEFM.mp3';
    let WCVEHD2 = 'https://22223.live.streamtheworld.com/WCVEHD2.mp3';
    // ^^ NPR
    let loading = false;
    let usealt = 0;

    function shuffle(array) {
        for (let i = 0; i < array.length; i++) {
            let j = Math.floor(Math.random() * (array.length - i)) + i;
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function fixURL(url) {
        if (!url) return insturl;
        return url.endsWith("/") ? url.slice(0, url.length - 1) : url;
    }

    const updinsturl = async () => {
        try {
            const json = await (await fetch("https://api.invidious.io/instances.json?sort_by=health")).json();
            const out = shuffle(json).map(entry => {
                const healthKnown = !!entry[1].monitor
                return {
                    name: entry[0],
                    details: entry[1],
                    health: +(healthKnown ? entry[1].monitor.dailyRatios[0].ratio : 95),
                    healthKnown
                }
            }).filter(entry => {
                return entry.details.type === "https" && entry.health > 0
            }).sort((a, b) => {
                return b.health - a.health
            });
            insturl = fixURL(out.find(e => e.details.cors).details.uri);
        } catch (e) {
            aud.onerror();
        }
    };
    const updint = setInterval(updinsturl, 3600000);
    updinsturl();

    audio.onended = function (e) {
        loading = true;
        start();
    };

    audio.oncanplay = function (e) {
        if (loading) audio.play();
    };

    audio.onplay = function (e) {
        loading = false;
        if (usealt == 1) usealt = 0;
    };

    audio.onerror = function (e) {
        if (usealt == 3) {
            audio = null;
            return;
        }

        if (usealt == 0 || usealt == 1) {
            usealt++;
        } else if (usealt == 2) {
            loading = true;
            usealt = 3;
        }
        stop();
        if (usealt == 1) {
            updinsturl();
        } else {
            clearInterval(updint);
        }
        if (usealt == 1 || usealt == 2) start();
    };

    const playing = function () {
        return usealt == 3 || (!audio.paused) || loading;
    };

    const start = function () {
        loading = true;
        let url = "";
        if (usealt == 0 || usealt == 1) {
            songs = shuffle(songs);
            url = "./Assets/Audio/Music/" + songs[0] + ".mp3";
        } else if (usealt == 2) {
            stations = shuffle(stations);
            url = "https://nightride.fm/stream/" + stations[0] + ".m4a";
        } else if (usealt == 3) {
            return;
        }
        audio.src = url;
        audio.currentTime = 0;
        let nowplaying = document.getElementById('now-playing');
        let nowplayingValue = songs[0].replace(/_/g, '&nbsp;');
        nowplaying.innerHTML = nowplayingValue;
    };

    const playSong = function () {
        usealt = 1
        loading = true;
        songs = shuffle(songs);
        url = "./Assets/Audio/Music/" + songs[0] + ".mp3";
        audio.src = url;
        audio.currentTime = 0;
        localStorage.setItem('nowplaying', songs[0])
        let nowplaying = document.getElementById('now-playing');
        let nowplayingValue = songs[0].replace(/_/g, '&nbsp;');
        nowplaying.innerHTML = nowplayingValue;
    }

    const playStation = function () {
        usealt = 2
        loading = true;
        stations = shuffle(stations);
        url = "https://nightride.fm/stream/" + stations[0] + ".m4a";
        audio.src = url;
        audio.currentTime = 0;
        localStorage.setItem('nowplaying', stations[0])
        let nowplaying = document.getElementById('now-playing');
        nowplaying.innerHTML = stations[0];
    };

    const skip = function () {
        let nowPlaying = localStorage.getItem('nowplaying');
        let currentIndex;

        if (stations.includes(nowPlaying)) {
            loading = true;
            currentIndex = stations.indexOf(nowPlaying);
            let nextIndex = (currentIndex + 1) % stations.length;
            let station = stations[nextIndex];
            url = "https://nightride.fm/stream/" + station + ".m4a";
            audio.src = url;
            audio.currentTime = 0;
            console.log("Skipping station: " + station);
            nowPlaying = station; // Update nowPlaying with the next station
        } else if (songs.includes(nowPlaying)) {
            loading = true;
            currentIndex = songs.indexOf(nowPlaying);
            let nextIndex = (currentIndex + 1) % songs.length;
            let song = songs[nextIndex];
            // Skip the current song logic here
            url = "./Assets/Audio/Music/" + song + ".mp3";
            audio.src = url;
            audio.currentTime = 0;
            console.log("Skipping song: " + song);
            nowPlaying = song; // Update nowPlaying with the next song
        }

        // Update the 'nowplaying' localStorage item and display the new value
        localStorage.setItem('nowplaying', nowPlaying);
        let nowPlayingElement = document.getElementById('now-playing');
        let nowPlayingValue = nowPlaying.replace(/_/g, '&nbsp;');
        nowPlayingElement.innerHTML = nowPlayingValue;
    }


    const stop = function () {
        if (usealt == 3) return;
        audio.pause();
        loading = false;
    };

    const volume = function (vol) {
        audio.volume = vol;
    };

    return {
        start: start,
        stop: stop,
        playing: playing,
        volume: volume,
        playSong,
        playStation,
        skip
    };
})();