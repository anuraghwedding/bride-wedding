function initializeMeetCouple() {

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        defaults: {
            ease: "power2.out"
        },
        scrollTrigger: {
            trigger: ".meet-couple",
            start: "top top",
            end: "+=1200",
            pin: true,
            scrub: 1.5,
            anticipatePin: 1,
            invalidateOnRefresh: true
        }
    });

    tl.to(".couple-intro", {
        opacity: 0,
        scale: 0.96,
        y: -25,
        duration: 0.8,
        ease: "power2.inOut"
    }, 0);

    tl.to(".couple-final", {
        opacity: 1,
        duration: 0.8,
        ease: "expo.out"
    }, 0.2);

    tl.fromTo(".bride",
        {
            opacity: 0,
            y: 60
        },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out"
        },
        0.3
    );

    tl.fromTo(".groom",
        {
            opacity: 0,
            y: 60
        },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out"
        },
        0.4
    );

}