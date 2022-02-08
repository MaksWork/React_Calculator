const operators = {
    "+": (a, b) => {return a + b;},
    "-": (a, b) => {return a - b;},
    'X': (a, b) => {return a * b;},
    '÷': (a, b) => {return a / b;}
};

export const logic_equals = (first_num, sign , secNum) =>{
    return operators[sign](first_num, secNum).toString();
}