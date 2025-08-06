let menuBtn = document.querySelector(".menu-btn");
let menuIcon = document.querySelector(".fi-rr-menu-burger");
let closeBtn = document.querySelector(".close-btn");
let closeIcon = document.querySelector(".fi-sr-cross");
let links = document.querySelectorAll("a");

let switchBtn = document.querySelector(".switch");

let toggleBtn = document.querySelector(".toggle-btn");

let campBtn = document.querySelector(".camp-btn");

let eventBtn = document.querySelectorAll(".event-btn")

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

}).to("h1, .change, .clickMe", {

    color: "black",
    duration: 0.1,
    ease: "power3.out",

}, "<").to("body, .toggle-btn", {
    backgroundColor: "black",
    color: "#00b0eb",
    duration: 0.1,
    ease: "power3.out",

}, "<").to(".camp-btn", {
    backgroundColor: "black",
    color: "rgb(255, 157, 0)",
    duration: 0.1,
    ease: "power3.out",

}, "<").to(".circle, .day-night", {
    background: "black",
    duration: 0.1,
    ease: "power3.out",

}, "<");

switchBtn.addEventListener("click", () => {

    if(tlm.reversed()) {
        tlm.play();
    }else {
        tlm.reverse();
    }
}); 

toggleBtn.addEventListener("mouseenter", () => {
    if (!tlm.reversed()) { // night mode

        tlm.to(toggleBtn, {
            duration: 0.3,
            color: "black",
            backgroundColor: "#00b0eb",
            ease: "power3.inOut",
        });
    }
});

toggleBtn.addEventListener("mouseleave", () => {
    if (!tlm.reversed()) { 

        tlm.to(toggleBtn, {
            duration: 0.3,
            color: "#00b0eb",
            backgroundColor: "black",
            ease: "power3.inOut",
        });
    }
});

campBtn.addEventListener("mouseenter", () => {
    if (!tlm.reversed()) { 

        tlm.to(campBtn, {
            duration: 0.3,
            color: "black",
            backgroundColor: "rgb(255, 157, 0)",
            ease: "power3.inOut",
        });
    }
});

campBtn.addEventListener("mouseleave", () => {
    if (!tlm.reversed()) { 

        tlm.to(campBtn, {
            duration: 0.3,
            color: "rgb(255, 157, 0)",
            backgroundColor: "black",
            ease: "power3.inOut",
        });
    }
});


toggleBtn.addEventListener("click", () => {

    const container = toggleBtn.closest("section");

    container.classList.toggle("expanded");
        
    toggleBtn.textContent = container.classList.contains("expanded") ? "Show Less" : "Learn More";
});

campBtn.addEventListener("click", () => {

    const container = campBtn.closest("section");

    container.classList.toggle("expanded");
        
    campBtn.textContent = container.classList.contains("expanded") ? "Show Less" : "Learn More";
});

eventBtn.forEach(button => {

    button.addEventListener("click", () => {

        const container = button.closest(".content");
        container.classList.toggle("expanded");
        button.textContent = container.classList.contains("expanded") ? "Show Less" : "Learn More";
    });
})
