var typed = new Typed(".typing", {
    strings: ["Java Developer", "Designer", "Startuper", "DevOps"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}


var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function sendEmail(event) {
    event.preventDefault();

    var sender = document.getElementById("sender").value;
    var recipient = document.getElementById("recipient").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var mailtoLink = "mailto:" + recipient +
        "?cc=" + encodeURIComponent(sender) +
        "&from=" + encodeURIComponent(sender) +
        "&subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(message);
    // Open the user's default email client
    window.location.href = mailtoLink;
}