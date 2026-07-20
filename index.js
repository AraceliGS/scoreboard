let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homeFouls = document.getElementById("home-fouls");
let guestFouls = document.getElementById("guest-fouls");
let counterHome = 0;
let counterGuest = 0;
let counterFoulsHome = 0;
let counterFoulsGuest = 0;


function addOnePointHome() {
    counterHome+=1;
    homeScore.textContent=counterHome;
}

function addTwoPointHome() {
    counterHome+=2;
    homeScore.textContent=counterHome;
}

function addThreePointHome() {
    counterHome+=3;
    homeScore.textContent=counterHome;
}

function addFoulsHome() {
    counterFoulsHome+=1;
    homeFouls.textContent="FOULS: "+counterFoulsHome;
}

function addOnePointGuest() {
    counterGuest+=1;
    guestScore.textContent=counterGuest;
}

function addTwoPointGuest() {
    counterGuest+=2;
    guestScore.textContent=counterGuest;
}

function addThreePointGuest() {
    counterGuest+=3;
    guestScore.textContent=counterGuest;
}

function addFoulsGuest() {
    counterFoulsGuest+=1;
    guestFouls.textContent="FOULS: "+counterFoulsGuest;
}