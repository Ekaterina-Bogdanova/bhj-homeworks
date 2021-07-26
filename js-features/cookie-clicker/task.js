let clicker = document.getElementById("clicker__counter");
let counter = Number(clicker.textContent);

let imgCookie = document.getElementById("cookie");

imgCookie.onclick = function() {
    counter++;
    clicker.textContent = counter;
    if (counter % 2 !== 0) {
        imgCookie.width = "300";
    } else {
        imgCookie.width = "200"; 
    }
};