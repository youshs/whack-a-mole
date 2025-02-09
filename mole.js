let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;


window.onload =function() {
    setGame();
}

function setGame() {
    for(let i=0;i<9;i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
   setInterval(setMole, 1200);
   setInterval(setPlant,1550);

}

function getRandomTile() {
    let num = Math.floor(Math.random()* 9);
    return num.toString();
}

function setMole() {
   if(gameOver){
    return;
   }

    if(currMoleTile){
        currMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "mole.png";

    let num = getRandomTile();
    if(currPlantTile && currPlantTile.id == num){
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant() {
    if(gameOver){
        return;
    }
    if(currPlantTile){
        currPlantTile.innerHTML = "";
    }

    let Plant = document.createElement("img");
    Plant.src = "plant.png";

    let num = getRandomTile();
    if ( currMoleTile && currMoleTile == num){
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(Plant);
}

function selectTile(){
    if(gameOver){
        return;
    }
    if(this == currMoleTile) {
        score += 10;
        document.getElementById("score").innerHTML = score.toString();
    }
    else if (this== currPlantTile){

        document.getElementById("score").innerHTML= "GAME OVER : " + score.toString();
        gameOver = true;
    }
}