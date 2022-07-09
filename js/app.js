let header = document.querySelector(".header");
let scrollToTop = document.querySelector(".scroll-to-top")

ScrollReveal().reveal('.content',{delay:500});
ScrollReveal().reveal('.content');


let headerControl = new Waypoint({
    element: document.getElementById('about'),
    handler: function(direction) {
        if (direction === "down"){
            header.classList.add("shadow")
            scrollToTop.style.display ="block"
            scrollToTop.classList.add("animate__slideInUp")

        }else {
            header.classList.remove("shadow")
            scrollToTop.style.display ="none"
            scrollToTop.classList.remove("animate__slideInUp")


        }
    },
    offset: '75%'
})


ScrollReveal({
    orient : "top",
    distance: "300px",
    duration : 3000,
    reset : true,
}).reveal(".content",{
    interval :200
})
