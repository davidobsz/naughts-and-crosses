document.getElementById("index-btn").addEventListener("click", goToGame);
function goToGame() {
    console.log("clicked")
    window.location.replace("/templates/game.html")
}