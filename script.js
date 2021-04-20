const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

let firstTempParent = fill.parentElement;
let tempParent = fill.parentElement;

fill.addEventListener("dragstart", (e) => {
    fill.parentElement.classList.add("dragged")
    setTimeout(() => {
        fill.parentElement.innerHTML = ""
    },1);
});

fill.addEventListener("dragend", (e) => {
    tempParent.appendChild(fill);
    empties.forEach((empty) => {
        empty.classList.remove("dragged");
    })
    firstTempParent = tempParent;
}) 

document.addEventListener("drop", (e) => {
    console.log("sa");
})


empties.forEach((empty) => {

    empty.addEventListener("dragleave" , (e) => {
        empties.forEach((empty) => {
            empty.classList.remove("dropped");
        })
    })

    empty.addEventListener("dragover", (e) => {
        tempParent = e.target;
        e.target.classList.add("dropped");
        console.log("dragover")
    })
})