let marks1=[85,55,75,45,52];
let total1=marks1[0]+marks1[1]+marks1[2]+marks1[3]+marks1[4]
console.log("Total :\t "+total1)


let marks=[85,55,75,45,52]; //Array destructuring
let [m1,m2,m3,m4,m5]=marks;
let total=m1+m2+m3+m4+m5;
console.log("Total :\t "+total);
let avg=total/5;
console.log("Average :"+avg);

total=0;
for(let i=0;i<marks.length;i++){
    console.log(`${i} : ${marks[i]}`)
    total+=marks[i]
}
