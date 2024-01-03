// for (let num=1; num<=10 ; num++)
// {
//     let no=12;
//     console.log(` ${no * num} `);
// }
// console.log(mult(10,20));

// function mult(a,b)
// {
//     return a*b;
// }
//  var arr= [ 'sagar' , 'shreyash' , 'vedant' , 'shwati'];

// for(let elements in arr)
// {
//     console.log(arr[elements]);
// }

// for(let element of arr)
// {
//     console.log(element);
// }
// var arr= [ 'sagar' , 'shreyash' , 'vedant' , 'shwati'];
// arr.forEach(function(element){
//     console.log(element);
// })

// arr.forEach((element)=>{
//     console.log(element);
// })

// var arr= [ 'sagar' , 'shreyash' , 'sagar' , 'shwati'];
// console.log(arr.indexOf("shwati"));
// console.log(arr.lastIndexOf('sagar'));
// console.log(arr.includes('sagar',3));
// const newarr= arr.splice(2,0,"sweta");
// console.log(arr);

// var arr= [ 'sagar' , 'shreyash' , 'sagar' , 'shwati'];
// const ind=arr.indexOf('sagar');
// const a=arr.splice(ind,1,'Sagar');
// console.log(`deleted ${a} Array : ${arr}`);

// const month =['jan' ,'feb' , 'march' , 'april' , 'jun'];
// const a =month.indexOf('march');

// if(a!=-1)
// {
//     const del= month.splice(a,Infinity);
//     console.log(month);
//     console.log(del);

// }
// var arr= [ 2,3,4,7,5,6,9,8];
// let newArr = arr.map((curVal,ind,arr)=>{
//     return  curVal < 9;
// })
// console.log(arr);
// console.log(newArr);


// var arr= [ 2,3,4,7,5,6,9,8];

// let newArr = arr.map((cur,index)=>{
//         return  `Index of ${cur} is ${index}`;
//     })
// console.log(newArr);

// let newArrfor = arr.forEach((cur,index)=>{
//     return  `Index of ${cur} is ${index}`;
// })
// console.log(newArrfor);

// let arr =[25 ,36 ,49, 64 ,81];
// let newarr = arr.map((cur)=>{
//     return Math.sqrt(cur);
// })
//  console.log(newarr);


// let newarr1 = arr1.map(     (cur)=>cur*2      )
//                .filter( (currval)=>currval>10 )
//                .reduce((acc,crel)=>acc+=crel);

//  console.log(newarr1);

// let arr1 =[1,2,3,4,5,6,7,8,9];
// let newarr1 = arr1.reduce((acc,crel)=>{ 
//        return acc *=crel;     
// });
// console.log(newarr1);

let arr1 =['sweta ' ,'vedika ' ,'sagar ' , 'sham'];
let newarr1 = arr1.reduce((acc,crel)=>{ 
       return acc.concat(crel);     
});
console.log(newarr1);