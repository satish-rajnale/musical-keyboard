/**
 * Beat class that keeps track of playing the audio
 * HINT: Make sure to pass in the audioSrc as parameter to create a new audio track
 * HINT: Create a play function to play the audio if called 
 */
class Beat {
    constructor(src){
        this.audio = new Audio(src);
    }
    play(){
        this.audio.currentTime = 0;
        return this.audio.play();
    }
}



/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
    constructor(color, keyCode){
        this.color = color;
        this.keyCode  = keyCode;
        this.element = document.getElementById(keyCode);
    }

    /**
     * Set the button color based on color specified
     */
    setButtonColorInHTML = () => {
        this.element.style.borderColor = this.color;

        // let mycolor = `border-color:${this.color}`;
        // document.getElementById(this.keyCode).setAttribute("style", mycolor);
    }

    select = () => {
        this.element.style.backgroundColor = this.color;
        this.element.style.boxShadow = `0px 0px 17px 0px ${this.color}`;
    }

    /**
     * Deselect function to reset background color and boxShadow
     */
    deselect = () => {
        this.element.style.backgroundColor = "transparent";
        this.element.style.boxShadow = "none";
    }
}