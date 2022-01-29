let charObj = document.getElementById("character");
let blockObj = document.getElementById("block");
let szamlalo = 0;

function jump() {
    if (character.classList == "animate") {
        return
    }
    character.classList.add("animate");
    setTimeout(function () {
        character.classList.remove("animate");
    }, 1500);
}

let checkDead = setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(charObj).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(blockObj).getPropertyValue("left"));
    if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
        blockObj.style.animation = "none";
        alert("Játék Vége ! Pontszám: " + Math.floor(szamlalo / 100));
        szamlalo = 0;
        blockObj.style.animation = "csuszik 5s infinite linear";
        //blockObj.style.display = "none";
        //charObj.style.animation = "none";

    }
    /* else {
        szamlalo++;
        document.getElementById("pontszam").innerHTML = "Pontszám:" + Math.floor(szamlalo / 490);
    } */

    if (blockLeft < -10) {
        szamlalo++;
        document.getElementById("pontszam").innerHTML = "Pontszám:" + Math.floor(szamlalo / 9);
    }
}, 10)

function mehet() {
    blockObj.style.animation = "csuszik 5s infinite linear";
    szamlalo = 0;
    document.getElementById("pontszam").innerHTML = "Pontszám: 0"
}

function leall() {
    blockObj.style.animation = "none";
    szamlalo = 0;
    //document.getElementById("pontszam").innerHTML = "Pontszám: 0";

}