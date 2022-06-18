song1 = ""
song2 = ""
function preload(){
song1 ="mp3"
song2="mp3"
}

function setup(){
canvas = createCanvas(500,500)
video = createCapture(VIDEO)
canvas.center()
video.hide()
}

function draw(){
    image(video,0,0,500,500)
}