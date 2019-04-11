const operators = require('./Operator/operators');


class Calculator {
    constructor() {
        this.operators = {
            'add' : new operators.Add,
            'div' : new operators.Div,
            
        };
    }
    do(operator, firstNum, secondNum) {
        return this.operators[operator].operate(firstNum, secondNum);
    }
}

module.exports = Calculator;