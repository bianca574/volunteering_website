let clickMeBtn = document.querySelectorAll(".clickMe, .content-card");

clickMeBtn.forEach(clickBtn => {
    clickBtn.addEventListener("click", () => {
        const card = clickBtn.closest(".card");
        const content = card.querySelector(".content-card");
        const isExpanded = content.classList.contains("expanded");
        const name = content.querySelector(".name");
        const surname = content.querySelector(".surname");
        const leftName = content.querySelector(".leftName");
        const leftSurname = content.querySelector(".leftSurname");
        const rightName = content.querySelector(".rightName");
        const rightSurname = content.querySelector(".rightSurname");

        if(!isExpanded) {
            content.classList.add("expanded");

            gsap.set(name, { x: "-400%" });
            gsap.set(surname, { x: "400%" });
            gsap.set(leftName, { x: "-400%" });
            gsap.set(leftSurname, { x: "400%" });
            gsap.set(rightName, { x: "-400%" });
            gsap.set(rightSurname, { x: "400%" });

            const tl1 = gsap.timeline();

            tl1.to(content, {
                height: "100%",
                width: "100%",
                left: 0,
                duration: 0.3,
                ease: "power1.inOut",

            }).to(name, {
                x: "-100%",
                duration: 0.5,
                ease: "power1.inOut",

            }).to(leftName, {
                x: "-130%",
                duration: 0.5,
                ease: "power1.inOut",

            }, "<").to(rightName, {
                x: "-50%",
                duration: 0.5,
                ease: "power1.inOut",

            }, "<").to(surname, {
                x: "100%",
                duration: 0.5,
                ease: "power1.inOut",

            }, "<").to(leftSurname, {
                x: "50%",
                duration: 0.5,
                ease: "power1.inOut",

            }, "<").to(rightSurname, {
                x: "170%",
                duration: 0.5,
                ease: "power1.inOut",

            }, "<");
        } else {
            content.classList.remove("expanded");

            const tl2 = gsap.timeline();

            tl2.to(name, {
                x: "-400%",
                duration: 0.3,
                ease: "power1.inOut",

            }, "<").to(leftName, {
                x: "-400%",
                duration: 0.3,
                ease: "power1.inOut",

            }, "<").to(rightName, {
                x: "-400%",
                duration: 0.3,
                ease: "power1.inOut",

            }, "<").to(surname, {
                x: "400%",
                duration: 0.3,
                ease: "power1.inOut",

            }, "<").to(leftSurname, {
                x: "400%",
                duration: 0.3,
                ease: "power1.inOut",

            }, "<").to(rightSurname, {
                x: "400%",
                duration: 0.3,
                ease: "power1.inOut",

            }, "<").to(content, {
                height: 0,
                width: "80%",
                left: "10%",
                duration: 0.3,
                ease: "power1.inOut"
            });
        }
    });
});