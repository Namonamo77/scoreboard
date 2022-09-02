let homeScore = 0
let homeScoreEl = document.getElementById("home-score")

let guestScore = 0
let guestScoreEl = document.getElementById("guest-score")

let resetEl = document.getElementById("reset-el")

// Setting the buttons clicks

const homeBtn1 = document.getElementsByClassName("homeBtn1")
const guestBtn1 = document.getElementsByClassName("guestBtn1")

const homeBtn2 = document.getElementsByClassName("homeBtn2")
const guestBtn2 = document.getElementsByClassName("guestBtn3")

const homeBtn3 = document.getElementsByClassName("homeBtn3")
const guestBtn3 = document.getElementsByClassName("guestBtn3")

// Solution 1
// function homeAddOnePoint(){
//     for (const onePoint of homeBtn1)
//     onePoint.addEventListener("click", function() {
//         console.log("+1 point")
//         homeScore += 1
//         homeScoreEl.textContent = homeScore
//         console.log(homeScore)
        
//     })
// }
//homeAddOnePoint()

// function guestAddOnePoint(){
//     for (const onePoint of guestBtn1)
//     onePoint.addEventListener("click", function() {
//         console.log("+1 point")
//         guestScore += 1
//         guestScoreEl.textContent = guestScore
//         console.log(guestScore)
        
//     })
    
// }
//guestAddOnePoint()


// Solution 2

function homeAddOnePoint(){
    //console.log("+1 point")
    homeScore += 1
    homeScoreEl.textContent = homeScore
    //console.log(homeScore)
}
function homeAddTwoPoints(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}
function homeAddThreePoints(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}


function guestAddOnePoint(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}
function guestAddTwoPoints(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}
function guestAddThreePoints(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

// New game / Reset button

function resetScores(){
    homeScore = 0
    guestScore = 0
    guestScoreEl.textContent = guestScore
    homeScoreEl.textContent = homeScore
    console.log(homeScore, guestScore)


}

   
    



    



