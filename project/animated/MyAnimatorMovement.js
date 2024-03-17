import { MyAnimator } from "./MyAnimator.js";

export class MyAnimatorMovement extends MyAnimator {

    constructor(startVal, endVal, animDurationSecs, loop, active) {
        super(startVal, endVal, animDurationSecs, loop, active);
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.tailAngle = 0;
        this.wingAngle = 0;
    }

    updatePositionObj(elapsedTime, vector) {
        let staticSpeed = vector.speed;
        if(staticSpeed < 0.1){
            staticSpeed = 1 / this.startVal;
        }else if(staticSpeed < 2 && staticSpeed > 0.1){
            staticSpeed *= 7;
        }else{
            staticSpeed = 10;
        }

        this.x = vector.x + vector.speed * Math.sin(vector.orientation)
        this.y = this.animVal;
        this.z = vector.z + vector.speed * Math.cos(vector.orientation)
        this.tailAngle = Math.PI / 4 * Math.sin(staticSpeed * elapsedTime)
        this.wingAngle = Math.PI / 4 * Math.sin(staticSpeed * elapsedTime)
    }

    movementFunction(elapsedTime) {
        return Math.sin(elapsedTime / this.startVal);
    }
}