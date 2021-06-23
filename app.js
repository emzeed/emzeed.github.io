const drpDwnBtn = document.getElementById('contact-drp');
const drpDwnContent = document.getElementById('contact-content');

drpDwnBtn.addEventListener('click', () => {
    if (drpDwnContent.style.display === "none") {
        drpDwnContent.style.display = "block";
    } else {
        drpDwnContent.style.display = "none";
    }
})

const toggle = document.getElementById('toggle');
const ul = document.getElementById('ul');

toggle.addEventListener('click', () => {
    if (ul.style.display === "none") {
        ul.style.display = "block";
    } else {
        ul.style.display = "none"
    }
})