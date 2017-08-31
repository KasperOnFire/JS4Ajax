document.getElementById("north").onclick = function () {
    document.getElementById("cloverP").innerHTML += "<p>you pressed north</p>";
};

document.getElementById("south").onclick = function () {
    document.getElementById("cloverP").innerHTML += "<p>you pressed south</p>";
};

document.getElementById("west").onclick = function () {
    document.getElementById("cloverP").innerHTML += "<p>you pressed west</p>";
};

document.getElementById("east").onclick = function () {
    document.getElementById("cloverP").innerHTML += "<p>you pressed east</p>";
};