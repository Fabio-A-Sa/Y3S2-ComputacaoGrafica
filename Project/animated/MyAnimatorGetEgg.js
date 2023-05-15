import { MyAnimator } from "./MyAnimator.js";

export class MyAnimatorGetEgg extends MyAnimator {

    constructor(startVal, endVal, animDurationSecs, loop, active) {
        super(startVal, endVal, animDurationSecs * 0.5, loop, active);
        this.y = 0;
    }

    updatePositionObj(elapsedTime, vector) {
        if (this.active){
            this.y = this.animVal;
        }
    }

    movementFunction(x) {
        return x;
    }
}