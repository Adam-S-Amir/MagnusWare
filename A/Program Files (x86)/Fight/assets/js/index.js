// get canvas element from DOM
const canvas = document.querySelector('canvas');
// get context from canvas
const context = canvas.getContext('2d');

// set canvas size
canvas.width = 1024;
canvas.height = 576;
// canvas.width = window.innerWidth
// canvas.height = window.innerHeight;
// draw background
context.fillRect(0, 0, canvas.width, canvas.height);
// context.fillStyle = '#000';

// stating HTML tags
const OuterBar = document.createElement('div');
const InnerBar = document.createElement('div');
const PlayerHP = document.createElement('div');
const Timer = document.createElement('div');
const InnerTimer = document.createElement('div');
const EnemyHP = document.createElement('div');
const PlayerHP_HP = document.createElement('div');
const EnemyHP_HP = document.createElement('div');
// creating text placeholder/text label
const PlaceHolder = document.createTextNode('Place Holder');
const OuterEnd = document.createElement('div');
const InnerEnd = document.createElement('div');
const EndHeader = document.createElement('h1');
const EndTitle = document.createTextNode('Game!')
const EndResults = document.createElement('div');
const Restart = document.createElement('button');
const RestartLabel = document.createTextNode('Restart');

// assigning HTML tag's id's
OuterBar.classList.add('Outer-Bar');
InnerBar.classList.add('Inner-Bar');
PlayerHP.classList.add('Player-HP');
Timer.classList.add('Timer');
InnerTimer.classList.add('Inner-Timer');
EnemyHP.classList.add('Enemy-HP');
PlayerHP_HP.classList.add('Player-HP-HP');
EnemyHP_HP.classList.add('Enemy-HP-HP');
OuterEnd.classList.add('Outer-End');
InnerEnd.classList.add('Inner-End');
EndHeader.classList.add('End-Header');
EndResults.classList.add('End-Results');
Restart.classList.add('Restart');

// assigning class names to HTML tags
OuterBar.id = 'Outer-Bar';
InnerBar.id = 'Inner-Bar';
PlayerHP.id = 'Player-HP';
Timer.id = 'Timer';
InnerTimer.id = 'Inner-Timer';
EnemyHP.id = 'Enemy-HP';
PlayerHP_HP.id = 'Player-HP-HP';
EnemyHP_HP.id = 'Enemy-HP-HP';
OuterEnd.id = 'Outer-End';
InnerEnd.id = 'Inner-End';
EndHeader.id = 'End-Header';
EndResults.id = 'End-Results';
Restart.id = 'Restart';

// Putting HTML divs into one another
OuterBar.appendChild(InnerBar);
InnerBar.appendChild(PlayerHP);
PlayerHP.appendChild(PlayerHP_HP)
InnerBar.appendChild(Timer);
Timer.appendChild(InnerTimer);
InnerTimer.appendChild(PlaceHolder);
InnerBar.appendChild(EnemyHP);
EnemyHP.appendChild(EnemyHP_HP);
OuterEnd.appendChild(InnerEnd);
InnerEnd.appendChild(EndHeader);
EndHeader.appendChild(EndTitle)
EndResults.appendChild(PlaceHolder);
InnerEnd.appendChild(EndResults);
InnerEnd.appendChild(Restart)
Restart.appendChild(RestartLabel)


// handling onclick event for restart button
Restart.onclick = function () {
    // it'll just refresh the page, kinda lazy
    // but its whatever
    location.reload();
}
// putting the two main div's above the canvas tag
document.body.insertBefore(OuterBar, canvas);
document.body.insertBefore(OuterEnd, canvas);
// create gravity
const gravity = 0.7;

// implement sprites
const bg = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: './assets/img/background.png',
});

const shop = new Sprite({
    position: {
        x: (canvas.width / 2) + 113,
        y: (canvas.height / 2) - 129
    },
    imageSrc: './assets/img/shop.png',
    scale: 2.5,
    framesMax: 6
});

// draw player
const Player = new Fighter({
    //assign player position
    position: {
        x: (canvas.width / 2) - 250,
        y: 0
    },
    // assign player velocity
    velocity: {
        x: 0,
        y: 0
    },
    // offset attackBox by values below
    offset: {
        x: 0,
        y: 0
    },
    imageSrc: './assets/img/Player-1/Idle.png',
    framesMax: 8,
    scale: 2.5,
    offset: {
        x: 215,
        y: 180
    }

});

// initialize player
// Player.draw();

//draw enemy
const Enemy = new Fighter({
    position: {
        x: (canvas.width / 2) + 200,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    },
    offset: {
        x: -50,
        y: 0
    },
    color: 'green'
    // image: 'player.png'
});

// initialize enemy
// Enemy.draw();

// display player position
console.log(Player);

// display enemy position
console.log(Enemy);

// declare all keys to use in game
const keys = {

    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    w: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    },
    ArrowRight: {
        pressed: false
    },
    ArrowUp: {
        pressed: false
    }
}

let lastKey;

// detect collision by taking the attackBox and ensuring 
// if it is equal to the same X value as the enemy
// clean up X Axis collision detection
// clean up Y Axis collision detection
// is a function and not an el/if statement because there is two characters

countdown();

