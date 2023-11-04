function Search() {
    hidemenu();

    let Splash = document.createElement("div");
    let Close = document.createElement("button");
    let Programs = document.createElement("div");
    let Search_Input = document.createElement("input");

    Splash.id = "Search_Splash";
    Close.id = "Search_Close";
    Programs.id = "Search_Programs";
    Search_Input.id = "Search_Input";

    Close.innerHTML = "X";
    Search_Input.placeholder = "Search..."

    Close.onclick = function () {
        Splash.remove()
    }

    function createIcon(options) {
        const icon = document.createElement('div');
        icon.classList.add('desktop-icon');

        if (options.src) {
            const image = document.createElement('img');
            image.classList.add('icon');
            image.src = iconsAtTwoSizes(options.src, 32);
            icon.appendChild(image);
        }

        if (options.title) {
            const title = document.createElement('div');
            title.classList.add('title');
            title.innerText = options.title;
            icon.appendChild(title);
        }

        if (options.ondblclick) {
            icon.addEventListener('click', () => {
                Splash.remove();
                options.ondblclick();
            });
        }

        return icon;
    }

    const iconOptions = [
        {
            title: 'Four',
            src: '2048',
            ondblclick: function () {
                Four();
            },
        },
        {
            title: '2048',
            src: '2048',
            ondblclick: function () {
                Twenty();
            },
        },
        {
            title: '2048 3D',
            src: '2048',
            ondblclick: function () {
                Three();
            },
        },
        {
            title: '2048 AI',
            src: '2048',
            ondblclick: function () {
                AI();
            },
        },
        {
            title: '2048 Hardcore',
            src: '2048',
            ondblclick: function () {
                Hardcore();
            },
        },
        {
            title: 'Flappy 2048',
            src: '2048',
            ondblclick: function () {
                One();
            },
        },
        {
            title: 'Flappy 2048 2.0',
            src: '2048',
            ondblclick: function () {
                Two();
            },
        },
        {
            title: 'Ultimate Doom',
            src: 'Doom',
            ondblclick: function () {
                Doom();
            }
        },

        {
            title: 'Doom 2',
            src: 'Doom2',
            ondblclick: function () {
                Doom2();
            }
        },

        {
            title: 'Ultimate Doom 2',
            src: 'UD2',
            ondblclick: function () {
                UD2();
            }
        },

        {
            title: 'Master Levels for Doom 2',
            src: 'Master',
            ondblclick: function () {
                Master();
            }
        },

        {
            title: 'Brutal Doom 2',
            src: 'Brutal',
            ondblclick: function () {
                BDoom2();
            }
        },

        {
            title: 'Doom 64',
            src: '64',
            ondblclick: function () {
                Sixty();
            }
        },

        {
            title: 'Doom 4',
            src: '4',
            ondblclick: function () {
                D4();
            }
        },

        {
            title: 'Duke Nukem',
            src: 'Duke',
            ondblclick: function () {
                Duke();
            }
        },

        {
            title: 'FreeDoom',
            src: 'FreeDoom',
            ondblclick: function () {
                toast({
                    message: "Coming Soon!",
                });
            }
        },

        {
            title: 'Heretic',
            src: 'Heretic',
            ondblclick: function () {
                Heretic();
            }
        },

        {
            title: 'Heretic 2',
            src: 'Heretic2',
            ondblclick: function () {
                Heretic2();
            }
        },

        {
            title: 'Hexen',
            src: 'Hexen',
            ondblclick: function () {
                Hexen();
            }
        },

        {
            title: 'Plutonia',
            src: 'Plutonia',
            ondblclick: function () {
                Plutonia();
            }
        },

        {
            title: 'Plutonia 2',
            src: 'Plutonia2',
            ondblclick: function () {
                Plutonia2;
            }
        },

        {
            title: 'Final Doom',
            src: 'FDoom',
            ondblclick: function () {
                TNT();
            }
        },

        {
            title: 'Chex Quest',
            src: 'Chex',
            ondblclick: function () {
                Chex1();
            }
        },

        {
            title: 'Chex Quest 2',
            src: 'Chex2',
            ondblclick: function () {
                Chex2();
            }
        },

        {
            title: 'Chex Quest 3',
            src: 'Chex3',
            ondblclick: function () {
                Chex3();
            }
        },

        {
            title: 'Quake',
            src: 'Quake',
            ondblclick: function () {
                Quake();
            }
        },

        {
            title: 'Quake Misson Pack 1',
            src: 'Q1M',
            ondblclick: function () {
                QuakeM1();
            }
        },

        {
            title: 'Quake Mission Pack 2',
            src: 'Q1M',
            ondblclick: function () {
                QuakeM2();
            }
        },

        {
            title: 'Quake 2',
            src: 'Quake2',
            ondblclick: function () {
                Quake2();
            }
        },

        {
            title: 'School Shooter Doom 2',
            src: 'School',
            ondblclick: function () {
                Shool();
            }
        },

        {
            title: 'Batman Doom',
            src: 'Batman',
            ondblclick: function () {
                BatDoom();
            }
        },

        {
            title: 'Mario Doom',
            src: 'Mario',
            ondblclick: function () {
                Dario1();
            }
        },

        {
            title: 'Mario Doom 2',
            src: 'Mario',
            ondblclick: function () {
                Dario2();
            }
        },

        {
            title: 'StarWars Doom',
            src: 'StarDoom',
            ondblclick: function () {
                StarDoom();
            }
        },

        {
            title: 'Castle Wolfenstein',
            src: 'Castle',
            ondblclick: function () {
                Castle();
            }
        },

        {
            title: 'Wolfenstein 3D',
            src: 'Wolf',
            ondblclick: function () {
                Wolf3D();
            }
        },

        {
            title: 'Spear of Destiny',
            src: 'Spear',
            ondblclick: function () {
                Spear();
            }
        },

        {
            title: 'Strife',
            src: 'Strife',
            ondblclick: function () {
                Strife();
            }
        },

        {
            title: 'Rekkr',
            src: 'Rekkr',
            ondblclick: function () {
                Rekkr();
            }
        },

        {
            title: 'GoreScript Classic',
            src: 'Gore',
            ondblclick: function () {
                Gore();
            }
        },

        {
            title: 'Doom Zero',
            src: 'Zero',
            ondblclick: function () {
                Zero();
            }
        },

        {
            title: 'Contranoid',
            src: 'Contranoid',
            ondblclick: function () {
                Contranoid();
            }
        },

        {
            title: 'Hextris',
            src: 'Hextris',
            ondblclick: function () {
                Hextris();
            }
        },

        {
            title: 'Oh Hi',
            src: '0HH1',
            ondblclick: function () {
                Hi();
            }
        },

        {
            title: 'Oh No',
            src: '0HN0',
            ondblclick: function () {
                No();
            }
        },

        {
            title: 'Quento',
            src: 'Quento',
            ondblclick: function () {
                Quento();
            }
        },

        {
            title: 'PacMan',
            src: 'Pacman',
            ondblclick: function () {
                Pac();
            }
        },

        {
            title: 'Google PacMan 1.0',
            src: 'Pacman',
            ondblclick: function () {
                Google1();
            }
        },

        {
            title: 'Google PacMan 2.0',
            src: 'Pacman',
            ondblclick: function () {
                Google2();
            }
        },

        {
            title: 'Pong',
            src: 'pong',
            ondblclick: function () {
                Pong();
            }
        },

        {
            title: 'Tetris 1.0',
            src: 'Tetris',
            ondblclick: function () {
                Tetriz();
            }
        },

        {
            title: 'Tetris 2.0',
            src: 'Tetris',
            ondblclick: function () {
                Cubes();
            }
        },

        {
            title: 'Jelly Tetris',
            src: 'Tetris',
            ondblclick: function () {
                Jelly();
            }
        },

        {
            title: 'Tetris with AI',
            src: 'Tetris',
            ondblclick: function () {
                AIT();
            }
        },

        {
            title: 'Super Mario',
            src: 'Mario',
            ondblclick: function () {
                Mario2();
            }
        },

        {
            title: 'Infinite Mario',
            src: 'Mario',
            ondblclick: function () {
                iMario();
            }
        },

        {
            title: 'Mari0',
            src: 'Mario',
            ondblclick: function () {
                Mari0();
            }
        },

        {
            title: 'Super Mario World DX',
            src: 'Mario',
            ondblclick: function () {
                SMWDX();
            }
        },

        {
            title: 'Mario Maker',
            src: 'Mario',
            ondblclick: function () {
                MarMakr();
            }
        },

        {
            title: 'Jelly Mario',
            src: 'Mario',
            ondblclick: function () {
                JellyM();
            }
        },

        {
            title: 'Surf 1.0',
            src: 'Surf',
            ondblclick: function () {
                Surf1();
            }
        },

        {
            title: 'Surf 2.0',
            src: 'Surf',
            ondblclick: function () {
                Surf2();
            }
        },

        {
            title: 'Surf 3.0',
            src: 'Surf',
            ondblclick: function () {
                Surf3();
            }
        },

        {
            title: 'MineCrap Alpha',
            src: 'Minecraft',
            ondblclick: function () {
                MinecrapA();
            }
        },

        {
            title: 'MineCrap 1.5.2',
            src: 'Minecraft',
            ondblclick: function () {
                Minecrap5();
            }
        },

        {
            title: 'Prometheus',
            src: 'emu',
            ondblclick: function () {
                Prometheus();
            }
        },

        {
            title: 'Kronos',
            src: 'emu',
            ondblclick: function () {
                Kronos();
            }
        },

        {
            title: 'Chrome Dino Games',
            src: 'Dino',
            ondblclick: function () {
                CDG();
            }
        },

        {
            title: '3D Dino',
            src: 'Dino',
            ondblclick: function () {
                D3D();
            }
        },
        {
            title: 'Ice Dodo 1.0',
            src: 'Ice',
            ondblclick: function () {
                Ice();
            }
        },

        {
            title: 'Ice Dodo 2.0',
            src: 'Ice',
            ondblclick: function () {
                Ice2();
            }
        },
        {
            title: 'Sans Fight',
            src: 'Sans',
            ondblclick: function () {
                Sans();
            }
        },

        {
            title: 'Rioluvania',
            src: 'Rioluvania',
            ondblclick: function () {
                Rioluvania();
            }
        },
        {
            title: 'Spelunky',
            src: 'Spelunky',
            ondblclick: function () {
                Spelunky();
            }
        },

        {
            title: 'Funky Karts',
            src: 'Funky',
            ondblclick: function () {
                toast({
                    message: "Coming Soon!",
                });
            }
        },
        {
            title: 'Rocket Custa',
            src: 'Rocket',
            ondblclick: function () {
                Rocket();
            }
        },

        {
            title: 'HexGL',
            src: 'Hex',
            ondblclick: function () {
                Hex();
            }
        },
        {
            title: 'Boxel Rebound',
            src: 'Box',
            ondblclick: function () {
                Box();
            }
        },

        {
            title: 'Drift Hunters',
            src: 'Drift',
            ondblclick: function () {
                Drift();
            }
        },
        {
            title: 'The Binding of Isaac',
            src: 'TBOI',
            ondblclick: function () {
                TBOI();
            }
        },

        {
            title: 'There is No Game',
            src: 'NoGame',
            ondblclick: function () {
                NoGame();
            }
        },
        {
            title: 'Frank Zamboni',
            src: 'Zamboni',
            ondblclick: function () {
                Zamboni();
            }
        },

        {
            title: 'Acid Box',
            src: 'AcidBox',
            ondblclick: function () {
                AcidBox();
            }
        },
        {
            title: 'Clock',
            src: 'Clock',
            ondblclick: function () {
                Clock();
            }
        },

        {
            title: 'MagnusWare Software Center',
            src: 'Store',
            ondblclick: function () {
                Store();
            }
        },
        {
            title: 'Chat Room',
            src: 'Chat',
            ondblclick: function () {
                Chat();
            }
        },

        {
            title: 'Sound Recorder',
            src: 'speaker',
            ondblclick: function () {
                SoundRecorder();
            }
        },
        {
            title: 'Calculator',
            src: 'Calculator',
            ondblclick: function () {
                Calculator();
            }
        },

        {
            title: 'WinAMP',
            src: 'winamp2',
            ondblclick: function () {
                openWinamp();
            }
        },
        {
            title: 'VLC Media Player',
            src: 'VLC',
            ondblclick: function () {
                VLC();
            }
        },

        {
            title: 'Paint',
            src: 'Paint',
            ondblclick: function () {
                Paint();
            }
        },
        {
            title: 'Notepad',
            src: 'notepad',
            ondblclick: function () {
                Notepad();
            }
        },

        {
            title: 'Da Hood',
            src: 'network',
            ondblclick: function () {
                Network();
            }
        },
        {
            title: 'MW-CMD',
            src: 'msdos',
            ondblclick: function () {
                MWCMD();
            }
        },

        // {
        //     title: '',
        //     src: '',
        //     ondblclick: function () {
        //         ;
        //     }
        // },
    ];

    // Function to filter and display icons by title
    function filterIconsByTitle(searchText) {
        Programs.innerHTML = ''; // Clear the existing icons

        for (const options of iconOptions) {
            if (options.title.toLowerCase().includes(searchText.toLowerCase())) {
                const icon = createIcon(options);
                Programs.appendChild(icon);
            }
        }
    }

    // Example: Search by title

    Search_Input.addEventListener('input', function () {
        const searchText = Search_Input.value;
        filterIconsByTitle(searchText);
    });

    document.body.appendChild(Splash);
    Splash.appendChild(Close);
    Splash.appendChild(Programs);
    Splash.appendChild(Search_Input);
    for (const options of iconOptions) {
        const icon = createIcon(options);
        Programs.appendChild(icon);
    }
}