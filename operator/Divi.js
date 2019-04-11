class division {
    operate(firstNum,secondNum) {
        if (secondNum == 0 ) {
            throw new Error ('divi by zero');
        } else
        return firstNum / secondNum
    }
}
module.export = division;