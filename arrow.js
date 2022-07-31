//funcation
function doubbleIt (num) {
    return num *2 ;
}

const result = doubbleIt(5);
console.log(result);

//var funcation
const multiplui = function  (num) {
    return num * 5;
}
const result1 = multiplui(10);
console.log(result1);

//advance funcation

const advance = num =>num * 8;
const rr = advance(12);
console.log(rr);

//multi parameter funcation
const sum = (x,y=10)=>x+y;
const rs = sum(12);
console.log(rs);

//another es6 funcation 

const dif = (x,y)=>{
    const sum = x+y;
    const diff = x*y;
    const result5 = diff/sum;
    return result5;
}
const calcluet = dif(120,34);
console.log(calcluet);