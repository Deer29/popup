// ****************************** Assignments For Lessons 102 To 110 ****************************** //
// assignment_1 :
function numbers() {
    let msg = prompt("Print Number From – To", "Example: 5-20");
    
    let parts = msg.split("-");
    let start = parseInt(parts[0]);
    let end = parseInt(parts[1]);

    if(start < end) {
        for(let i = start; i >= end; i++) {
            console.log(i);
        }
    } else if(start > end) {
        for(let i = start; i >= end; i--) {
            console.log(i);
        }
    } else {
        console.log("Start and End are equal:", start);
    }
}
// numbers()
/* --------------------------------------------------------------------------- */
// assignment_2 :
let popupContainer = document.querySelector(".popupContainer")
let popup = document.querySelector(".popup");
let closeImg = document.querySelector(".close");

window.addEventListener("click", () => {
    popupContainer.style.display = "none";
});

setTimeout(() => {
    popupContainer.style.display = "block";
}, 5000);
/* --------------------------------------------------------------------------- */
// assignment_2 :
let counter = document.querySelector(".counter");
function countDown () {
    counter.innerHTML -= 1
    if(counter.innerHTML === "0") {
        clearInterval(counterDown);
        counter.style.display = "none";
    }


}
let counterDown= setInterval(countDown, 1000);