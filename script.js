function calculer(){

let n1 = Number(document.getElementById("arabic").value);
let n2 = Number(document.getElementById("islamic").value);
let n3 = Number(document.getElementById("hisgeo").value);
let n4 = Number(document.getElementById("english").value);
let n5 = Number(document.getElementById("french").value);
let n6 = Number(document.getElementById("math").value);
let n7 = Number(document.getElementById("physic").value);
let n8 = Number(document.getElementById("svt").value);
let n9 = Number(document.getElementById("philosophy").value);

let moyenne = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 +n9) / 9;

let finalMoyenne = parseFloat(moyenne.toFixed(2));

document.getElementById("result").innerHTML = "المعدل هو: " + finalMoyenne;

}