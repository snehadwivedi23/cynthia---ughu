const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var timeout ;

function firstPageAnim() {
     var tl = gsap.timeline();

     tl.from("#nav" , {
        y : '-10',
        opacity:0,
        duration:1.5 ,
        ease: Expo.easeInout
     })

     .to(".boundingelem" , {
        y: 0 ,
        ease:Expo.easeInOut ,
        duration:2 ,
        delay:-1 ,
        stagger:.2
     })
     .from("#herofooter" , {
        y : '-10',
        opacity:0,
        duration:1.5 ,
        delay: -1 ,
        ease: Expo.easeInout
     })
}
function circlechaptakaro(){
   //define default scale value //
   var xscale = 1 ;
   var yscale = 1 ;
   var xprev = 0 ;
   var yprev = 0 ;
    window.addEventListener("mousemove", function(dets){
       this.clearTimeout(timeout);
      xscale = gsap.utils.clamp(.8 , 1.2 , dets.clientX - xprev );
      yscale = gsap.utils.clamp(.8 , 1.2 , dets.clientY - yprev );
       
      xprev = dets.clientX ;
       yprev = dets.clientY ;
         
    circlemousefollower(xscale , yscale);
     timeout = setTimeout( function(){
      document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)  scale(1 , 1)` ;
     } , 100)
    //   console.log(xdiff , ydiff)

    })
}
circlechaptakaro();
 
function circlemousefollower(xscale , yscale){
     window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)  scale(${xscale} , ${yscale})` ;
     })
}
circlemousefollower();
firstPageAnim();

document.querySelectorAll(".elem").forEach(function(elem) {
   var rotate = 0 ;
   var diffrot = 0 ;
   elem.addEventListener("mouseleave" , function(dets){
   gsap.to(elem.querySelector("img") , {
   opacity: 0 ,
   duration: .5 ,

   });
   });
   elem.addEventListener("mousemove" , function(dets){
      // console.log(details.clientX , details.clientY);
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    var diffrot = dets.clientX - rotate ;
    rotate = dets.clientX;


      gsap.to(elem.querySelector("img") , {
         opacity: 1 ,
         // ease:power ,
         top:diff ,
         left:dets.clientX ,
         rotate: gsap.utils.clamp( -20 , 20 , diffrot* 0.5),
      });
   });
});