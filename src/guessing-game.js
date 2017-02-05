

class GuessingGame {
    constructor() {
        this.foundNumber = 0;
        this.min = 0;
        this.max = 0;
    }

    /**
     * method accepts min and max value of range of number to guess
     * @param min
     * @param max
     */
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    /**
     * method returns solution candidate (you make an assumption based on range and previous assumptions)
     */
    guess() {
        this.foundNumber = Math.round( (this.min + (this.max - this.min) / 2) );
        return this.foundNumber;
    }

    /**
     * this method is called if prev call of `guess()` returned number which is greater than answer
     */
    lower() {
        this.setRange(this.min, this.foundNumber);

    }

    /**
     * method is called if prev call of `guess()` returned number which is lower than answer
     */
    greater() {
        this.setRange(this.foundNumber, this.max);

    }
}



module.exports = GuessingGame;

