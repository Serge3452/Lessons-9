  // Домашнее задание 9

//Задание 1 
let a = [1,2,3,4,5,6,7,8,9];
let btn = document.querySelector(".btn");
btn.onclick=function () {
    document.querySelector(".next").innerHTML = a[5] ;

}
// Задание 2
let btn1 = document.querySelector(".btn1");
let b = " ";
btn1.onclick=function () {
    for (let i = 0; i <= a.length; i++) {
        if (a[i] % 2 == 0) {
          b+= a[i]+ " ";
            document.querySelector(".next2").innerHTML = b ;
        }
      }
    }
 
// Задание 3
let btn2 = document.querySelector(".btn2");
let d = " ";
btn2.onclick=function () {
    for (let u = 0; u <= a.length; u++) {
        if (a[u] % 2 != 0) {
          d += a[u]+ " ";
            document.querySelector(".next3").innerHTML = d ;
        }
      }
    }
 
// Задание 4
let btn3 = document.querySelector(".btn3");
let c = [[1,2,3], 
        [4,5,6],
        [7,8,9],
      ]
let k = " ";

btn3.onclick=function () {
  for (let i = c.length-1; i>=0; i--){
    for (let r=c[i].length-1;r>=0;r--)
   k +=c[i][r];
  }
    
  document.querySelector(".next4").innerHTML = k ;
        }
 
 



// let a = "Тирион";
// let b = "Ланистер";
// let c = 50;

// let d = ["Тирион", "Ланистер", 50, true, 19n];
// let e = ["Batman", " You", "Superman","Joker"]
// let f = []
// //console.log(e.length);

// for (let i = 0; e.length>i; i++) {
//     console.log(i);
// }

// let a = [1,2,3,4,5,6,7,8];
// const b = ["a", "b", "c","d"];
// console.log(a.length);
// console.log(a.push(9,10,11,12));
// console.log(a.length);
// console.log(a);
// b.push("Serge");
// b.pop()
// b.pop()
// console.log(b.pop());
// console.log(b);
// delete a[0];
// a.splice(3,2,"Serge3452");
// console.log(a);

// let a =[1,2,3,4,5]
// let b = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ]
// let out =" ";

// // console.log(b);
// // for ( i=0; b.length >1; i++){
// //     console.log(b[i]);
// // };
// for (let i=0;b.length>i;i++){
//     let c=b[i];
//     for (let k=c.length-1; k>=0; k--){
//         console.log(c[k]);
//     }
// }

// for (let i=0; i<b.length; i++){
//     for (let j=0; j<b[i].length; j++){
//     console.log(b[i][j]);
//     if (b[i][j]>4) {
//     out += b[i][j]+" ";
// }
//     }
//     out += "<br>";
// };
// document.querySelector(".out").innerHTML = out;

//console.log(b[2][2]);
