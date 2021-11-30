function main() {
    var lineDrawing = anime({
        targets: '#lineDrawing .lines .outer',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 100,
        direction: 'alternate',
        complete: function (anim) {
            document.getElementById("welcome").style.display = "none";
            document.getElementById("content").style.display = "";
            unfade(document.getElementById("home"));
            unfade(document.getElementById("navcontent"));
        }
    });
    var lineDrawing2 = anime({
        targets: '#lineDrawing .lines .inner',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function (el, i) { return 400 },
        direction: 'normal'
    });
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    var timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 50);
}

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

document.addEventListener("DOMContentLoaded", main);