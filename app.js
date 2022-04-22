const overlay = document.querySelector('.overlay');



TweenMax.to(".overlay h1", 2,{
    opacity:0,
    y:-60,
    ease:Expo.easeInout
})

TweenMax.to(".overlay span", 2,{
    delay:.3,
    opacity:0,
    y:-60,
    ease:Expo.easeInout
})

TweenMax.to(".overlay ", 2,{
    delay: 1,
    top:"-100%",
    ease:Expo.easeInout
})
TweenMax.from(".ellipse-container",1,{
    delay: 2.5,
    opacity: 0,
    ease: Expo.easeInout
})