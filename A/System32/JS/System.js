const confirm_reboot = function () {
    showMessageBox({
        title: "Confirm Reboot?",
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
            showMessageBox({
                title: "Rebooting...",
                message: `Rebooting...`,
                sound: [null],
                buttons: [null],
            });
        } else {
            showMessageBox({
                title: "Rebooting...",
                message: `Rebooting in...${count}`,
                sound: [null],
                buttons: [null]
            });
        }
    }, 900);
    intervalId;
};


const confirm_reinstall = function () {
    showMessageBox({
        title: "Confirm Factory Reset?",
        message: "Are you sure you want to reinstall? You will NOT be able to retrieve ANY of your save data!",
        iconID: "nuke",
        sound: [SystemHand.play()],
        buttons: [{
                label: "Yes",
                action: () => {
                    reinstall();
                },
            },
            {
                label: "No",
            },
            {
                label: "No, I meant to reboot",
                action: () => {
                    confirm_reboot();
                },

            }
        ],
    })
}

const reinstall = function () {
    console.clear();
    const boot = document.createElement('div');
    boot.classList.add('boot');
    boot.id = 'boot';
    document.body.appendChild(boot);
    let factory = [`
    <div id='logInfo' class='fullscreen ui-terminal noscroll'></div>
<!--<canvas id="canvas"></canvas>
    <div id="loader"></div>-->
    `]
    boot.innerHTML = factory;
    document.getElementById("version-info").style.display = "none";
    document.getElementById("taskbr").style.display = "none";
    document.getElementById("boot").style.visibility = "visible";
    (function () {
        function reloadCSS() {
            var links = document.getElementsByTagName('link');
            for (var i = 0; i < links.length; i++) {
                if (links[i].rel === 'stylesheet') {
                    var href = links[i].href;
                    href += (href.includes('?') ? '&' : '?') + 'timestamp=' + new Date().getTime();
                    links[i].href = href;
                }
            }
        }
        reloadCSS();
    })();
    (function () {
        function reloadCachedJS() {
            console.log(scriptUrls);
            scriptUrls.forEach(function (filePath) {
                var scriptElement = document.createElement('script');
                scriptElement.src = filePath + '?v=' + Date.now();
                document.head.appendChild(scriptElement);
            });
        }
        reloadCachedJS();
    });
    trash();

    function trash() {
        (function () {
            C = document.cookie.split("; ");
            for (d = "." + location.host; d; d = ("" + d)
                .substr(1)
                .match(/..*$/))
                for (sl = 0; sl < 2; ++sl)
                    for (p = "/" + location.pathname; p; p = p.substring(0, p.lastIndexOf('/')))
                        for (i in C)
                            if (c = C[i]) {
                                document.cookie = c + "; domain=" + d.slice(sl) + "; path=" + p.slice(1) + "/" + "; expires=" + new Date((new Date)
                                        .getTime() - 1e11)
                                    .toGMTString()
                            }
            window.localStorage.clear();
            sessionStorage.clear();
        })();

    };
    /*
     *  howler.js v1.1.25
     */
    (function () {
        var e = {};
        var o = null,
            n = true,
            r = false;
        try {
            if (typeof AudioContext !== "undefined") {
                o = new AudioContext
            } else if (typeof webkitAudioContext !== "undefined") {
                o = new webkitAudioContext
            } else {
                n = false
            }
        } catch (t) {
            n = false
        }
        if (!n) {
            if (typeof Audio !== "undefined") {
                try {
                    new Audio
                } catch (t) {
                    r = true
                }
            } else {
                r = true
            }
        }
        if (n) {
            var i = typeof o.createGain === "undefined" ? o.createGainNode() : o.createGain();
            i.gain.value = 1;
            i.connect(o.destination)
        }
        var a = function (e) {
            this._volume = 1;
            this._muted = false;
            this.usingWebAudio = n;
            this.ctx = o;
            this.noAudio = r;
            this._howls = [];
            this._codecs = e;
            this.iOSAutoEnable = true
        };
        a.prototype = {
            volume: function (e) {
                var o = this;
                e = parseFloat(e);
                if (e >= 0 && e <= 1) {
                    o._volume = e;
                    if (n) {
                        i.gain.value = e
                    }
                    for (var r in o._howls) {
                        if (o._howls.hasOwnProperty(r) && o._howls[r]._webAudio === false) {
                            for (var t = 0; t < o._howls[r]._audioNode.length; t++) {
                                o._howls[r]._audioNode[t].volume = o._howls[r]._volume * o._volume
                            }
                        }
                    }
                    return o
                }
                return n ? i.gain.value : o._volume
            },
            mute: function () {
                this._setMuted(true);
                return this
            },
            unmute: function () {
                this._setMuted(false);
                return this
            },
            _setMuted: function (e) {
                var o = this;
                o._muted = e;
                if (n) {
                    i.gain.value = e ? 0 : o._volume
                }
                for (var r in o._howls) {
                    if (o._howls.hasOwnProperty(r) && o._howls[r]._webAudio === false) {
                        for (var t = 0; t < o._howls[r]._audioNode.length; t++) {
                            o._howls[r]._audioNode[t].muted = e
                        }
                    }
                }
            },
            codecs: function (e) {
                return this._codecs[e]
            },
            _enableiOSAudio: function () {
                var e = this;
                if (o && (e._iOSEnabled || !/iPhone|iPad|iPod/i.test(navigator.userAgent))) {
                    return
                }
                e._iOSEnabled = false;
                var n = function () {
                    var r = o.createBuffer(1, 1, 22050);
                    var t = o.createBufferSource();
                    t.buffer = r;
                    t.connect(o.destination);
                    if (typeof t.start === "undefined") {
                        t.noteOn(0)
                    } else {
                        t.start(0)
                    }
                    setTimeout(function () {
                        if (t.playbackState === t.PLAYING_STATE || t.playbackState === t.FINISHED_STATE) {
                            e._iOSEnabled = true;
                            e.iOSAutoEnable = false;
                            window.removeEventListener("touchstart", n, false)
                        }
                    }, 0)
                };
                window.addEventListener("touchstart", n, false);
                return e
            }
        };
        var u = null;
        var d = {};
        if (!r) {
            u = new Audio;
            d = {
                mp3: !!u.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                opus: !!u.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                ogg: !!u.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                wav: !!u.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                aac: !!u.canPlayType("audio/aac;").replace(/^no$/, ""),
                m4a: !!(u.canPlayType("audio/x-m4a;") || u.canPlayType("audio/m4a;") || u.canPlayType("audio/aac;")).replace(/^no$/, ""),
                mp4: !!(u.canPlayType("audio/x-mp4;") || u.canPlayType("audio/mp4;") || u.canPlayType("audio/aac;")).replace(/^no$/, ""),
                weba: !!u.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
            }
        }
        var f = new a(d);
        var l = function (e) {
            var r = this;
            r._autoplay = e.autoplay || false;
            r._buffer = e.buffer || false;
            r._duration = e.duration || 0;
            r._format = e.format || null;
            r._loop = e.loop || false;
            r._loaded = false;
            r._sprite = e.sprite || {};
            r._src = e.src || "";
            r._pos3d = e.pos3d || [0, 0, -.5];
            r._volume = e.volume !== undefined ? e.volume : 1;
            r._urls = e.urls || [];
            r._rate = e.rate || 1;
            r._model = e.model || null;
            r._onload = [e.onload || function () {}];
            r._onloaderror = [e.onloaderror || function () {}];
            r._onend = [e.onend || function () {}];
            r._onpause = [e.onpause || function () {}];
            r._onplay = [e.onplay || function () {}];
            r._onendTimer = [];
            r._webAudio = n && !r._buffer;
            r._audioNode = [];
            if (r._webAudio) {
                r._setupAudioNode()
            }
            if (typeof o !== "undefined" && o && f.iOSAutoEnable) {
                f._enableiOSAudio()
            }
            f._howls.push(r);
            r.load()
        };
        l.prototype = {
            load: function () {
                var e = this,
                    o = null;
                if (r) {
                    e.on("loaderror");
                    return
                }
                for (var n = 0; n < e._urls.length; n++) {
                    var t, i;
                    if (e._format) {
                        t = e._format
                    } else {
                        i = e._urls[n];
                        t = /^data:audio\/([^;,]+);/i.exec(i);
                        if (!t) {
                            t = /\.([^.]+)$/.exec(i.split("?", 1)[0])
                        }
                        if (t) {
                            t = t[1].toLowerCase()
                        } else {
                            e.on("loaderror");
                            return
                        }
                    }
                    if (d[t]) {
                        o = e._urls[n];
                        break
                    }
                }
                if (!o) {
                    e.on("loaderror");
                    return
                }
                e._src = o;
                if (e._webAudio) {
                    s(e, o)
                } else {
                    var u = new Audio;
                    u.addEventListener("error", function () {
                        if (u.error && u.error.code === 4) {
                            a.noAudio = true
                        }
                        e.on("loaderror", {
                            type: u.error ? u.error.code : 0
                        })
                    }, false);
                    e._audioNode.push(u);
                    u.src = o;
                    u._pos = 0;
                    u.preload = "auto";
                    u.volume = f._muted ? 0 : e._volume * f.volume();
                    var l = function () {
                        e._duration = Math.ceil(u.duration * 10) / 10;
                        if (Object.getOwnPropertyNames(e._sprite).length === 0) {
                            e._sprite = {
                                _default: [0, e._duration * 1e3]
                            }
                        }
                        if (!e._loaded) {
                            e._loaded = true;
                            e.on("load")
                        }
                        if (e._autoplay) {
                            e.play()
                        }
                        u.removeEventListener("canplaythrough", l, false)
                    };
                    u.addEventListener("canplaythrough", l, false);
                    u.load()
                }
                return e
            },
            urls: function (e) {
                var o = this;
                if (e) {
                    o.stop();
                    o._urls = typeof e === "string" ? [e] : e;
                    o._loaded = false;
                    o.load();
                    return o
                } else {
                    return o._urls
                }
            },
            play: function (e, n) {
                var r = this;
                if (typeof e === "function") {
                    n = e
                }
                if (!e || typeof e === "function") {
                    e = "_default"
                }
                if (!r._loaded) {
                    r.on("load", function () {
                        r.play(e, n)
                    });
                    return r
                }
                if (!r._sprite[e]) {
                    if (typeof n === "function") n();
                    return r
                }
                r._inactiveNode(function (t) {
                    t._sprite = e;
                    var i = t._pos > 0 ? t._pos : r._sprite[e][0] / 1e3;
                    var a = 0;
                    if (r._webAudio) {
                        a = r._sprite[e][1] / 1e3 - t._pos;
                        if (t._pos > 0) {
                            i = r._sprite[e][0] / 1e3 + i
                        }
                    } else {
                        a = r._sprite[e][1] / 1e3 - (i - r._sprite[e][0] / 1e3)
                    }
                    var u = !!(r._loop || r._sprite[e][2]);
                    var d = typeof n === "string" ? n : Math.round(Date.now() * Math.random()) + "",
                        l;
                    (function () {
                        var o = {
                            id: d,
                            sprite: e,
                            loop: u
                        };
                        l = setTimeout(function () {
                            if (!r._webAudio && u) {
                                r.stop(o.id).play(e, o.id)
                            }
                            if (r._webAudio && !u) {
                                r._nodeById(o.id).paused = true;
                                r._nodeById(o.id)._pos = 0;
                                r._clearEndTimer(o.id)
                            }
                            if (!r._webAudio && !u) {
                                r.stop(o.id)
                            }
                            r.on("end", d)
                        }, a * 1e3);
                        r._onendTimer.push({
                            timer: l,
                            id: o.id
                        })
                    })();
                    if (r._webAudio) {
                        var s = r._sprite[e][0] / 1e3,
                            _ = r._sprite[e][1] / 1e3;
                        t.id = d;
                        t.paused = false;
                        p(r, [u, s, _], d);
                        r._playStart = o.currentTime;
                        t.gain.value = r._volume;
                        if (typeof t.bufferSource.start === "undefined") {
                            t.bufferSource.noteGrainOn(0, i, a)
                        } else {
                            t.bufferSource.start(0, i, a)
                        }
                    } else {
                        if (t.readyState === 4 || !t.readyState && navigator.isCocoonJS) {
                            t.readyState = 4;
                            t.id = d;
                            t.currentTime = i;
                            t.muted = f._muted || t.muted;
                            t.volume = r._volume * f.volume();
                            setTimeout(function () {
                                t.play()
                            }, 0)
                        } else {
                            r._clearEndTimer(d);
                            (function () {
                                var o = r,
                                    i = e,
                                    a = n,
                                    u = t;
                                var d = function () {
                                    o.play(i, a);
                                    u.removeEventListener("canplaythrough", d, false)
                                };
                                u.addEventListener("canplaythrough", d, false)
                            })();
                            return r
                        }
                    }
                    r.on("play");
                    if (typeof n === "function") n(d);
                    return r
                });
                return r
            },
            pause: function (e) {
                var o = this;
                if (!o._loaded) {
                    o.on("play", function () {
                        o.pause(e)
                    });
                    return o
                }
                o._clearEndTimer(e);
                var n = e ? o._nodeById(e) : o._activeNode();
                if (n) {
                    n._pos = o.pos(null, e);
                    if (o._webAudio) {
                        if (!n.bufferSource || n.paused) {
                            return o
                        }
                        n.paused = true;
                        if (typeof n.bufferSource.stop === "undefined") {
                            n.bufferSource.noteOff(0)
                        } else {
                            n.bufferSource.stop(0)
                        }
                    } else {
                        n.pause()
                    }
                }
                o.on("pause");
                return o
            },
            stop: function (e) {
                var o = this;
                if (!o._loaded) {
                    o.on("play", function () {
                        o.stop(e)
                    });
                    return o
                }
                o._clearEndTimer(e);
                var n = e ? o._nodeById(e) : o._activeNode();
                if (n) {
                    n._pos = 0;
                    if (o._webAudio) {
                        if (!n.bufferSource || n.paused) {
                            return o
                        }
                        n.paused = true;
                        if (typeof n.bufferSource.stop === "undefined") {
                            n.bufferSource.noteOff(0)
                        } else {
                            n.bufferSource.stop(0)
                        }
                    } else if (!isNaN(n.duration)) {
                        n.pause();
                        n.currentTime = 0
                    }
                }
                return o
            },
            mute: function (e) {
                var o = this;
                if (!o._loaded) {
                    o.on("play", function () {
                        o.mute(e)
                    });
                    return o
                }
                var n = e ? o._nodeById(e) : o._activeNode();
                if (n) {
                    if (o._webAudio) {
                        n.gain.value = 0
                    } else {
                        n.muted = true
                    }
                }
                return o
            },
            unmute: function (e) {
                var o = this;
                if (!o._loaded) {
                    o.on("play", function () {
                        o.unmute(e)
                    });
                    return o
                }
                var n = e ? o._nodeById(e) : o._activeNode();
                if (n) {
                    if (o._webAudio) {
                        n.gain.value = o._volume
                    } else {
                        n.muted = false
                    }
                }
                return o
            },
            volume: function (e, o) {
                var n = this;
                e = parseFloat(e);
                if (e >= 0 && e <= 1) {
                    n._volume = e;
                    if (!n._loaded) {
                        n.on("play", function () {
                            n.volume(e, o)
                        });
                        return n
                    }
                    var r = o ? n._nodeById(o) : n._activeNode();
                    if (r) {
                        if (n._webAudio) {
                            r.gain.value = e
                        } else {
                            r.volume = e * f.volume()
                        }
                    }
                    return n
                } else {
                    return n._volume
                }
            },
            loop: function (e) {
                var o = this;
                if (typeof e === "boolean") {
                    o._loop = e;
                    return o
                } else {
                    return o._loop
                }
            },
            sprite: function (e) {
                var o = this;
                if (typeof e === "object") {
                    o._sprite = e;
                    return o
                } else {
                    return o._sprite
                }
            },
            pos: function (e, n) {
                var r = this;
                if (!r._loaded) {
                    r.on("load", function () {
                        r.pos(e)
                    });
                    return typeof e === "number" ? r : r._pos || 0
                }
                e = parseFloat(e);
                var t = n ? r._nodeById(n) : r._activeNode();
                if (t) {
                    if (e >= 0) {
                        r.pause(n);
                        t._pos = e;
                        r.play(t._sprite, n);
                        return r
                    } else {
                        return r._webAudio ? t._pos + (o.currentTime - r._playStart) : t.currentTime
                    }
                } else if (e >= 0) {
                    return r
                } else {
                    for (var i = 0; i < r._audioNode.length; i++) {
                        if (r._audioNode[i].paused && r._audioNode[i].readyState === 4) {
                            return r._webAudio ? r._audioNode[i]._pos : r._audioNode[i].currentTime
                        }
                    }
                }
            },
            pos3d: function (e, o, n, r) {
                var t = this;
                o = typeof o === "undefined" || !o ? 0 : o;
                n = typeof n === "undefined" || !n ? -.5 : n;
                if (!t._loaded) {
                    t.on("play", function () {
                        t.pos3d(e, o, n, r)
                    });
                    return t
                }
                if (e >= 0 || e < 0) {
                    if (t._webAudio) {
                        var i = r ? t._nodeById(r) : t._activeNode();
                        if (i) {
                            t._pos3d = [e, o, n];
                            i.panner.setPosition(e, o, n);
                            i.panner.panningModel = t._model || "HRTF"
                        }
                    }
                } else {
                    return t._pos3d
                }
                return t
            },
            fade: function (e, o, n, r, t) {
                var i = this,
                    a = Math.abs(e - o),
                    u = e > o ? "down" : "up",
                    d = a / .01,
                    f = n / d;
                if (!i._loaded) {
                    i.on("load", function () {
                        i.fade(e, o, n, r, t)
                    });
                    return i
                }
                i.volume(e, t);
                for (var l = 1; l <= d; l++) {
                    (function () {
                        var e = i._volume + (u === "up" ? .01 : -.01) * l,
                            n = Math.round(1e3 * e) / 1e3,
                            a = o;
                        setTimeout(function () {
                            i.volume(n, t);
                            if (n === a) {
                                if (r) r()
                            }
                        }, f * l)
                    })()
                }
            },
            fadeIn: function (e, o, n) {
                return this.volume(0).play().fade(0, e, o, n)
            },
            fadeOut: function (e, o, n, r) {
                var t = this;
                return t.fade(t._volume, e, o, function () {
                    if (n) n();
                    t.pause(r);
                    t.on("end")
                }, r)
            },
            _nodeById: function (e) {
                var o = this,
                    n = o._audioNode[0];
                for (var r = 0; r < o._audioNode.length; r++) {
                    if (o._audioNode[r].id === e) {
                        n = o._audioNode[r];
                        break
                    }
                }
                return n
            },
            _activeNode: function () {
                var e = this,
                    o = null;
                for (var n = 0; n < e._audioNode.length; n++) {
                    if (!e._audioNode[n].paused) {
                        o = e._audioNode[n];
                        break
                    }
                }
                e._drainPool();
                return o
            },
            _inactiveNode: function (e) {
                var o = this,
                    n = null;
                for (var r = 0; r < o._audioNode.length; r++) {
                    if (o._audioNode[r].paused && o._audioNode[r].readyState === 4) {
                        e(o._audioNode[r]);
                        n = true;
                        break
                    }
                }
                o._drainPool();
                if (n) {
                    return
                }
                var t;
                if (o._webAudio) {
                    t = o._setupAudioNode();
                    e(t)
                } else {
                    o.load();
                    t = o._audioNode[o._audioNode.length - 1];
                    var i = navigator.isCocoonJS ? "canplaythrough" : "loadedmetadata";
                    var a = function () {
                        t.removeEventListener(i, a, false);
                        e(t)
                    };
                    t.addEventListener(i, a, false)
                }
            },
            _drainPool: function () {
                var e = this,
                    o = 0,
                    n;
                for (n = 0; n < e._audioNode.length; n++) {
                    if (e._audioNode[n].paused) {
                        o++
                    }
                }
                for (n = e._audioNode.length - 1; n >= 0; n--) {
                    if (o <= 5) {
                        break
                    }
                    if (e._audioNode[n].paused) {
                        if (e._webAudio) {
                            e._audioNode[n].disconnect(0)
                        }
                        o--;
                        e._audioNode.splice(n, 1)
                    }
                }
            },
            _clearEndTimer: function (e) {
                var o = this,
                    n = 0;
                for (var r = 0; r < o._onendTimer.length; r++) {
                    if (o._onendTimer[r].id === e) {
                        n = r;
                        break
                    }
                }
                var t = o._onendTimer[n];
                if (t) {
                    clearTimeout(t.timer);
                    o._onendTimer.splice(n, 1)
                }
            },
            _setupAudioNode: function () {
                var e = this,
                    n = e._audioNode,
                    r = e._audioNode.length;
                n[r] = typeof o.createGain === "undefined" ? o.createGainNode() : o.createGain();
                n[r].gain.value = e._volume;
                n[r].paused = true;
                n[r]._pos = 0;
                n[r].readyState = 4;
                n[r].connect(i);
                n[r].panner = o.createPanner();
                n[r].panner.panningModel = e._model || "equalpower";
                n[r].panner.setPosition(e._pos3d[0], e._pos3d[1], e._pos3d[2]);
                n[r].panner.connect(n[r]);
                return n[r]
            },
            on: function (e, o) {
                var n = this,
                    r = n["_on" + e];
                if (typeof o === "function") {
                    r.push(o)
                } else {
                    for (var t = 0; t < r.length; t++) {
                        if (o) {
                            r[t].call(n, o)
                        } else {
                            r[t].call(n)
                        }
                    }
                }
                return n
            },
            off: function (e, o) {
                var n = this,
                    r = n["_on" + e],
                    t = o ? o.toString() : null;
                if (t) {
                    for (var i = 0; i < r.length; i++) {
                        if (t === r[i].toString()) {
                            r.splice(i, 1);
                            break
                        }
                    }
                } else {
                    n["_on" + e] = []
                }
                return n
            },
            unload: function () {
                var o = this;
                var n = o._audioNode;
                for (var r = 0; r < o._audioNode.length; r++) {
                    if (!n[r].paused) {
                        o.stop(n[r].id);
                        o.on("end", n[r].id)
                    }
                    if (!o._webAudio) {
                        n[r].src = ""
                    } else {
                        n[r].disconnect(0)
                    }
                }
                for (r = 0; r < o._onendTimer.length; r++) {
                    clearTimeout(o._onendTimer[r].timer)
                }
                var t = f._howls.indexOf(o);
                if (t !== null && t >= 0) {
                    f._howls.splice(t, 1)
                }
                delete e[o._src];
                o = null
            }
        };
        if (n) {
            var s = function (o, n) {
                if (n in e) {
                    o._duration = e[n].duration;
                    c(o);
                    return
                }
                if (/^data:[^;]+;base64,/.test(n)) {
                    var r = atob(n.split(",")[1]);
                    var t = new Uint8Array(r.length);
                    for (var i = 0; i < r.length; ++i) {
                        t[i] = r.charCodeAt(i)
                    }
                    _(t.buffer, o, n)
                } else {
                    var a = new XMLHttpRequest;
                    a.open("GET", n, true);
                    a.responseType = "arraybuffer";
                    a.onload = function () {
                        _(a.response, o, n)
                    };
                    a.onerror = function () {
                        if (o._webAudio) {
                            o._buffer = true;
                            o._webAudio = false;
                            o._audioNode = [];
                            delete o._gainNode;
                            delete e[n];
                            o.load()
                        }
                    };
                    try {
                        a.send()
                    } catch (u) {
                        a.onerror()
                    }
                }
            };
            var _ = function (n, r, t) {
                o.decodeAudioData(n, function (o) {
                    if (o) {
                        e[t] = o;
                        c(r, o)
                    }
                }, function (e) {
                    r.on("loaderror")
                })
            };
            var c = function (e, o) {
                e._duration = o ? o.duration : e._duration;
                if (Object.getOwnPropertyNames(e._sprite).length === 0) {
                    e._sprite = {
                        _default: [0, e._duration * 1e3]
                    }
                }
                if (!e._loaded) {
                    e._loaded = true;
                    e.on("load")
                }
                if (e._autoplay) {
                    e.play()
                }
            };
            var p = function (n, r, t) {
                var i = n._nodeById(t);
                i.bufferSource = o.createBufferSource();
                i.bufferSource.buffer = e[n._src];
                i.bufferSource.connect(i.panner);
                i.bufferSource.loop = r[0];
                if (r[0]) {
                    i.bufferSource.loopStart = r[1];
                    i.bufferSource.loopEnd = r[1] + r[2]
                }
                i.bufferSource.playbackRate.value = n._rate
            }
        }
        if (typeof define === "function" && define.amd) {
            define(function () {
                return {
                    Howler: f,
                    Howl: l
                }
            })
        }
        if (typeof exports !== "undefined") {
            exports.Howler = f;
            exports.Howl = l
        }
        if (typeof window !== "undefined") {
            window.Howler = f;
            window.Howl = l
        }
    })();
    /*!
    kernel.js
    Writen, concatened, modified, optimised, fixed (or wasted) with ♥ by @zombectro
    */
    ! function (e, t) {
        if (typeof module != "undefined") module.exports = t();
        else if (typeof define == "function" && typeof define.amd == "object") define(t);
        else this[e] = t()
    }
    ("$io", function () {
        "use strict";
        var e = Object.prototype.toString,
            t = Function.prototype.toString,
            n = Object.prototype.hasOwnProperty,
            i = Array.prototype.slice;

        function o(e) {
            this.val = e;
            this.type = x(e);
            this.get = function () {
                return this.val
            };
            this.is = function (e) {
                var t = -1,
                    n = e.length;
                while (++t < n)
                    if (this.type == e[t]) return true;
                return false
            };
            this.isNot = function (e) {
                var t = -1,
                    n = e.length;
                while (++t < n)
                    if (this.type == e[t]) return false;
                return true
            }
        }

        function r(e) {
            return new o(e)
        }

        function a(t) {
            return e.call(t).slice(8, -1)
        }

        function s(t) {
            return t ? t.constructor.name || e.call(t).slice(8, -1) : t === null ? "Null" : "Undefined"
        }
        r.type = a;
        var l = y(Array.isArray) ? Array.isArray : function (t) {
            return t && typeof t == "object" && typeof t.length == "number" && e.call(t) == "[object Array]" || false
        };

        function u(e) {
            return typeof e == "string" || false
        }

        function c(e) {
            return typeof e == "function" || false
        }

        function f(t) {
            return t && (typeof t !== "object" || t === null) ? false : e.call(t) == "[object Object]"
        }

        function d(e) {
            return typeof e == "number" && isFinite(e) || false
        }

        function p(t) {
            return t && typeof t == "object" && e.call(t) == "[object RegExp]" || false
        }

        function m(t) {
            return t && (typeof t.length == "number" && e.call(t) == "[object Arguments]") || false
        }

        function h(t) {
            return e.call(t) == "[object Number]" && t != +t
        }

        function g(t) {
            return e.call(t) == "[object Number]" && !isFinite(t)
        }

        function y(e) {
            return c(e) && ("" + e).indexOf("[native code]") >= 0
        }

        function v(t) {
            var n;
            return t && typeof t == "object" && e.call(t) == "[object Error]" || false
        }

        function w(e) {
            var t;
            return e && (t = e.constructor) && typeof t == "function" && t.prototype == e
        }

        function b(e) {
            return e && e.nodeType === 1 || false
        }

        function _(t) {
            var n = e.call(t);
            return n == "[object global]" || n == "[object Window]" || n == "[object DOMWindow]"
        }

        function $(t) {
            var n = e.call(t);
            return typeof t === "object" && (n == "[object HTMLCollection]" || n == "[object NodeList]" || n == "[object Object]" && t.hasOwnProperty("length") && (t.length === 0 || typeof t[0] === "object" && t[0].nodeType > 0))
        }

        function x(t) {
            var n = typeof t;
            return n == "string" ? "String" : n == "boolean" ? "Boolean" : n == "function" || false ? "Function" : t === null ? "Null" : t === undefined ? "Undefined" : d(t) ? "Number" : h(t) ? "NaN" : b(t) ? "Element" : l(t) ? "Array" : m(t) ? "Arguments" : g(t) ? "Infinity" : v(t) ? "Error" : t.constructor.name || e.call(t).slice(8, -1)
        }
        r.is = x;
        r.is.arr = r.isArray = l;
        r.is.str = r.isString = u;
        r.is.fun = r.isFunction = c;
        r.is.obj = r.isObject = f;
        r.is.num = r.isNumber = d;
        r.is.reg = r.isRegExp = p;
        r.is.arg = r.isArguments = m;
        r.is.inf = r.isInfinity = g;
        r.is.nat = r.isNative = y;
        r.is.err = r.isError = v;
        r.is.pro = r.isPrototype = w;
        r.is.ele = r.isElement = b;
        r.is.win = r.isWindow = _;
        r.is.nodelist = r.isNodeList = $;

        function C(e) {
            if (!e) return [];
            return Object.keys(e)
        }

        function E(e, t) {
            var n;
            for (n in e) {
                aI = e[n];
                bI = t[n];
                if (e.hasOwnProperty(n) != t.hasOwnProperty(n)) return false;
                if (typeof aI != typeof bI) return false
            }
            for (n in t) {
                aI = e[n];
                bI = t[n];
                if (!e.hasOwnProperty(n)) return false;
                if (aI === bI) continue;
                if (typeof aI != typeof bI) return false;
                if (!t.hasOwnProperty(n)) continue;
                else if (l(aI) && l(bI) && O(aI, bI)) continue;
                else if (f(aI) && f(bI) && E(aI, bI)) continue;
                return false
            }
            return true
        }

        function L(e, t) {
            var n;
            for (n in e)
                if (e.hasOwnProperty(n)) t(e[n], n)
        }

        function k(e, t) {
            var n;
            for (n in e)
                if (e.hasOwnProperty(n)) {
                    if (t(e[n], n) === false) break
                }
        }

        function N(e) {
            try {
                return JSON.stringify(e, null, 2)
            } catch (t) {
                try {
                    var n = [];
                    $io.arr.all(e, function (e) {
                        n.push(e)
                    });
                    return "[" + n.join(", ") + "]"
                } catch (i) {
                    return "[Error]"
                }
            }
        }

        function j(e, t, n) {
            var i = 0,
                o = $io.reg.escape(n),
                r = new RegExp("^" + o + "|" + o + "$", "gi"),
                a;
            n = n || ".";
            t = t.replace(r, "").split(n);
            while (e && i < t.length) e = e[t[i++]];
            return e
        }

        function I(e, t, n) {
            var i = 0,
                o = $io.reg.escape(n),
                r = new RegExp("^" + o + "|" + o + "$", "gi"),
                a;
            n = n || ".";
            t = t.replace(r, "").split(n);
            while (e && i < t.length) {
                if (e[t[i]]) {
                    e = e[t[i]]
                } else {
                    e = e[t[i]] = {}
                }
                i++
            }
            return e
        }
        r.obj = r.Object = {};
        r.obj.all = L;
        r.obj.each = k;
        r.obj.equal = E;
        r.obj.str = N;
        r.obj.getPath = j;
        r.obj.setPath = I;

        function O(e, t) {
            var n = e.length;
            if (n != t.length) return false;
            while (n--) {
                aI = e[n];
                bI = t[n];
                if (aI === bI) continue;
                else if (l(aI) && l(bI) && O(aI, bI)) continue;
                else if (f(aI) && f(bI) && E(aI, bI)) continue;
                return false
            }
            return true
        }

        function T(e, t) {
            var n = -1,
                i = e.length;
            while (++n < i) t(e[n])
        }

        function A(e, t) {
            var n = -1,
                i = e.length;
            while (++n < i)
                if (t(e[n], n) === false) break
        }

        function M(e, t, n) {
            var i = n;
            for (var o = 0, r = e.length; o < r; o++) {
                i = t(i, e[o], o, e)
            }
            return i
        }

        function S(e) {
            return e[Math.floor(Math.random() * e.length)]
        }
        r.arr = r.Array = {};
        r.arr.all = T;
        r.arr.each = A;
        r.arr.equal = O;
        r.arr.reduce = M;
        r.arr.random = S;
        r.str = {};
        r.str.truncate = function (e, t) {
            return e.length > t ? e.slice(0, t) + "..." : e
        };
        r.str.slug = function (e) {
            return e.toLowerCase().replace(/ +/g, "-").replace(/[^-\w]/g, "")
        };
        r.str.trim = function (e) {
            var t, n;
            for (t = 0, n = e.length - 1; t <= n; t++) {
                if (e.charCodeAt(t) < 33) continue;
                else break
            }
            for (; n >= t; n--) {
                if (e.charCodeAt(n) < 33) continue;
                else break
            }
            return e.substring(t, n + 1)
        };
        r.str.camel = function (e) {
            return e.replace(/(\-[a-z])/g, function (e) {
                return e.toUpperCase().replace("-", "")
            })
        };
        r.str.dash = function (e) {
            return e.replace(/([A-Z])/g, function (e) {
                return "-" + e.toLowerCase()
            })
        };
        r.str.autolink = function (e) {
            var t = [],
                n = 0;
            return e.replace(/(?:\(((?:https?:\/\/|www\.)[-A-Za-z0-9+$&@#\/%?=~_()|!:,.;]*[-A-Za-z0-9+$&@#\/%=~_()|])\))/gm, function (e, n) {
                t.push(n);
                return "_links_in_parens___ktlu_"
            }).replace(/((?:https?:\/\/|www\.)[-A-Za-z0-9+$&@#\/%?=~_()|!:,.;]*[-A-Za-z0-9+$&@#\/%=~_()|])/gm, function (e) {
                return '<a target="_blank" href="' + (e.indexOf("www.") == 0 ? "http://" + e : e) + '">' + e + "</a>"
            }).replace(/(^|[^@\w])@(\w{1,15})\b/g,
                '$1<a target="_blank" href="http://twitter.com/$2">@$2</a>').replace(/([\w.]*\w@[\w.]+\w)/gm,
                '<a href="mailto:$1">$1</a>').replace(/_links_in_parens___ktlu_/g, function () {
                var e = t[n++];
                return '(<a target="_blank" href="' + e + '">' + e + "</a>)"
            })
        };

        function z(e, t) {
            "use strict";
            if (!e || typeof e != "function") return "_not_a_function_";
            return t(e)
        }

        function H(e, t) {
            return z(e, function () {
                var n = t ? /^function[\W\w]*?{/ : null,
                    i = t ? /\s+\}$/ : null,
                    o = e.toString().replace(n, "").replace(i, ""),
                    a = o.match(/(^\s*)/gm),
                    s = a ? a.length > 1 ? a.slice(1).reduce(function (e, t) {
                        return e.length < t.length ? e : t
                    }) : a[0] : "";
                return r.str.trim(o.replace(new RegExp("^" + o.match(s), "gm"), "").replace(/^\t/gm, "  "))
            })
        }

        function R(e) {
            if (e.name) return e.name;
            return z(e, function () {
                var t = e.toString().match(/^\s*function ([^\(\s]+)/);
                return t && t[1] || "anonymous"
            })
        }

        function D(e) {
            if (!e.length) return [];
            return z(e, function () {
                var t = e.toString().replace(/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, ""),
                    n = t.slice(t.indexOf("(") + 1, t.indexOf(")")).match(/([^\s,]+)/g);
                return n === null ? [] : n
            })
        }
        r.fn = {};
        r.fn.str = H;
        r.fn.outer = H;
        r.fn.inner = function (e) {
            return H(e, true)
        };
        r.fn.name = R;
        r.fn.arg = D;
        r.fn.prop = r.fn.keys = function q(e) {
            if (!e) return [];
            return Object.keys(e)
        };
        r.fn.method = r.fn.meth = function (e) {
            var t = C(e),
                n = -1,
                i = t.length,
                o = {};
            while (++n < i) {
                o[t[n]] = e[t[n]]
            }
            return o
        };
        r.fn.throttle = function (e, t) {
            var n = false;
            return function () {
                if (!n) {
                    e.apply(this, arguments);
                    n = true;
                    setTimeout(function () {
                        n = false
                    }, t)
                }
            }
        };
        r.fn.debounce = function (e, t) {
            var n;
            return function () {
                var i = this,
                    o = arguments;
                clearTimeout(n);
                n = setTimeout(function () {
                    e.apply(i, o)
                }, t)
            }
        };

        function P(e) {
            return i.call(e)
        }
        r.arg = {};
        r.arg.arr = P;
        r.reg = {};
        r.reg.escape = function (e) {
            return e.replace(/[-[\]{}()*+?.\\^$|]/g, "\\$&")
        };
        r.each = function (e, t, i) {
            if (e) {
                if (f(e)) {
                    for (var o in e) {
                        if (n.call(e, o)) {
                            if (t.call(i, e[o], o, e) === false) break
                        }
                    }
                } else {
                    for (var o = 0, r = e.length; o < r; o++) {
                        if (t.call(i, e[o], o, e) === false) break
                    }
                }
            }
        };
        return r
    });
    var $url = {
        query: function () {
            var e = {};
            var t = window.location.search.substring(1);
            var n = t.split("&");
            for (var i = 0; i < n.length; i++) {
                var o = n[i].split("=");
                if (typeof e[o[0]] === "undefined") {
                    e[o[0]] = o[1]
                } else if (typeof e[o[0]] === "string") {
                    var r = [e[o[0]], o[1]];
                    e[o[0]] = r
                } else {
                    e[o[0]].push(o[1])
                }
            }
            return e
        }(),
        parseQuery: function (e) {
            return $io.arr.reduce(e.replace("?", "").split("&"), function (e, t) {
                var n = t.indexOf("="),
                    i = t.slice(0, n),
                    o = t.slice(++n);
                e[i] = decodeURIComponent(o);
                return e
            }, {})
        },
        getExtention: function (e) {
            var t = e.match(/(?:\.)([0-9a-z]+)(?:[!?].+)?$/);
            return t && t[1] ? t[1] : ""
        },
        getDomain: function (e) {
            var t = e.match(/:\/\/(.[^/]+)/);
            if (t != null && t.length >= 2) {
                return t[1]
            } else {
                return null
            }
        },
        checkImage: function (e, t) {
            var n = new Image;
            n.onload = i;
            n.onerror = i;
            n.onabort = i;
            n.src = e;

            function i() {
                if (n.width > 0) t(true, n);
                else t(false, n)
            }
        },
        checkFavicon: function (e, t) {
            if (e && $io.str.trim(e) != "") {
                var n = $url.getDomain(e),
                    i;
                if (n) {
                    $url.checkImage(i = "http://" + n + "/favicon.ico", function (e) {
                        if (e) t(true, i);
                        else $url.checkImage(i = "http://" + n + "/favicon.gif", function (e) {
                            if (e) t(true, i);
                            else $url.checkImage(i = "http://" + n + "/favicon.png", function (e) {
                                if (e) t(true, i);
                                else t(false)
                            })
                        })
                    })
                }
            }
        }
    };
    var $dom = {
        getSelection: function () {
            var e = "";
            if (window.getSelection) {
                e = window.getSelection().toString()
            } else if (document.selection && document.selection.type != "Control") {
                e = document.selection.createRange().text
            }
            return e
        }
    };

    function $noop() {}! function (e) {
        "use strict";
        var t = Object.prototype.toString,
            n = Object.prototype.hasOwnProperty,
            i = Array.prototype.slice;
        e["$is"] = function o(e, n) {
            return n ? t.call(e).indexOf("[object " + n) == 0 : t.call(e).replace(/\[object |\]/g, "")
        };
        e["$slice"] = function r(e, t, n) {
            var o = t && n ? [t, n] : t ? [t] : [1];
            return i.apply(e, o)
        };
        e["$extend"] = function a(e) {
            var t, o, r, s;
            if (typeof e == "boolean" || typeof e == "string") {
                t = i.call(arguments, 1);
                e = e === true ? "deep" : e
            } else {
                t = arguments;
                e = false
            }
            o = t[0];
            for (r = 1, s = t.length; r < s; r++) {
                var l = t[r];
                for (var u in l) {
                    var c = l[u];
                    if (e == "strict" && !n.call(o, u)) continue;
                    if (e == "deep" && typeof c === "object" && typeof o[u] !== "undefined") a(e, o[u], c);
                    else o[u] = c
                }
            }
            return o
        }
    }(this);

    function $watch(e, t) {
        "use strict";
        var n = {};
        var i = Array.prototype.slice;
        var t = t;
        e.observers = n;
        e.on = function (e, t) {
            e.replace(/\S+/g, function (e, i) {
                (n[e] = n[e] || []).push(t)
            });
            return t
        };
        e.off = function (e, t) {
            if (e === "*") n = {};
            else if (t) {
                var i = n[e];
                for (var o = 0, r; r = i && i[o]; ++o) {
                    if (r === t) {
                        i.splice(o, 1);
                        o--
                    }
                }
            } else {
                e.replace(/\S+/g, function (e) {
                    n[e] = []
                })
            }
            return t
        };
        e.trigger = function (e) {
            var i = n[e],
                o = $slice(arguments);
            if (i) {
                for (var r = 0, a = i.length; r < a; r++) {
                    i[r].apply(t, o)
                }
            }
            var s = {
                done: function (e) {
                    if (typeof e == "function") e.call(t)
                },
                trigger: this.trigger
            };
            return s
        };
        e.scope = function (e) {
            t = e
        };
        return e
    }

    function $chain() {
        "use strict";

        function e(e, t, n) {
            Object.defineProperty(e, n, {
                get: function () {
                    var e = t();
                    return e === undefined ? this : e
                }
            })
        }

        function t(e, t, n) {
            e[n] = function () {
                var e = t.apply(this, arguments);
                return e === undefined ? this : e
            }
        }

        function n(i, o, r) {
            if ($is(o, "Object")) {
                $io.obj.all(o, function (n, o) {
                    if (r === true) e(i, n, o);
                    else t(i, n, o);
                    if (r === "both") {
                        e(i, n, o);
                        t(i, n, o)
                    }
                })
            }
            return $is(r, "Object") ? n(i, r, true) : i
        }
        var i = n.apply(null, arguments);
        i["prop"] = function (e) {
            return n(this, e, true)
        };
        i["meth"] = function (e) {
            return n(this, e)
        };
        return i
    }! function (e, t) {
        if (typeof module != "undefined") module.exports = t();
        else if (typeof define == "function" && typeof define.amd == "object") define(t);
        else this[e] = t()
    }
    ("$key", function () {
        "use strict";
        var e = 0,
            t = {},
            n = {},
            i = {},
            o = {
                shift: false,
                alt: false,
                ctrl: false,
                meta: false
            },
            r = {
                0: "\\",
                8: "backspace",
                9: "tab",
                12: "num",
                13: "enter",
                16: "shift",
                17: "ctrl",
                18: "alt",
                19: "pause",
                20: "caps",
                27: "esc",
                32: "space",
                33: "pageup",
                34: "pagedown",
                35: "end",
                36: "home",
                37: "left",
                38: "up",
                39: "right",
                40: "down",
                44: "print",
                45: "insert",
                46: "delete",
                91: "cmd",
                92: "cmd",
                93: "cmd",
                106: "num_multiply",
                107: "num_add",
                108: "num_enter",
                109: "num_subtract",
                110: "num_decimal",
                111: "num_divide",
                124: "print",
                144: "num",
                145: "scroll",
                224: "cmd",
                225: "altgr",
                57392: "ctrl",
                63289: "num"
            };
        for (var a = 1; a < 20; ++a) r[111 + a] = "f" + a;
        for (a = 0; a <= 9; ++a) r[a + 96] = "num_" + a;
        for (var s in r) {
            if (r.hasOwnProperty(s)) {
                var l = r[s];
                if (i[l]) i[l].push(s);
                else i[l] = [s]
            }
        }

        function u(e) {
            if (e.preventDefault) e.preventDefault();
            else e.returnValue = false;
            if (e.stopPropagation) e.stopPropagation();
            else e.cancelBubble = true;
            e.stopImmediatePropagation()
        }
        var c;

        function f(e) {
            e = e || window.event;
            if (typeof e.which !== "number") e.which = e.keyCode;
            var t, i, o;
            if (e.type == "keydown") {
                i = String.fromCharCode(e.which).toLowerCase();
                if (r[e.which]) {
                    t = r[e.which];
                    c = t === "shift" ? null : t
                }
                if (n["ctrl"] || n["shift"] || n["cmd"] || n["meta"] || n["alt"] || n["altgr"]) {
                    t = t || i
                }
                n[t || i] = true
            }
            if (e.type == "keypress" && !c) {
                t = String.fromCharCode(e.which)
            }
            if (e.type == "keyup") {
                c = null;
                o = String.fromCharCode(e.which).toLowerCase();
                if (r[e.which]) o = r[e.which];
                n[o] = false
            }
            if (t) d(t, e.which, e)
        }

        function d(e, n, i) {
            var o;
            if (o = t[i.target.getAttribute("data-keyboard-id")]) {
                if (o.call(i.target, e, n, i) === false) {
                    u(i)
                }
            } else if (p) {
                if (p(e, n, i) === false) {
                    u(i)
                }
            }
        }
        var p, m = document.documentElement;
        m.addEventListener("keydown", f, false);
        m.addEventListener("keypress", f, false);
        m.addEventListener("keyup", f, false);
        var h = function (i, o) {
            if (typeof i == "string") {
                return n[i]
            }
            if (typeof i == "function") {
                p = i
            }
            if (i && typeof o == "function") {
                t[++e] = o;
                i.setAttribute("data-keyboard-id", e);
                if (!i.getAttribute("tabindex")) i.setAttribute("tabindex", "0");
                i.addEventListener("keydown", f, false);
                i.addEventListener("keypress", f, false);
                i.addEventListener("keyup", f, false)
            }
        };
        h.up = function (e, t) {
            if (e && typeof t == "function") {
                if (!e.getAttribute("tabindex")) e.setAttribute("tabindex", "0");
                e.addEventListener("keyup", function (e) {
                    e = e || window.event;
                    if (typeof e.which !== "number") e.which = e.keyCode;
                    var n = String.fromCharCode(e.which).toLowerCase();
                    if (r[e.which]) {
                        n = r[e.which]
                    }
                    if (t(n, e) === false);
                }, false)
            }
        };
        h.down = function (e, t) {
            if (e && typeof t == "function") {
                if (!e.getAttribute("tabindex")) e.setAttribute("tabindex", "0");
                e.addEventListener("keydown", function (e) {
                    e = e || window.event;
                    if (typeof e.which !== "number") e.which = e.keyCode;
                    var n = String.fromCharCode(e.which).toLowerCase();
                    if (r[e.which]) {
                        n = r[e.which]
                    }
                    if (t(n, e) === false);
                }, false)
            }
        };
        return h
    });
    ! function (e) {
        "use strict";
        var t, n = ["clear", "error", "error", "succes", "fail", "pass", "warn", "info", "bold", "italic", "blue", "green", "white", "yellow", "cyan", "magenta", "html", "autolink", "code", "pad", "right", "center", "repeat", "stack", "save", "stay", "id", "fast", "group", "noop", "obj", "end"],
            i = {
                el: null
            },
            o = {},
            r = "";
        for (var a = 0, s = n.length; a < s; a++) {
            i[n[a]] = "";
            o[n[a]] = function (e) {
                return function () {
                    i[e] = "1"
                }
            }(n[a])
        }

        function l(e) {
            if ($is(e, "String")) return e;
            if ($is(e, "Number")) return '<span class="sh_number">' + e + "</span>";
            if ($is(e, "Undefined")) return "Undefined";
            if ($is(e, "Null")) return "Null";
            if ($is(e, "Function")) return $hilit($io.fn.str(e));
            if ($is(e, "Object") || $is(e, "Array")) return $hilit($io.obj.str(e));
            if ($is(e.constructor, "Function")) return "<span class=sh_init>" + $is(e) + "</span> " + $hilit($io.obj.str(e), true);
            return e
        }

        function u(e, t) {
            for (var n in e) {
                var i = e[n];
                if (n == t) return;
                if (typeof i == "string" || typeof i == "number" || typeof i == "boolean") {
                    $log.pad(n, i + "", ".")
                } else if ($io.is.obj(i)) u(i, t)
            }
        }

        function c(e, n, o) {
            if (i.clear) {
                i.el.innerHTML = "";
                i.clear = "";
                return
            }
            if (i.repeat) e = e.repeat(i.cols), i.repeat = "";
            if (i.code) e = $hilit(e), i.code = "";
            if (i.pass) e = "✔ " + e, r += "ui-log-green", i.pass = "";
            if (i.fail) e = "✘ " + e, r += "ui-log-red", i.fail = "";
            if (i.info) e = "ℹ " + e, r += "ui-log__blue", i.info = "";
            if (i.white) r += "ui-log__white", i.white = "";
            if (i.yellow) r += "ui-log__yellow", i.yellow = "";
            if (i.cyan) r += "ui-log__cyan", i.cyan = "";
            if (i.magenta) r += "ui-log__magenta", i.magenta = "";
            if (i.blue) r += "ui-log__blue", i.blue = "";
            if (i.succes) r += "ui-log-green", i.succes = "";
            if (i.green) r += "ui-log-green", i.green = "";
            if (i.error) r += "ui-log-red", i.error = "";
            if (i.obj) {
                i.obj = "";
                u(e, n);
                return
            }
            if (i.pad) {
                var a;
                if (o) a = o;
                else a = n, n = "";
                var s = i.cols - 3 - (e.length + (n || "").length);
                e = e + a.repeat((3 + (s >= 0 ? s : 0)) / a.length) + n;
                i.pad = ""
            } else if (n) {
                var f = $io.arg.arr(arguments);
                e = f.join(", ")
            }
            if (!i.el) return;
            t = document.createElement("div");
            t.innerHTML = l(e);
            t.className = r;
            i.el.appendChild(t);
            c.trigger("addline");
            r = "";
            return t
        }
        c.config = function (e) {
            $extend(i, e);
            return c
        };
        $watch(c);
        e["$log"] = $chain(c, o, o)
    }(this);
    ! function (e) {
        "use strict";

        function t(e) {
            e.scrollTop = e.scrollHeight
        }

        function n(e) {
            e.style.height = e.scrollHeight + "px"
        }

        function i(e) {
            e.focus();
            var t, n;
            if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
                t = document.createRange(), n = window.getSelection();
                t.selectNodeContents(e);
                t.collapse(false);
                n.removeAllRanges();
                n.addRange(t)
            } else if (typeof document.body.createTextRange != "undefined") {
                t = document.body.createTextRange();
                t.moveToElementText(e);
                t.collapse(false);
                t.select()
            }
        }
        r.history = function () {
            return o
        };
        r.clearhistory = function () {
            o.length = 0
        };
        var o;

        function r(e) {
            var i = {
                    cols: 59,
                    el: document.body,
                    prompt: "$>",
                    history: o
                },
                r = $extend(i, e),
                a = document.createElement("code"),
                s = document.createElement("div"),
                l = document.createElement("div"),
                u = document.createElement("span"),
                c = document.createElement("textarea");
            if (!r.el) return;
            r.prompt += "&nbsp;";
            u.innerHTML = r.prompt;
            c.innerHTML = "";
            c.spellcheck = false;
            c.rows = "1";
            c.style.outline = "0 none";
            c.style.boxShadow = "0 0 transparent";
            c.style.textShadow = "0 0 transparent";
            c.style.border = "0 none";
            c.style.verticalAlign = "top";
            c.style.resize = "none";
            c.style.padding = "0";
            c.style.margin = "0";
            c.style.height = "auto";
            c.style.width = "100%";
            c.style.color = "inherit";
            c.style.font = "inherit";
            c.style.fontSize = "inherit";
            c.style.background = "transparent";
            c.style.overflow = "hidden";
            l.style.display = "table";
            l.style.tableLayout = "fixed";
            c.style.display = "table-cell";
            u.style.display = "table-cell";
            u.style.width = "1%";
            u.style.whiteSpace = "nowrap";
            l.appendChild(u);
            l.appendChild(c);
            a.appendChild(s);
            a.appendChild(l);
            a.style.display = "block";
            a.style.width = "100%";
            a.style.whiteSpace = "pre-wrap";
            a.style.wordBreak = "break-word";
            a.style.wordWrap = "break-word";
            r.el.appendChild(a);
            r.el.style.overflowY = "hidden";
            if (r.rows) r.el.style.height = r.rows + "em";

            function f() {
                $log.config({
                    cols: r.cols,
                    el: s
                })
            }

            function d() {
                if (!$dom.getSelection()) {
                    c.focus();
                    f()
                }
            }
            $log.on("addline", function () {
                t(r.el)
            });
            r.el.addEventListener("mouseup", d, false);
            r.el.addEventListener("contextmenu", d, false);
            c.addEventListener("mouseup", function (e) {
                if (e.stopPropagation) e.stopPropagation();
                else e.cancelBubble = true;
                e.stopImmediatePropagation();
                f()
            }, false);
            c.addEventListener("paste", function (e) {
                setTimeout(function () {
                    p(c)
                }, 0)
            }, false);

            function p(e) {
                n(e);
                t(r.el)
            }
            var m = 0;
            var h = false;
            $key(c, function (e, t, n) {
                p(this);
                var i = r.history.length;
                if (e == "enter") {
                    var o = $io.str.trim(this.value);
                    if (!o) return false;
                    this.value = "";
                    this.style.height = "auto";
                    m = 0;
                    if (y.onenter(o) === false) return;
                    $log(r.prompt + o);
                    if (r.history[i - 1] != o) r.history.push(o);
                    if (!$exe(o)) {
                        try {
                            $log(eval.call(window, o))
                        } catch (n) {
                            $log.error.autolink(n.message + " \n" + n.stack.replace(n.message, ""))
                        }
                    }
                    return false
                }
                if (!this.value) h = false;
                if (!h) {
                    if (e == "up") {
                        m++;
                        if (m > i) m = i;
                        this.value = r.history[i - m] || "";
                        p(this);
                        return false
                    }
                    if (e == "down") {
                        m--;
                        if (m < 0) m = 0;
                        this.value = r.history[i - m] || "";
                        p(this);
                        return false
                    }
                }
            });
            var g = $log.config({
                cols: r.cols,
                el: s
            });
            var y = {
                destroy: function () {
                    console.log("@todo : terminal destroy")
                },
                onenter: $noop,
                prompt: u,
                input: c,
                log: g
            };
            return y
        }
        e["$cli"] = r
    }(this);
    ! function (e) {
        "use strict";
        var t = {};

        function n() {}

        function i(e, t) {
            var n = [],
                i;
            $io.arr.each(e, function (e, o) {
                var r = 1;
                e = e.replace(/\.\.\//g, function () {
                    r++;
                    return ""
                });
                i = t.split("/").slice(0, -r).join("/");
                var a = i + "/" + e + ".js";
                n.push(a)
            });
            return n
        }

        function o(e) {
            setTimeout(function () {
                for (var t = 0, n = e.length; t < n; t++) {
                    var i = e[t];
                    if (i && i.nodeType) {
                        i.onload = i.onreadystatechange = i.onerror = i.onabort = null
                    }
                }
            }, 0)
        }

        function r(e) {}

        function a(e, n, i) {
            s++;
            var o = arguments.length;
            if (o == 1) {
                i = e;
                n = [];
                e = s
            } else if (o == 2) {
                i = n;
                if (typeof e == "string") {
                    n = []
                } else {
                    n = e;
                    e = s
                }
            }
            if (n.length) {
                t[e] = {
                    dep: n,
                    fac: i
                }
            } else {
                t[e] = i
            }
        }
        var s = 0;
        var l = 0;
        var u = 0;
        var c = {
            yo: "yo"
        };
        var f = {},
            d = {},
            p = [];
        var m, h;
        ! function () {
            var e = document.getElementsByTagName("script")[0];
            if (e) {
                m = e.parentNode;
                h = e
            } else {
                m = document.head || document.getElementsByTagName("head")[0];
                h = m.getElementsByTagName("base")[0] || null
            }
            var t = document.createComment("/// loaded with $loader ///");
            m.insertBefore(t, h)
        }();

        function g(e) {
            m.insertBefore(e, h)
        }
        window.$log = window.$log || n;
        var y;

        function v(e, n, r) {
            if ($is(e, "Object")) {
                var a = r;
                r = e;
                e = n;
                n = a
            }
            r = $extend({
                amd: true
            }, r);
            if (r.amd === false) {
                y = window["define"];
                window["define"] = null
            } else if (y) {
                window["define"] = y;
                y = null
            }
            var s = 0,
                m = e.length,
                h = [];

            function w(e, r, a) {
                if (e.couldBeAMD) {
                    var u = t[l + 1];
                    if (u) {
                        l++;
                        if (u.dep) {
                            (function (e, t) {
                                u.dep = i(u.dep, t.url);
                                v(u.dep, function () {
                                    f[t.url] = t.uid;
                                    p[t.uid] = h[t.i] = typeof u.fac == "function" ? u.fac.apply(null, arguments) : u.fac;
                                    t.couldBeAMD = false;
                                    w(t)
                                })
                            })(l, e);
                            return
                        } else {
                            f[e.url] = e.uid;
                            p[e.uid] = h[e.i] = typeof t[l] == "function" ? t[l].apply(null, ["require", "exports", "module"]) : t[l]
                        }
                    } else {
                        f[e.url] = e.uid;
                        p[e.uid] = h[e.i]
                    }
                } else {
                    f[e.url] = e.uid;
                    p[e.uid] = h[e.i]
                }
                if (r) {
                    $log.fail.pad(e.url, r, ".")
                } else {
                    $log.pass.pad(e.url, " ")
                }
                if (d[e.url].length) {
                    $io.arr.each(d[e.url], function (t, n) {
                        t && t.apply(c, [p[e.uid]])
                    });
                    d[e.url].length = 0
                }
                if (++s >= m) {}
            }
            $io.arr.each(e, function (t, i) {
                u++;
                if (!t) {
                    console.error("loader: One asset was undefined", e);
                    return
                }
                var o = false;
                if (t.indexOf("nocache!") > -1) {
                    o = true;
                    t = t.replace("nocache!", "")
                }
                var a = (r.baseUrl || "") + t,
                    s = $url.getExtention(a),
                    l, c = {
                        url: a,
                        type: s,
                        i: i,
                        uid: u
                    };

                function m(e, t) {
                    w(c, e, t)
                }
                if (d[a] && !f[a]) {
                    d[a].push(n);
                    return
                } else {
                    d[a] = []
                }
                if (!o && f[a]) {
                    c.uid = f[a];
                    h[i] = p[c.uid];
                    m();
                    return
                }
                if (/txt|html|php|json|xml/.test(s)) {
                    $ajax.get(a).done(function (e) {
                        h[c.i] = e;
                        m()
                    }).fail(function (e) {
                        m("ajax error: " + e.status + " " + e.statusText, arguments)
                    })
                } else if (/jpg|jpeg|gif|png|svg/.test(s)) {
                    h[i] = l = new Image;
                    l.id = "dynamicDeps_" + u;
                    l.className = "js_dynamic-deps";
                    l.onload = function () {
                        m()
                    };
                    l.onerror = function () {
                        m("image not loaded correctly", arguments)
                    };
                    l.onabort = function () {
                        m("image not loaded correctly (abort)", arguments)
                    };
                    l.src = a
                } else if (s === "css") {
                    h[i] = l = document.createElement("link");
                    l.id = "dynamicDeps_" + u;
                    l.className = "js_dynamic-deps";
                    l.charset = "utf-8";
                    l.rel = "stylesheet";
                    l.href = a;
                    g(l);
                    m()
                } else if (s === "js" || s === "" && r.amd) {
                    c.couldBeAMD = true;
                    h[i] = l = document.createElement("script");
                    l.id = "dynamicDeps_" + u;
                    l.className = "js_dynamic-deps";
                    l.type = "text/javascript";
                    l.charset = "utf-8";
                    l.async = r.amd;
                    l.defer = true;
                    l.onload = l.onreadystatechange = function (e, t) {
                        if (!l.readyState || /loaded|complete/.test(l.readyState)) {
                            if (t) {
                                m("script not loaded correctly (abort)", arguments)
                            } else {
                                m()
                            }
                        }
                    };
                    l.onerror = function () {
                        m("script not loaded correctly", arguments)
                        location.reload();
                    };
                    g(l);
                    l.src = a
                } else if (/mp3|opus|ogg|wav|aac|m4a|mp4|weba/.test(s)) {
                    h[i] = l = $sound({
                        urls: [a],
                        buffer: false,
                        onload: function () {
                            m()
                        },
                        onloaderror: function () {
                            m("sound not loaded correctly", arguments)
                        }
                    })
                } else {
                    m("unknown dependencies format")
                }
            })
        }
        r["factories"] = t;
        a["amd"] = {
            plugins: false,
            jQuery: false,
            $loader: {
                version: "0.3.0",
                config: function (e) {}
            }
        };
        e["define"] = a;
        e["require"] = r;
        e["$loader"] = v
    }(this);
    ! function (e) {
        "use strict";
        var n = {
            load: function (e, t) {
                $loader(e, function () {
                    t.apply(n, arguments)
                })
            },
            _states: {
                opened: {}
            },
            _data: {
                _tree: {}
            }
        };

        function t(e, i) {
            if ($io.is.obj(e) || !e) {
                $extend(n, e);
                t.scope(n)
            }
            if (typeof e == "string" && i && typeof i == "function") t.on(e, i);
            else if (typeof e == "string" && !i) {
                t.trigger(e);
                return n[e]
            } else if (typeof e == "function") t.on("ready", e);
            else if (e instanceof Array && typeof i == "function") {
                t.on("ready", function () {
                    n.load(e, i)
                })
            }
        }
        e["system42"] = $watch(t)
    }(window);
    system42(function () {
        var e = this,
            n = e._apps;

        function t(n) {
            var t = $url.getDomain(n.url);
            if (t && location.hostname != t) {
                $url.checkFavicon(n.url, function (e, t) {
                    if (e) n.icon = t;
                    else if (img) n.icon = img.src;
                    $window(n)
                })
            } else {
                if (n.url.slice(-1) === "/") {
                    $explorer(n.url)
                } else {
                    var i = $url.getExtention(n.url);
                    var o = a.getDefaultApp(i);
                    if (o) o.call(e, n);
                    else if (i || n.url.indexOf("c/") > -1) $window(n)
                }
            }
        }
        var i, o, r = -1;

        function l(e) {
            --r;
            if (r == 0 && o.length) {
                $route(i.replace(/ \| /g, "&"));
                o.length = 0
            } else {
                $route(i)
            }
        }

        var c = {};
    });
    system42(function () {
        "use strict";
        var e = this;

        function n(n) {
            var t;
            n = n || {
                onopen: $noop
            };
            $window({
                title: "Terminal",
                icon: e._apps.terminal.icon,
                bodyClass: "ui_terminal",
                onopen: function (i, o) {
                    t = $cli({
                        cols: 60,
                        prompt: ">",
                        el: o
                    });
                    e._states.opened["terminal"] = {
                        loaded: true,
                        body: o,
                        cli: t
                    };
                    t.input.focus();
                    n.onopen()
                },
                onclose: function () {
                    e._states.opened["terminal"] = null;
                    t.destroy()
                }
            })
        }
        window.$terminal = n
    });
    system42(function () {
        "use strict";
        var e = this,
            n = document.getElementById("templ_computer").innerHTML;
        $el(this._desktop).on("dblclick touchend", ".ui_explorer--nobrowse .ui_icon", function () {
            $exe(this)
        });

        function t(t, i) {
            if (typeof t == "object") {
                i = t;
                t = "/"
            }
            var o = {
                    list: false,
                    browse: false,
                    nav: false,
                    onopen: $noop,
                    onclose: $noop
                },
                r = $extend(o, i),
                l = 0,
                a;
            if (r.browse) r.nav = true;
            if (!t) t = "/";
            if (t.slice(-1) !== "/") t += "/";

            function s(t) {
                if (t.slice(-1) !== "/") t += "/";
                if (!r.browse) {
                    $route("dora " + t + (r.list ? " --list" : "") + (r.nav ? " --nav" : ""))
                }
                if (t === "/") {
                    return n
                } else {
                    var i = [],
                        o = [],
                        l = $io.obj.getPath(e._files, t || "c", "/");
                    for (var a in l) {
                        if (l.hasOwnProperty(a)) {
                            if (typeof l[a] == "string") {
                                o.push(l[a])
                            } else if ($io.is.obj(l[a]) || $io.is.arr(l[a])) {
                                i.push(a)
                            }
                        }
                    }
                    var s = "";
                    $io.arr.all(i.sort(), function (e, n) {
                        s += '<div tabindex="0" class="ui_icon icon-folder" ' + 'data-url="' + t + e + '/" ' + '><img src="c/sys/ico32/folder.png">' + "<span>" + e + "</span></div>"
                    });
                    $io.arr.all(o.sort(), function (n, i) {
                        var o = e.getFileInfo(n);
                        s += '<div tabindex="0" class="ui_icon icon-file" ' + 'data-url="' + t + n + '" ' + '><img src="c/sys/ico32/' + o.icon + '">' + "<span>" + n + "</span></div>"
                    });
                    return s
                }
            }

            function c(e) {
                var n = [];
                for (var t in e) {
                    if (e.hasOwnProperty(t)) {
                        if ($io.is.arr(e[t])) {
                            n.push({
                                name: t
                            })
                        } else if ($io.is.obj(e[t])) {
                            n.push({
                                name: t,
                                items: function (e) {
                                    return c(e)
                                }(e[t])
                            })
                        }
                    }
                }
                return n.sort()
            }

            function u() {
                b.value = $el(this).data("url")
            }

            function f() {
                b.value = $el(this).data("url");
                a.close(true)
            }

            function d() {
                var e = $el(this).data("url");
                p(e)
            }

            function p(e) {
                y.value = e;
                k.innerHTML = s(e)
            }

            function m() {
                var e = y.value;
                var n = e.slice(0, -1).split("/");
                n.pop();
                e = n.join("/");
                p(e || "/")
            }

            function v() {
                var e = y.value;
                p(e)
            }

            function h(e) {
                e = e || window.event;
                if (typeof e.which !== "number") e.which = e.keyCode;
                if (e.which == 13) {
                    v()
                }
            }
            var _ = {};
            _.bodyClass = "skin_inset_deep skin_light ui_explorer";
            _.icon = "/c/sys/ico32/computer.png";
            if (r.browse) {
                _.title = "explorer";
                _.bodyClass += " ui_explorer--browse";
                _.btnOk = "Open";
                _.btnCancel = "Cancel";
                var b = document.createElement("input");
                b.type = "text";
                b.className = "ui_explorer__selected_file";
                b.value = t;
                _.footer = b
            } else {
                _.title = t;
                _.bodyClass += " ui_explorer--nobrowse"
            }
            if (r.nav) {
                var $ = document.createElement("div"),
                    y = document.createElement("input"),
                    g = document.createElement("button"),
                    w = document.createElement("button"),
                    x = document.createElement("button");
                $.className = "ui_explorer__nav";
                g.innerHTML = "<";
                g.className = "ui_explorer__nav__prev";
                w.innerHTML = ">";
                w.className = "ui_explorer__nav__next";
                x.innerHTML = "Go";
                x.className = "ui_explorer__nav__go";
                y.type = "text";
                y.value = t;
                y.className = "ui_explorer__nav__input";
                $.appendChild(g);
                $.appendChild(y);
                $.appendChild(x);
                _.afterMenu = $;
                g.addEventListener("click", m, false);
                x.addEventListener("click", v, false);
                y.addEventListener("keypress", h, false)
            }
            _.onopen = function () {
                if (r.browse) $el(this.el.base).on("click", ".icon-file", u);
                if (r.browse) $el(this.el.base).on("dblclick touchend", ".icon-file", f);
                if (r.nav) $el(this.el.base).on("dblclick touchend", ".icon-folder", d);
                r.onopen.call(this)
            };
            _.onclose = function (e) {
                if (r.browse) $el(this.el.base).off("click", ".icon-file", u);
                if (r.browse) $el(this.el.base).off("dblclick touchend", ".icon-file", f);
                if (r.nav) $el(this.el.base).off("dblclick touchend", ".icon-folder", d);
                if (r.nav) g.removeEventListener("click", m, false);
                if (r.nav) x.removeEventListener("click", v, false);
                if (y) y.removeEventListener("keypress", h, false);
                if (r.browse) r.onclose.call(this, e, b.value);
                else r.onclose.call(this)
            };
            var k = document.createElement("div");
            if (r.list) {
                _.bodyClass += " ui_explorer--panes ui_explorer--list";
                var C = document.createDocumentFragment(),
                    T = document.createElement("div");
                T.className = "ui_explorer--panes__tree";
                k.className = "ui_explorer--panes__folder";
                $menu(T, c(e._files.c), {
                    mode: "tree"
                });
                $resize(T, "e");
                k.innerHTML = s(t);
                C.appendChild(T);
                C.appendChild(k);
                _.html = C
            } else {
                _.bodyClass += " ui_explorer--folder";
                k.innerHTML = s(t);
                _.html = k
            }
            a = $window(_)
        }
        window.$explorer = t
    });
    var $nfo = {};
    (function () {
        // detect javascript version
        $nfo.version = '1.0';
        var i, l, s, v, first = document.getElementsByTagName('script')[0],
            head = first.parentNode,
            scripts = [];
        for (i = 10, l = 20; i <= l; i++) {
            s = document.createElement("script");
            v = parseFloat((i / 10).toFixed(1));
            s.setAttribute('language',
                'javascript' + v);
            s.innerHTML;
            head.insertBefore(s, first);
            scripts.push(s);
        }
        for (i = 0, l = scripts.length; i < l; i++) head.removeChild(scripts[i]);

        // detect browser
        $nfo.os = "Unknown OS";
        $nfo.browser = "Unknown Browser";
        if (navigator.appVersion.indexOf("Win") != -1) $nfo.os = "Windows";
        else if (navigator.appVersion.indexOf("Mac") != -1) $nfo.os = "MacOS";
        else if (navigator.appVersion.indexOf("X11") != -1) $nfo.os = "UNIX";
        else if (navigator.appVersion.indexOf("Linux") != -1) $nfo.os = "Linux";
        else if (navigator.appVersion.indexOf("iPhone") != -1) $nfo.os = "iPhone";
        else if (navigator.appVersion.indexOf("iPod") != -1) $nfo.os = "iPod";
        else if (navigator.appVersion.indexOf("iPad") != -1) $nfo.os = "iPad";
        else if (navigator.appVersion.indexOf("Android") != -1) $nfo.os = "Android";

        if (navigator.userAgent.indexOf("MSIE") != -1) $nfo.browser = "msie";
        else if (navigator.userAgent.indexOf("Firefox") != -1) {
            $nfo.browser = "firefox";
            document.documentElement.classList.add('firefox');
        } else if (navigator.userAgent.indexOf("Chrome") != -1) $nfo.browser = "Chrome";
        else if (navigator.userAgent.indexOf("Safari") != -1) $nfo.browser = "Safari";
        else if (navigator.userAgent.indexOf("Opera") != -1) $nfo.browser = "Opera";
    }());

    function logInfo(cb) {
        'use strict';
        $log('Reinstalling MagnusWare...');
        $log.repeat('=');
        $log(C.length + " cookie(s) removed from " + location.host);
        $log((new Date).toString());

        setTimeout(function () {
            $log.repeat('=');
            $log.obj(window.location);
            setTimeout(function () {
                $log.repeat('=');
                $log.obj(window.navigator);
                //console.log(window.navigator);
                $log.repeat('=');
                setTimeout(function () {
                    $nfo.plugins = [];
                    navigator.plugins.refresh(false);
                    var numPlugins = navigator.plugins.length;
                    for (var i = 0; i < numPlugins; i++) {
                        var plugin = navigator.plugins[i];
                        if (plugin) {
                            $nfo.plugins.push(plugin.name)
                            $log.pad('plugin', plugin.name,
                                '.');
                        }
                    }
                    $log.repeat('=');
                    cb && cb();
                }, 150);
            }, 150);
        }, 150);
    }
    system42({});
    system42.on('boot', function (api) {
        var scope = this;
        var bootInfo = document.getElementById('logInfo');
        if (!scope.debug) {
            var bootIframe = document.createElement('iframe');
            bootInfo.appendChild(bootIframe);
            bootIframe.className = "fullscreen";
            bootIframe.style.position = 'fixed';
            bootIframe.style.visibility = 'hidden';
            $cli({
                cols: 60,
                prompt: '>',
                el: bootInfo
            });
            logInfo(function () {
                setTimeout(function () {
                    // handle refresh
                    trash();
                    localStorage.removeItem("Update");
                    localStorage.setItem("Update", "3");
                    beforeUnloadHandler();
                }, 5000);
            });

        } else {
            scope._everything.removeChild(bootInfo);
        }
        bootSound = null, booted = null;
        this.load("./A/System32/JS/" + scriptUrls);
    });
    system42.trigger('boot');
}