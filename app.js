//Scales image based on viewport width
window.addEventListener("resize", () => {
    //get current width of viewport
    const viewportWidth = window.innerWidth;
    //divide by 1000 to get usable value
    const scaleFactor = viewportWidth / 1000;
    //set 100% scale value
    const fullSize = 1;

    //checks if scale value is greater than 100%, if true, set scale to 100%
    if (scaleFactor >= fullSize){
        document.documentElement.style
            .setProperty('--scale', fullSize);               
    } 

    //scales image down if value is less than 100%
    else{
        document.documentElement.style
            .setProperty('--scale', scaleFactor);
    }
})

//could add elseif to handle errors and set to 100%?







