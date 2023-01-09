let x=[12,54,32];
let y={
    maths:12,
    tamil:21,
    "english":14
};

console.log(x[0]);
console.log(y.maths);
console.log(y['tamil']);
console.log(y['english']);


let subjects=new Object();
subjects.maths=22;
subjects.tamil=52;
subjects.english=42;
subjects["math"]=85;

console.log(subjects.maths);
console.log(subjects['tamil']);
console.log(subjects['english']);