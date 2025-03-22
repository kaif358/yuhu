gsap.to("#hello span",{
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.2,
    ease: "steps.out",
})

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".animation-div-image", 
    { scale: 0.6 }, // Initial state (smaller)
    { 
        scale: 1, // Final state (bigger)
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".container-image",
            start: "top 80%", // When 80% of viewport hits
            end: "top 10%", // Until it reaches 10%
            scrub: 2, // Smooth scaling effect
        }
    }
);

// var containerHello = document.querySelector(".container-hello");
// var cursor = document.querySelector(".cursor");

// containerHello.addEventListener("mousemove",function(dets){
//     gsap.to(cursor, {
//         x: dets.x,
//         y: dets.y,
//         duration: 1,
//         ease: "back.out"
//     })
// })

gsap.from(".animation-div-text h1",{
    y:-100,
    opacity: 0,
    duration: 1,
    stagger: 1,
    scrollTrigger: {
        trigger: ".animation-div-text",
        start: "top 65%",
        // markers: true,
        end: "top 45%",
        scrub: 2,
    }
})

gsap.registerPlugin(ScrollTrigger);

gsap.to(".gradient", {
    opacity: 1,
    scrollTrigger: {
        trigger: ".animation-div-text",
        start: "top 45%",
        // markers: true,
        end: "top 30%",
        scrub: 1
    }
});

var path = `M 0 132 Q 663 132 1326 132`;
var finalPath = `M 0 132 Q 663 132 1326 132`;

var string = document.querySelector(".string");

string.addEventListener("mousemove",function(dets){
    path = `M 0 132 Q ${dets.x} ${dets.y} 1326 132`;

    gsap.to("svg path",{
        attr: { d: path },
        duration: 0.3,
        ease: "power1.out"
    })
})

string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr: { d: finalPath },
        duration: 0.3,
        ease: "elastic.out(1,0.2)"
    })
})

const video = document.getElementById("myVideo");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        video.play();
      } else {
        video.pause();
      }
    });
  });

  observer.observe(video);

const textImagesContainers = document.querySelectorAll(".container-text-images");

textImagesContainers.forEach(container => {
    gsap.from(container,{
    y: 100,
    duration: 1,
    ease: "power3.out",
    opacity: 0,
    scrollTrigger:{
        trigger: container,
        start: "top 35%",
        // markers: true,       
        end: "top 15%",
        scrub: 2,
    }
    })
})


gsap.to(".word-container h1",{
    x: "-95%",
    scrollTrigger:{
        trigger:".word-container",
        // scroller: "body",
        // markers:true,
        start: "top 0%",
        end:"top -100%",
        scrub: 2,
        pin: true,
        // pinSpacing: false   
        }
})