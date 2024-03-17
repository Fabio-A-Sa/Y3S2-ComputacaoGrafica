export class MyAnimator {

    constructor(startVal, endVal, animDurationSecs, loop, active) {
        this.startVal = startVal;
        this.endVal = endVal;
        this.animDurationSecs = animDurationSecs;
        this.length = (this.endVal - this.startVal);
        this.animVal = this.startVal;
        this.active = active;
        this.loop = loop;
        this.last = 0;
    }

    movementFunction(time) {
        throw new Error('Subclass must implement abstract method');
    }

    updatePositionObj(){
        throw new Error('Subclass must implement abstract method');
    }

    enable(timeSinceAppStart) {
        this.active = true;
        this.last = timeSinceAppStart
        this.lastIteration = false;
    }

    disable() {
        this.active = false;
    }

    update(elapsedTimeSecs, vector) {
        
        if (this.active) {
            let timeSinceAnimationStart = elapsedTimeSecs - this.last;
            if (this.loop || (timeSinceAnimationStart >= 0 && !this.lastIteration)) {
                if(!(timeSinceAnimationStart <= this.animDurationSecs) && !this.loop){
                    this.animVal = this.startVal + this.movementFunction(1) * this.length;
                    this.updatePositionObj(timeSinceAnimationStart, vector);
                    this.lastIteration = true
                }else{
                    this.animVal = this.startVal + this.movementFunction(timeSinceAnimationStart / this.animDurationSecs) * this.length;
                    this.updatePositionObj(timeSinceAnimationStart, vector);
                }
            }
        }
    }
}