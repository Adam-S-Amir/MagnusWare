function StoreFront() {
    let StoreFront = [`
    <div id='sidebar'>
        <p>Welcome to the MagnusWare<br>Software Center!</p>
    </div>
    <div class='store-buttons'>
        <button class="Store-button" onclick="showAll()">
            <img src="./A/System64/Images/Icons/Store-48x48.png">
            <span>All</span>
        </button>
        <button class="Store-button" onclick="showAccess()">
            <img src="./A/System64/Images/Icons/Store-48x48.png">
            <span>Accessories</span>
        </button>
        <button class="Store-button" onclick="showDev()">
            <img src="./A/System64/Images/Icons/Store-48x48.png">
            <span>Developer</span>
        </button>
        <button class="Store-button" onclick="showEntertain()">
            <img src="./A/System64/Images/Icons/Store-48x48.png">
            <span>Entertainment</span>
        </button>
        <button class="Store-button" onclick="showProduct()">
            <img src="./A/System64/Images/Icons/Store-48x48.png">
            <span>Productivity</span>
        </button>
        <button class="Store-button" onclick="showSocial()">
            <img src="./A/System64/Images/Icons/Store-48x48.png">
            <span>Social</span>
        </button>
        <button class="Store-button" onclick="showSystem()">
            <img src="./A/System64/Images/Icons/Store-48x48.png">
            <span>System</span>
        </button>
        <button class="Store-button" onclick="showUtility()">
            <img src="./A/System64/Images/Icons/Store-48x48.png">
            <span>Utilities</span>
        </button>
        <button class="Store-button" onclick="showOther()">
            <img src="./A/System64/Images/Icons/Store-48x48.png">
            <span>Other</span>
        </button>
    </div>
    <div class='vl'></div>
    <div id='right'></div>
`];
    document.getElementById("div1").innerHTML = StoreFront;
    document.getElementById("right").innerHTML = StoreFrontRight;
    showAll();
}

let StoreFrontRight = [`
    <div id="storefront-right-access"></div>
    <div id="storefront-right-dev"></div>
    <div id="storefront-right-entertain"></div>
    <div id="storefront-right-product"></div>
    <div id="storefront-right-social"></div>
    <div id="storefront-right-system"></div>
    <div id="storefront-right-utility"></div>
    <div id="storefront-right-other"></div>
`]


function showAll() {
    let Div = [`
    <div id="storefront-right-all">
        <button onclick='install_WadCMD()'>
            <img src='./A/System64/Images/Icons/WadCMD-32x32.png'>
            WadCMD
        </button>
    </div>
    `];
    document.getElementById("right").innerHTML = Div;
}

function showAccess() {
    let Div = [`
    <div id="storefront-right-access">
        <p>
            Coming Soon!
        </p>
    </div>
    `];
    document.getElementById("right").innerHTML = Div;
}

function showDev() {
    let Div = [`
    <div id="storefront-right-dev">
        <p>
            Coming Soon!
        </p>
    </div>
    `];
    document.getElementById("right").innerHTML = Div;
}

function showEntertain() {
    let Div = [`
    <div id="storefront-right-entertain">
        <button onclick='install_WadCMD()'>
            <img src='./A/System64/Images/Icons/WadCMD-32x32.png'>
            WadCMD
        </button>
    </div>
    `];
    document.getElementById("right").innerHTML = Div;
}

function showProduct() {
    let Div = [`
    <div id="storefront-right-product">
        <p>
            Coming Soon!
        </p>
    </div>
    `];
    document.getElementById("right").innerHTML = Div;
}

function showSocial() {
    let Div = [`
    <div id="storefront-right-social">
        <p>
            Coming Soon!
        </p>
    </div>
    `];
    document.getElementById("right").innerHTML = Div;
}

function showSystem() {
    let Div = [`
    <div id="storefront-right-system">
        <p>
            Coming Soon!
        </p>
    </div>
    `];
    document.getElementById("right").innerHTML = Div;
}

function showUtility() {
    let Div = [`
    <div id="storefront-right-utility">
        <p>
            Coming Soon!
        </p>
    </div>
    `];
    document.getElementById("right").innerHTML = Div;
}

function showOther() {
    let Div = [`
    <div id="storefront-right-other">
        <p>
            Coming Soon!
        </p>
    </div>
    `];
    document.getElementById("right").innerHTML = Div;
}

function install_WadCMD() {
    function download() {
        let installAction = [`
        Create_Icon({
            title: 'WadCMD',
            icon: 'WadCMD',
            open: WadCMD,
        });
        $folder_view.arrange_icons();
    `];
        localStorage.setItem("WadCMD", installAction);
        eval(installAction[0]);
    }
    showMessageBox({
        title: "Install WadCMD",
        message: "WAD Commander is a tool running in modern browsers to load and play WAD files of DOOM® and DOOM II®.",
        iconID: "WadCMD",
        buttons: [{
                label: "Install",
                value: "Install",
                action: () => {
                    download()
                },
            },
            {
                label: "Cancel",
                value: "Cancel",
            },
        ],
    })
}
//# sourceURL=MagnusWare
