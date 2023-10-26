// draw sprites
class Sprite {
    constructor({
        position,
        imageSrc,
        scale = 1,
        framesMax = 1,
        offset = {
            x: 0,
            y: 0
        }
    }) {
        this.position = position;
        this.width = 50;
        this.height = 150;
        // make HTML img using js
        this.image = new Image();
        // set src of image to image
        this.image.src = imageSrc;
        this.scale = scale;
        this.framesMax = framesMax;
        this.framesCurrent = 0;
        this.framesElapsed = 0;
        this.framesHold = 3;
        this.offset = offset;
    }

    draw() {
        context.drawImage(
            this.image,
            // crop location
            this.framesCurrent * (this.image.width / this.framesMax),
            0,
            this.image.width / this.framesMax,
            this.image.height,
            this.position.x - this.offset.x,
            this.position.y - this.offset.y,
            (this.image.width / this.framesMax) * this.scale,
            this.image.height * this.scale
        );
    }
    update() {
        this.draw();
        this.framesElapsed++;
        if (this.framesElapsed % this.framesHold === 0) {
            if (this.framesCurrent < this.framesMax - 1) {
                this.framesCurrent++
            } else {
                this.framesCurrent = 0
            }
        }
    }
}

// draw player position
// Fighter also includes Sprite properties
class Fighter extends Sprite {
    //player position and velocity will be assigned to individual sprites
    constructor({
        position,
        velocity,
        // create class for sprite color
        color,
        // create offset
        offset,
        imageSrc,
        scale = 1,
        framesMax = 1,

    }) {
        super({ // calls parent constructor
            position,
            imageSrc,
            scale,
            framesMax,
            offset
        });
        this.velocity = velocity;
        this.width = 50;
        this.height = 150;
        this.lastKey;
        this.attackBox = {
            position: {
                x: this.position.x,
                y: this.position.y
            },
            // init offset
            offset: offset,
            width: 100,
            height: 50
        }
        // init color property
        this.color = color;
        this.isAttacking;
        this.health = 100;
        // these boys go down here cuz they are static
        this.framesCurrent = 0;
        this.framesElapsed = 0;
        this.framesHold = 5;
    }

    // create a player sprite
    draw() {
        // context.fillStyle = 'blue';
        context.fillStyle = this.color;
        context.fillRect(
            this.position.x,
            this.position.y,
            this.width,
            this.height,
        )
        if (this.isAttacking) {
            // make weapon color different
            context.fillStyle = 'red';
            context.fillRect(
                this.attackBox.position.x,
                this.attackBox.position.y,
                this.attackBox.width,
                this.attackBox.height,
            )
        }
    }

    // update player position
    update() {
        this.draw();
        // update attackBox to x & y values of player
        // offset is added to be dynamic applied for players current position
        this.attackBox.position.x = this.position.x + this.attackBox.offset.x;
        this.attackBox.position.y = this.position.y;

        this.position.x += this.velocity.x;

        // player position updates to whatever value the player's velocity is set to
        //this.position.y += 10;
        this.position.y += this.velocity.y;

        if (this.position.y + this.height + this.velocity.y >= canvas.height - 97) {
            this.velocity.y = 0;
        } else {
            this.velocity.y += gravity;
        }
    }
    attack() {
        this.isAttacking = true;
        // trigger isAttacking to true when attack() is called
        setTimeout(() => {
            this.isAttacking = false;
        }, 100)
        // after 100 ms isAttacking will be false
    }
}