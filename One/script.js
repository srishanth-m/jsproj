var rect = document.querySelector("#center");

rect.addEventListener("mousemove" , function(dets){
    var rectlocation = rect.getBoundingClientRect();
    var inrect = (dets.clientX - rectlocation.left);

    if(inrect < rectlocation.width / 2){
        var redcolor = gsap.utils.mapRange(0 , rectlocation.width / 2 , 255 , 0 , inrect);
        gsap.to(rect , {
            backgroundColor : `rgb(${redcolor}, 0 , 0)`,
            ease : Power4,
        })
    }else{
        var bluecolor = gsap.utils.mapRange(rectlocation.width / 2 , rectlocation.width , 0 , 255 , inrect);
        gsap.to(rect , {
            backgroundColor : `rgb(0 , 0 , ${bluecolor})`,
            ease : Power4,
        })
    }
})

rect.addEventListener("mouseleave" , function(){
    gsap.to(rect , {
        backgroundColor : "white",
    })
})