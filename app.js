let menuBtn = document.querySelector(".menu-btn");
let menuIcon = document.querySelector(".fi-rr-menu-burger");
let closeBtn = document.querySelector(".close-btn");
let closeIcon = document.querySelector(".fi-sr-cross");
let links = document.querySelectorAll("a");
let switchBtn = document.querySelector(".switch");

let tl = gsap.timeline({
    paused: true,
});

tl.to(".switch, .day-night", {

    opacity: 0,
    duration: 0.1,
    ease: "power2.out",

}).to(".circle", {
    scale: 20,
    duration: 0.9,
    ease: "power1.inOut",
    stagger: {
        
        amount: 0.15,
        each: 0.05, 
        from: 0,
    },

}).to(".fi-rr-menu-burger", {
    x: -200,
    duration: 0.2,

}).to(".el", {
    x: 950,
    duration: 0.5,
    ease: "power1.out",
    stagger: {
        
        amount: 0.08,
        each: 0.02, 
        from: 0,
    },

}).to(".close-btn", {
    x: -150,
    duration: 0.2,
    ease: "power1.out",
});

menuBtn.addEventListener("click", () => {

    tl.play();
});

menuIcon.addEventListener("click", () => {
    tl.play();
});

closeBtn.addEventListener("click", () => {
    tl.reverse();
});

closeIcon.addEventListener("click", () => {
    tl.reverse();
});

links.forEach(link => {

    link.addEventListener("click", () => {
        tl.reverse();
    });
});

let tlm = gsap.timeline({
    paused: true,
});

tlm.to(".switch", {
    x: 49,
    duration: 0.3,
    ease: "power1.out",
    background: "black",

}).to("body", {
    background: "black",
    color: "#31adf0",
    duration: 0.1,
    ease: "power1.out",

}).to(".fi-rr-menu-burger", {
    color: "black",
    duration: 0.1,
    ease: "power3.out",

}).to("a, .fi-sr-cross", {

    color: "black",
    duration: 0.1,
    ease: "power2.out",

});

switchBtn.addEventListener("click", () => {

    if(tlm.reversed()) {
        tlm.play()
    }else {
        tlm.reverse();
    }
});

