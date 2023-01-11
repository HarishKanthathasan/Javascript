// function myfunction(name){
//     return `welcome ${name}`;
// }
// console.log(myfunction(`Harish`));

// let myfunction1=(name1)=>{
//     return `welcome ${name1}`;
// }
// console.log(myfunction1(`Harish_a`));

// let myfunction2=name2=>`welcome ${name2}`; //one value()theva ila
// console.log(myfunction2(`Harish_arrow`));


// let myfunction=(fnum,snum)=>{
//     return fnum + snum
// }
// console.log(myfunction(10,20));

marks=[20,25,30]

// marks.forEach(function(item,index,array){
//     console.log(item);
// });

// marks.forEach((item,)=>{
//     console.log(item);
// })

// marks.forEach((item,index,array)=>console.log(item))
total=0;
marks.forEach((item,index,array)=>console.log(total+=item));

marks.forEach((item,index,array)=>{
    console.log(`${index} : ${item}`);
    total+=item;
})
console.log(total);