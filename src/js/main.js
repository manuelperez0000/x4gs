import $ from "../x4gs"
const points = document.getElementById("points")
const canvas = document.getElementById("canvas")
const pollitoImg = document.getElementById("pollito")
const gallina = document.getElementById("gallina")
const gallina2 = document.getElementById("gallina2")
canvas.width = window.innerWidth - 400
canvas.height = window.innerHeight - 120
const ctx = canvas.getContext('2d')
const fps = 24
const pollito = { image:pollitoImg, x: 500, y: 400, w: 40, h: 40 }
const player = { image:gallina, x: 100, y: 100, w: 90, h: 90 }
let speed = 5
let point = 0

let time = 60

setInterval(()=>{
    time--
},1000)

$.start(canvas, fps, () => {
    points.innerHTML = "Pollitos encontrados: "+point+ " -- tiempo restante: "+time
    $.drawImage(ctx,pollito)
    $.drawImage(ctx, player)

   
    if ($.input("ArrowUp")) player.y = player.y - speed
    if ($.input("ArrowDown")) player.y = player.y + speed
    if ($.input("ArrowLeft")) {
        player.x = player.x - speed
        player.image = gallina2
    }
    if ($.input("ArrowRight")) {
        player.x = player.x + speed
        player.image = gallina
    }

    if (player.y < 0 - player.h) player.y = canvas.height - player.h / 2
    if (player.y > canvas.height) player.y = 0 - player.h / 2
    if (player.x > canvas.width) player.x = 0 - player.w / 2
    if (player.x < 0 - player.w) player.x = canvas.width - player.w / 2

    if ($.collition(player, pollito)) {
        pollito.x = $.random(pollito.w,canvas.width-pollito.w)
        pollito.y = $.random(pollito.h,canvas.height-pollito.h)
        point++
        if(point % 2) speed++
    }

    
})