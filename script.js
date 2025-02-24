


var naavy = document.getElementsByClassName("navi")
var length = naavy.length;

for(var i=0; i<length; i++) {
    naavy[i].addEventListener("click", function() {
        highlight(this);
    });
}

function highlight(element) {
    for(var i=0; i<length; i++) {
       naavy[i].classList.remove("white");
    }

    element.classList.add("white");
}