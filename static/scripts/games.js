document.getElementById("game-btn-back").addEventListener("click", goToIndex);
function goToIndex() {
    console.log("clicked")
    window.location.replace("/templates/index.html")
}

let vals = null
function value(value) {
    console.log(value)
    vals = Number(value)
    console.log("vals:", vals)
    console.log(typeof vals)
    find(vals)
}


console.log("vals: " + vals)

let player1 = null;
let player2 = null;
let oppositePlayer = null;
let currentPlayer = null;

function symbol(symbol) {
    console.log(symbol)
    
    if (symbol === "x"){
        player1 = "x"
        player2 = "y"
    } else {
        player1 = "y"
        player2 = "x"
    }
    document.getElementById("p1-symbol").innerHTML= null
    document.getElementById("pick-symbol").innerHTML= null
    document.getElementById("p1-symbol").innerHTML = `Player 1 has selected ${player1},\n Player 2 is ${player2}`
    currentPlayer = player1
    oppositePlayer = player2
    document.getElementById("player-turn").className = player1
    setTimeout(clear, 2000)
    
    
    
}
let playerTurn = currentPlayer

let sum = 0

function clear() {
    document.getElementById("pick-symbol").innerHTML = null
    document.getElementById("p1-symbol").innerHTML = null
    if (sum % 2 == 0) {
        playerTurn = document.getElementById("player-turn").innerHTML = player1
        document.getElementById("player-turn").innerHTML = `Player Turn: ${player1}`
        sum++
    } else if (sum % 2 == 1) {
        playerTurn = document.getElementById("player-turn").innerHTML = player2
        document.getElementById("player-turn").innerHTML = `Player Turn: ${player2}`
        sum++
    }
    
    console.log("playerTurn: " + playerTurn)
    console.log("player1", player1)
    console.log("player2", player2)
}



function find(vals){
    removes(vals)
}


let count = 0 
function removes(vals){
    if ((playerTurn == player1) && (count % 2 == 0)) {
        console.log("player1 turn")
        document.getElementById(`${vals}`).innerText = playerTurn
        document.getElementById(`${vals}`).className = playerTurn
        document.getElementById("player-turn").innerText = `Player Turn: ${player2}`
        document.getElementById("player-turn").className = player2
        count++;
        playerTurn = player2
        checksBefore()
        checks(player1)
    }
    else if ((playerTurn == player2) && (count % 2 == 1)){
        console.log("player 2 turn")
        document.getElementById(`${vals}`).innerText = playerTurn
        document.getElementById(`${vals}`).className = playerTurn
        document.getElementById("player-turn").innerText = `Player Turn: ${player1}`
        document.getElementById("player-turn").className = player1
        count++;
        playerTurn = player1
        checksBefore()
        checks(player2)
    }
}  


let one = document.getElementById("1").innerText;
let two = document.getElementById("2").innerText;
let three = document.getElementById("3").innerText;
let four = document.getElementById("4").innerText;
let five = document.getElementById("5").innerText
let six = document.getElementById("6").innerText
let seven = document.getElementById("7").innerText
let eight = document.getElementById("8").innerText
let nine = document.getElementById("9").innerText

function checksBefore(){
    one = document.getElementById("1").innerText;
    two = document.getElementById("2").innerText;
    three = document.getElementById("3").innerText;
    four = document.getElementById("4").innerText;
    five = document.getElementById("5").innerText
    six = document.getElementById("6").innerText
    seven = document.getElementById("7").innerText
    eight = document.getElementById("8").innerText
    nine = document.getElementById("9").innerText
}


let playerWins = null

function checks(player){
    console.log("type of one",typeof one, one)
    // 1,2,3
    if ((one === "x")&&(two === "x")&& (three === "x")){
        console.log("we have a winner", player)
        playerWins = player
        winner(player)
    }
    else if ((one === "y")&&(two === "y")&& (three === "y")){
        console.log("we have a winner", player)
        player = player
        winner(player)
    }

    //1,4,7
    else if ((one === "x")&&(four === "x")&& (seven === "x")){
        console.log("we have a winner", player)
        player = player
        winner(player)
    }
    else if ((one === "y")&&(four === "y")&& (seven === "y")){
        console.log("we have a winner", player)
        player = player
        winner(player)
    }

    //1,5,9
    else if ((one === "x")&&(five === "x")&& (nine === "x")){
        console.log("we have a winner", player)
        player = player
        winner(player)
    }
    else if ((one === "y")&&(five === "y")&& (nine === "y")){
        console.log("we have a winner", player)
        player = player
        winner(player)
    }

    //2,5,8
    else if ((two === "x")&&(five === "x")&& (eight === "x")){
        console.log("we have a winner", player)
        player = player
        winner(player)
    }
    else if ((two === "y")&&(five === "y")&& (eight === "y")){
        console.log("we have a winner", player)
        player = player
        winner(player)
    }

    // 3,5,7
    else if ((three === "x")&&(five === "x")&& (seven === "x")){
        console.log("we have a winner", player)
        player = player
        winner(player)
    }
    else if ((three === "y")&&(five === "y")&& (seven === "y")){
        console.log("we have a winner", player)
        player = player
        winner(player)
    }

    // 3,6,9
    else if ((three === "x")&&(six === "x")&& (nine === "x")){
        console.log("we have a winner", player)
        player = player
        winner(player)
    }
    else if ((three === "y")&&(six === "y")&& (nine === "y")){
        console.log("we have a winner", player)
        player = player
        winner(player)
    }

    // 6,5,4
    else if ((six === "x")&&(five=== "x")&& (four === "x")){
        console.log("we have a winner", player)
        player = player
        winner(player)
    }
    else if ((six === "y")&&(five === "y")&& (four === "y")){
        console.log("we have a winner", player)
        player = player
        winner(player)
    }

    //7,8,9
    else if ((seven === "x")&&(eight === "x")&& (nine === "x")){
        console.log("we have a winner", player)
        player = player
        winner(player)
    }
    else if ((seven === "y")&&(eight === "y")&& (nine === "y")){
        console.log("we have a winner", player)
        player = player
        winner(player)
    }

    else if(count == 9){
        console.log("we have a draw")
        player = player
        winner("Draw")    
    }
    
}


function winner(player){
    //document.getElementById("game-container").innerHTML = null
    if (player == "Draw"){
        document.getElementById("player-turn").innerHTML = null
        document.getElementById("winner").innerText = `Draw`
        window.setTimeout(restart, 5000) 
    }
    else {
        console.log("winner", player)
        document.getElementById("player-turn").innerHTML = null
        document.getElementById("winner").innerText = `Winner is ${player}`
        window.setTimeout(restart, 3000)
    }
    
}

function restart() {
    window.location.reload()
}