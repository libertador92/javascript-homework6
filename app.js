// let year = prompt("Enter a year");
// if(year%4==0){

//     if(year % 100==0 && year % 400 !== 0){

//         console.log("Short year");
//         else{
//             console.log(("Long year"));
//         }
//     }
        
// }
// else{
//     console.log("Short year");
// }

// let age = prompt("Enter your age");
// if(age<18){

//     console.log("Acces not denied");
// }
// else{
//     console.log("Acces denied");
// }

// let num = prompt("Vergulle ayrilmis uc ikireqemli eded daxil edin.");

// let num1 = num.split(",")[0];
// let num2 = num.split(",")[1];
// let num3 = num.split(",")[2];

// if ( num1>num2 && num1<num3 || num1>num3 && num1<num2){

//     console.log("Orta eded -" +num1);

// }else if( num2>num1 && num2<num3 || num2>num3 && num2<num2){

//     console.log("Orta eded-" + num2);
// }
// else{
//     console.log("Orta eded-" + num3);
// }

let note = prompt ("Istifadecinin aldigi ders qiymetini qeyd edin.");

if(note>=90 && note<=100){
    
    console.log("Istifadecinin aldigi qiymet" + " " + note + "-" + "A");
}
else if(note>=80 && note<=89){
    
    console.log("Istifadecinin aldigi qiymet" + " " + note + "-" + "B");
}
else if(note>=70 && note<=79){
    
    console.log("Istifadecinin aldigi qiymet" + " " + note + "-" + "C");
}
else if(note>=60 && note<=69){
    
    console.log("Istifadecinin aldigi qiymet" + " " + note + "-" + "D");
}
else{
    console.log("Istifadecinin aldigi qiymet" + " " + note + "-" + "F");
}
