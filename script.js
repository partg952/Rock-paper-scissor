var user = document.getElementById('user')
var comp = document.getElementById('comp')
const scissor = document.getElementById('scissor')
const hand = document.getElementById('rock')
const paper = document.getElementById('hand')
var player=0
var computer=''
var computer_score=0

function gamecompchoice(){
    const array = ['p','s','r']
    var random = Math.floor(Math.random() * 3)
    return array[random]
}


function win(){
player++
console.log(player)
user.innerHTML = player
comp.innerHTML = computer_score
}
function lose(){
computer_score++
console.log(computer_score)
comp.innerHTML  = computer_score
user.innerHTML = player
}
function draw(){

}
function game(userchoice){
computer = gamecompchoice()
console.log("computer choice=>" + computer)
console.log("user choice=>" + userchoice)

switch(userchoice + computer){
    case "rs":
    case "pr":  
    case "sp":
    win()        
    break;
    case "rp":
    case "ps":
    case "sr":
    lose()
    break;     
    case "ss":
    case "rr":
    case "pp":
    draw()
    break;               

}

}

console.log('parth sharma')





paper.addEventListener('click' , function() {
    console.log('paper')
    game("p")
})


scissor .addEventListener('click' , function() {
    console.log('scissor')
    game('s')
})


hand.addEventListener('click' , function() {
    console.log('rock')
    game('r')
})



