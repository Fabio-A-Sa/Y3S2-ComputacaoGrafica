import { MyAnimator } from "./MyAnimator.js";

export class MyAnimatorDropEgg extends MyAnimator {

    constructor(startVal, endVal, animDurationSecs, loop, active) {
        super(startVal, endVal, animDurationSecs, loop, active);
        this.y = 0;
    }

    updatePositionObj(elapsedTime, vector) {
        if (this.active)
            this.y = this.animVal;
    }

    movementFunction(x) {
        return x
    }
}