let activeKeys = []
const start = (canvas, fps, callback) => {

    setInterval(() => {
        canvas.width = canvas.width
        callback()
    }, 1000 / fps)
}

const drawRect = (ctx, { x, y, w, h, c }) => {
    ctx.fillStyle = c
    ctx.fillRect(x, y, w, h)
}

const drawImage = (ctx,{image,x,y,w,h})=>{
    ctx.drawImage(image,x,y,w,h)
}

const input = (key) => {
    window.addEventListener('keydown', (event) => {
        if (event.key === key && activeKeys.indexOf(key) < 0) activeKeys.push(key)
    })
    window.addEventListener('keyup', (event) => {
        if (event.key === key && activeKeys.indexOf(key) >= 0) activeKeys.splice(activeKeys.indexOf(key), 1)
    })
    return activeKeys.indexOf(key) > -1
}

const backgroundImage = (background, w, h) => {
    ctx.drawImage(background, 0, 0, w, h)
}
const backgroundColor = (color) => {
    ctx.fillStyle = color
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}

const collition = (player, object) => {
    return player.y + player.h > object.y && player.x + player.w > object.x &&
        player.y < object.y + object.h && player.x < object.x + object.h
}

const random = (min,max)=>{
    //Math.floor(Math.random() * canvas.width - coin.w * 2) + coin.w
    let randomNumber = Math.round(Math.random() * (max - min) + min)
    return randomNumber 
}

const $ = {
    start, drawRect, input, backgroundImage, backgroundColor, collition,random,drawImage
}

export default $