const newCalculator = require('./calculator');
describe('test if Calculator works as expected', () =>{
    test('if the add function works', () => {
        expect(newCalculator.add(2,4)).toEqual(6);
    });
    test('if the subtraction function works', () => {
        expect(newCalculator.subtract(4,3)).toEqual(1);
    });
    test('if the divide function works', () => {
        expect(newCalculator.divide(6,3)).toEqual(2);
    });
    test('if the add function works', () => {
        expect(newCalculator.multiply(2,4)).toEqual(8);
    });
});