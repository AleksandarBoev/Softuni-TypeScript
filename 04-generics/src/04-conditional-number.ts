/*
What happens here: based on generic type T, we decide what the type of a function parameter should be.
 */
type NumberOrString<T> = T extends number ? number : string; //if T is number then the resulting type is number. If T is anything else, then resulting type is string

function conditionalNumber<T>(param: NumberOrString<T>) {
    if (typeof param === 'number') { //param type is number when <T> is number
        console.log(param.toFixed(2));
    } else if (typeof param === 'string') { //param type is string when <T> is NOT number
        console.log(param);
    }
}


conditionalNumber<number>(20.3555); //<number> is set, so "NumberOrString" is number
conditionalNumber<string>('wow'); //<string> is set, so "NumberOrString" is string
conditionalNumber<boolean>('a string');//<boolean> is set, so "NumberOrString" is string

conditionalNumber<boolean>(30); //highlighted in red
conditionalNumber<number>('test'); //highlighted in red