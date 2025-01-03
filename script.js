var typed = new Typed(".typing", {
    strings: ["Java Developer", "Software Engineer", "Startuper", "Designer"],
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

let cx, cy, mouseX, mouseY, posX, posY, clientX, clientY, dx, dy, tiltx, tilty, request, radius, degree

document.addEventListener('DOMContentLoaded', () => {

    // Custom JS

    const body = document.querySelector('body')

    cx = window.innerWidth / 2
    cy = window.innerHeight / 2

    body.addEventListener('mousemove', e => {

        clientX = e.pageX
        clientY = e.pageY

        request = requestAnimationFrame(updateMe)

        mouseCoords(e)
        cursor.classList.remove('hidden')
        follower.classList.remove('hidden')

    })

    function updateMe() {

        dx = clientX - cx
        dy = clientY - cy
        tiltx = dy / cy
        tilty = dx / cx
        radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2))
        degree = radius * 12
        gsap.to('.content', 1, { transform: `rotate3d( ${tiltx}, ${tilty}, 0, ${degree}deg )` })

    }

    gsap.to('.card', { zoom: .98 })
    gsap.to('.l_main', { opacity: 1, duration: .1 })
    gsap.to('.l2_main', { opacity: 1, left: -10, top: 10, duration: .25, delay: .25 })
    gsap.to('.l3_main', { opacity: 1, left: -20, top: 20, duration: .25, delay: .25 })
    gsap.to('.card-russia', { opacity: .07, duration: .1 })
    gsap.to('.card-logo_w', { opacity: 1, duration: .225 })
    gsap.to('.card-chip', { opacity: 1, duration: .225 })
    gsap.to('.card-valid', { opacity: 1, zoom: 1, duration: .1, delay: .25 })
    gsap.to('.card-number-holder', { opacity: 1, zoom: 1, duration: .1, delay: .25 })

    const cursor = document.getElementById('cursor'),
        follower = document.getElementById('aura'),
        links = document.getElementsByTagName('a')

    mouseX = 0, mouseY = 0, posX = 0, posY = 0

    function mouseCoords(e) {

        mouseX = e.pageX
        mouseY = e.pageY

    }

    gsap.to({}, .01, {

        repeat: -1,

        onRepeat: () => {

            posX += (mouseX - posX) / 5
            posY += (mouseY - posY) / 5

            gsap.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            })

            gsap.set(follower, {
                css: {
                    left: posX - 24,
                    top: posY - 24
                }
            })

        }

    })

    for (let i = 0; i < links.length; i++) {

        links[i].addEventListener('mouseover', () => {
            cursor.classList.add('active')
            follower.classList.add('active')
        })

        links[i].addEventListener('mouseout', () => {
            cursor.classList.remove('active')
            follower.classList.remove('active')
        })

    }

    body.addEventListener('mouseout', () => {
        cursor.classList.add('hidden')
        follower.classList.add('hidden')
    })

})
