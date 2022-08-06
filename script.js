var body = document.querySelector("body")

var hexColors = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

var randomHexColor = '#'

function randomNumberGenerator(){
    var random = Math.random()
    var randomNum = Math.floor(random*16)

    return randomNum;
}

function randomColorGenerator(){
    randomHexColor = '#'
    for(var i=0; i<6; i++){
        var random = randomNumberGenerator()
        randomHexColor = randomHexColor + hexColors[random]

    }
    return randomHexColor;
}

function changeColor(){
    var randomColor = randomColorGenerator()
    console.log(randomColor)
    body.style.background = randomColor
}