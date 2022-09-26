(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            let area;

            // pi -> Math.PI()
            let pi = Math.PI
            // radius -> this.radius -> 3
            let radius = this.radius;
            // radius ^ 2 --> Math.pow(radius, 2)
            let radiusPow2 = Math.pow(radius, 2);

            area = pi * radiusPow2;
            console.log(area);
            return area; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.

            // If doRounding is true, round the result (of getArea) to the
            // nearest integer.
            // Otherwise, output the complete value

            // if-else statement
            // if doRoundinig == true -> round getArea() up to the
            // nearest int
            // let resultArea = this.getArea();
            // // doRounding Up -> Math.ceil(doRounding)
            // else (if doRounding is NOT true (!==) true) -> return
            // doRounding
            let resultArea = this.getArea();
            console.log("resultArea: ",  resultArea);
            console.log("doRounding: ", doRounding)
            if(doRounding === true){
                return Math.ceil(resultArea)
            } else {
                return resultArea;
            }

            console.log("Area of a circle with radius: " + this.radius + ", is: " + resultArea);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    alert(circle.radius)
    circle.radius = 5
    alert(circle.radius)

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();