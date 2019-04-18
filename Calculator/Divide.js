class Divide {
    operate(number1, number2) {
        if (number2 ==0) {
            throw "divi by zero";

        } else
        return number1 / number2;
    }
 }
module.exports = Divide;
