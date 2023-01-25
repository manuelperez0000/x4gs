let player = { positionX: 0, positionY: 0, height: 50, width: 50, speed: 0 }
let direction = { up: true, down: false, left: true, right: false }
let moving = { up: false, down: false, left: false, right: false }
let activeKeys = []

let update = (call, fps) => {
    setInterval(() => {
        canvas.width = canvas.width
        if (moving.up) player.positionY = player.positionY - player.speed
        if (moving.down) player.positionY = player.positionY + player.speed
        if (moving.left) player.positionX = player.positionX + player.speed
        if (moving.right) player.positionX = player.positionX - player.speed
        call()
    }, 1000 / fps)
}

const gravity = (g) => {
    player.positionY = player.positionY + g / 1.9
}

const backgroundImage = (background, w, h) => {
    ctx.drawImage(background, 0, 0, w, h)
}

const backgroundColor = (color) => {
    ctx.fillStyle = color
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}
const sprite = (x, y, w, h, color, ctx) => {
    ctx.fillStyle = color
    ctx.fillRect(x, y, w, h)
}

const keydown = (callbak) => window.addEventListener('keydown', (e) => callbak(e))
const keyup = (callback) => window.addEventListener('keyup', (e) => callback(e))


const moveY = (direction) => {
    if (direction) {
        moving.up = true
    } else {
        moving.down = true
    }
}
const moveX = (direction) => {
    if (direction) {
        moving.left = true
    } else {
        moving.right = true

    }
}

const stopX = (direction) => {
    if (direction) {
        moving.left = false
    } else {
        moving.right = false
    }
}
const stopY = (direction) => {
    if (direction) {
        moving.up = false
    } else {
        moving.down = false
    }
}

const keypress = () => { }

const platform = (x4) => {
    ctx.fillStyle = "red"
    ctx.fillRect(x4.x, x4.y, x4.w, x4.h)
}

const start = (canvas,fps, callback) => {
    setInterval(() => {
        canvas.width = canvas.width
        console.log(activeKeys)
        callback()
    }, 1000 / fps)
}

const drawRect = (ctx, { x, y, w, h, c }) => {
    ctx.fillStyle = c
    ctx.fillRect(x, y, w, h)
}


/* const x4 = {
    canvas,
    player,
    direction,
    update,
    gravity,
    backgroundImage,
    backgroundColor,
    keydown,
    keyup,
    moveY,
    moveX,
    stopX,
    stopY,
    keypress,
    sprite,
    start,
    platform,
    move,
    draw
} */

const input = (key) => {
    window.addEventListener('keydown', (event) => {
        if (event.key === key && activeKeys.indexOf(key) < 0) activeKeys.push(key)
    })
    window.addEventListener('keyup', (event) => {
        if (event.key === key && activeKeys.indexOf(key) >= 0) activeKeys.splice(activeKeys.indexOf(key),1)
    })
    return activeKeys.indexOf(key) > -1
}

const $ = {
    start, drawRect, input
}

export default $