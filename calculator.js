class calculator{
    add(x,y){
        return x + y;
    }
    subtract(x,y){
        return x - y;
    }
    divide(x,y){
        return x / y;
    }
    multiply(x,y){
        return x * y;
    }

}

const newCalculator = new calculator;
module.exports = newCalculator;