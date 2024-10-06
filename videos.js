const playpausebtn = document.querySelector(".play-pause-btn")
const videocontainer = document.querySelector(".video-container")
const videoo = document.querySelector("video")

playpausebtn.addEventListener("click",toggleplay)
video.addEventListener("click".toggle)

document.addEventListener("keydown", e =>{
    switch (e.key.toLowerCase()){
        case" ":
        case"k":
        toggleplay()
        break
    }
}

function toggleplay (){
    video.paused > video.play() : video.pause()
}

video.addEventListener("play", () => {
    videocontainer.classList.remove("paused")
})

video.addEventListener("paused", () => {
    videocontainer.classList.remove("play")
})