// create animation loop
function animate() {
    window.requestAnimationFrame(animate);
    // make canvas black and keep player color to blue
    context.fillStyle = 'black';
    // prevent acid trip
    context.fillRect(0, 0, canvas.width, canvas.height);
    // draw bg before draw players
    bg.draw();
    shop.update();
    // draw players
    Player.update();
    Enemy.update();

    Player.velocity.x = 0;
    Enemy.velocity.x = 0;

    // enemy movement
    if (keys.ArrowLeft.pressed && Enemy.lastKey === 'ArrowLeft') {
        Enemy.velocity.x = -5
    } else if (keys.ArrowRight.pressed && Enemy.lastKey === 'ArrowRight') {
        Enemy.velocity.x = 5
    }

    // player movement
    if (keys.a.pressed && Player.lastKey === 'a') {
        Player.velocity.x = -5
    } else if (keys.d.pressed && Player.lastKey === 'd') {
        Player.velocity.x = 5
    }

    let PHP = document.querySelector('#Player-HP-HP');
    let BPHP = document.querySelector('#Player-HP');
    let EHP = document.querySelector('#Enemy-HP-HP');
    let BEHP = document.querySelector('#Enemy-HP');

    if (Collision({
            rect1: Player,
            rect2: Enemy
        }) && Player.isAttacking) {
        // accurately log amount of times player attacks at a time
        Player.isAttacking = false;
        Enemy.health -= 20;
        EHP.style.width = Enemy.health + '%';
        EHP.style.backgroundColor = 'red';
        BEHP.style.backgroundColor = 'maroon';

        function startFadeAnimation() {
            // Set the target background color
            BEHP.classList.add('Animated');
            // reset bg
            BEHP.style.backgroundColor = 'navy';
        }
        // Start the animation after a delay of 1 second
        setTimeout(startFadeAnimation, 1000);
        BEHP.classList.remove('Animated');
        console.log("Hit!");

        if (Enemy.health === 0) {
            EndResults.innerHTML = 'Player 1 Wins!';
            OuterEnd.style.display = 'block';
            clearTimeout(timerID);
        } else if (Player.health === 0) {
            EndResults.innerHTML = 'Player 2 Wins!';
            OuterEnd.style.display = 'block';
            clearTimeout(timerID);
        }
    }

    if (Collision({
            rect1: Enemy,
            rect2: Player
        }) && Enemy.isAttacking) {
        Enemy.isAttacking = false;
        Player.health -= 20;
        PHP.style.width = Player.health + '%';
        PHP.style.backgroundColor = 'red';
        BPHP.style.backgroundColor = 'maroon';

        function startFadeAnimation() {
            BPHP.classList.add('Animated');
            BPHP.style.backgroundColor = 'navy';
        }
        setTimeout(startFadeAnimation, 1000);
        BPHP.classList.remove('Animated');
        console.log("Hit!");
        if (Player.health === 0) {
            EndResults.innerHTML = 'Player 2 Wins!';
            OuterEnd.style.display = 'block';
            clearTimeout(timerID);
        } else if (Enemy.health === 0) {
            EndResults.innerHTML = 'Player 1 Wins!';
            OuterEnd.style.display = 'block';
            clearTimeout(timerID);
        }
    }

}

// initialize animation loop
animate();

// add event listener to window -- start of controls
window.addEventListener('keydown', (event) => {

    // on key-down 'd'
    switch (event.key) {
        case 'd':
            keys.d.pressed = true
            Player.velocity.x = 1
            Player.lastKey = 'd'
            break
        case 'a':
            keys.a.pressed = true
            Player.velocity.x = -1
            Player.lastKey = 'a'
            break
            // jump effect
        case 'w':
            keys.w.pressed = true
            Player.velocity.y = -20
            Player.lastKey = 'w'
            break
            // init attack on space
        case 's':
            Player.attack();
            break
    }

    switch (event.key) {
        case 'ArrowRight':
            keys.ArrowRight.pressed = true
            Enemy.velocity.x = 1
            Enemy.lastKey = 'ArrowRight'
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true
            Enemy.velocity.x = -1
            Enemy.lastKey = 'ArrowLeft'
            break
        case 'ArrowUp':
            keys.ArrowUp.pressed = true
            Enemy.velocity.y = -20
            Enemy.lastKey = 'ArrowUp'
            break
        case 'ArrowDown':
            Enemy.attack();
            break
    }

    //display key pressed in console
    // console.log(event.key);
})

window.addEventListener('keyup', (event) => {

    // on key-up 'd'
    switch (event.key) {
        case 'd':
            keys.d.pressed = false
            Player.velocity.x = 0
            break
    }

    switch (event.key) {
        case 'a':
            keys.a.pressed = false
            Player.velocity.x = 0
            break
    }

    switch (event.key) {
        case 'w':
            keys.w.pressed = false
            Player.velocity.y = 0
            break
    }
    switch (event.key) {
        case 'ArrowRight':
            keys.ArrowRight.pressed = false
            Enemy.velocity.x = 0
            break
    }

    switch (event.key) {
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false
            Enemy.velocity.x = 0
            break
    }

    switch (event.key) {
        case 'ArrowUp':
            keys.ArrowUp.pressed = false
            Enemy.velocity.y = 0
            break
    }
})

// going to make this a cover game for when quake 2 loads
// and when the game finishes loading the game dissapears