const calculator = require('Calcullator');

const plus       = require ('./Plus');
const subtract   = require('./Subtract');
const multiply   = require('./Multiply');
const divide     = require('./Divide');
const mocha      = require('Mocha');
const chai       = require('chai');
const sinon      = require('Sinon');
const fakeops    = new ('fakeOps');

describe('test calculator', () => {
        const calculator = new Calculator();
        const fakeOps = { run: sinon.fake.return(2019)

        }
}); 
        calcullator.register('fake', fakeOps);
        
        if ('should return result from operator', () => {
            const result = calculator.calculate('fake',1,2);
            chai.assert(result, 2019);
            chai.assert(fakeOps.run.calledOnce, 'expect operator should be run once');
            chai.assert(fakeOps.run.calledWith, 'expect operator should be call with 1,2');

        });

        it ('can do plus', () => {
            calculator.register('+' , new Plus())
            chai.assert.equal(calculator.calculate('+', 1, 2), 2);
        });

        it ('can do subtract', () => {
            calculator.register('-', new Subtract())
            chai.assert.equal(calculator.calculate('-',2, 1), 1);
        })

        it ('can do mutiply', () => {
            calculator.register('*', new Multiply())
            chai.assert.equal(calculator.calculate('*',2, 2), 4);
        });

        it ('can do divide',() =>{
            calculator.register('/', new Divede())
            chai.assert.equal(calculator.calculate('/',4, 4, 1))
        });
