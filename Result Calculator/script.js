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

if(
    n1 < 0 || n1 > 20 ||
    n2 < 0 || n2 > 20 ||
    n3 < 0 || n3 > 20 ||
    n4 < 0 || n4 > 20 ||
    n5 < 0 || n5 > 20 ||
    n6 < 0 || n6 > 20 ||
    n7 < 0 || n7 > 20 ||
    n8 < 0 || n8 > 20 ||
    n9 < 0 || n9 > 20
)
{
alert("تنبيه: ينبغي كتابة رقم من 0 إلى 20");
    return;
}

let average = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9) / 9;

let finalAverage = parseFloat(average.toFixed(1));

document.getElementById("result").innerHTML = "المعدل هو: " + finalAverage;

}