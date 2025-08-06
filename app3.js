gsap.registerPlugin(ScrollTrigger);

const leftImgs = gsap.utils.toArray(".from-left-img");
const rightImgs = gsap.utils.toArray(".from-right-img");

leftImgs.forEach(img => {
  gsap.set(img, { x: -300, opacity: 0 });

  gsap.to(img, {
    scrollTrigger: {
      trigger: img,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    x: 0,
    opacity: 1,
    duration: 0.5,
    ease: "power2.out",
  });
});

rightImgs.forEach(img => {
  gsap.set(img, { x: 300, opacity: 0 });

  gsap.to(img, {
    scrollTrigger: {
      trigger: img,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    x: 0,
    opacity: 1,
    duration: 0.5,
    ease: "power2.out",
  });
});

gsap.utils.toArray(".scale-img").forEach(img => {

  gsap.to(img, {
    scrollTrigger: {
      trigger: img,
      start: "top 80%", 
      toggleActions: "play reverse play reverse",
    },

    opacity: 1,
    duration: 0.2,
    ease: "power2.out",
  });

  ScrollTrigger.create({
      trigger: img,
      start: "top 80%",
      onEnter: () => {

        gsap.set(img, { scale: 0 });
        
        gsap.to(img, {
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
        });
      }
  });
});

document.querySelectorAll(".scroll-img").forEach(img => {

    gsap.to(img, {
      scrollTrigger: {
        trigger: img,
        start: "top 80%",
        toggleActions: "play reverse play reverse", 
      },
      opacity: 1,
      duration: 0.2,
      ease: "power2.out",
    });

    ScrollTrigger.create({
      trigger: img,
      start: "top 80%",
      onEnter: () => {

        gsap.set(img, { rotate: 0 });
        
        gsap.to(img, {
          rotate: "+=360",
          duration: 0.5,
          ease: "power2.out",
        }); 
      }
  });
});