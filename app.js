//Scales image based on viewport width
window.addEventListener("resize", () => {
    const viewportWidth= window.innerWidth / 1000;
    const fullSize = 1

    if (viewportWidth >= 1){
        document.documentElement.style
            .setProperty('--scale', fullSize);               
    } 
    
    else{
        document.documentElement.style
            .setProperty('--scale', viewportWidth);
    }
})









