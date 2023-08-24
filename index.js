let colors = {
    0: "green",
    1: "red",
    2: "yellow",
    3: "blue"
}
// let colorSequence = ["green", "red", "yellow", "yellow"]
let colorSequence = []
let userSequence = []
let click = 0
let level = 1
let originalText = $("h1").html()
let random = 0
// colorSequence.push(colors[random])
// console.log(colorSequence)
let gameOver = false
let gameStarted = false
function start() {
    if (!gameStarted) {
        gameStarted = true
        // console.log(1)
        random = Math.floor(Math.random() * 4)
        colorSequence.push(colors[random])
        // console.log(colorSequence)
        $("h1").html(`Level ${level}`)
        $("." + colors[random]).fadeOut(100).fadeIn(100)
    }
}
$(document).keydown(start)
$(document).click(start)
// $("." + colors[random]).fadeOut(100).fadeIn(100)
$(".button").click(function () {
    $(this).fadeOut(100).fadeIn(100)
    userSequence.push(this.classList[0])
    // console.log(userSequence)
    // console.log(`Level: ${level}`)
    if (colorSequence[click] != userSequence[click]) {
        gameOver = true
        gameStarted = false
        userSequence = []
        colorSequence = []
        click = 0
        level = 1
        // random = Math.floor(Math.random() * 4)
        // colorSequence.push(colors[random])
        // console.log(colorSequence)
        // console.log("Game Over")
        $("h1").html(`Game Over<br>${originalText} again`)
        $("body").css("background-color", "red")
        $("body").animate({ backgroundColor: '#011F3F' }, 50)
    }
    if (colorSequence[click] == userSequence[click]) {
        click++
        // console.log("next move")
    }
    if ((JSON.stringify(colorSequence) == JSON.stringify(userSequence)) & colorSequence.length != 0) {
        level++
        userSequence = []
        click = 0
        random = Math.floor(Math.random() * 4)
        colorSequence.push(colors[random])
        // console.log(colorSequence)
        // console.log("Level increased")
        // console.log(`Level: ${level}`)
        setTimeout(function () {
            $("h1").html(`Level ${level}`)
            $("." + colors[random]).delay(200).fadeOut(100).fadeIn(100)
        }, 500)
    }
})

