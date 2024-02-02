const openBtn = document.querySelector('#openBtn');
const popup = document.querySelector('#popup');
const closeBtn = document.querySelector('#closeBtn');

openBtn.addEventListener("click", function () {
    popup.style.display = "block";
});

closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
});