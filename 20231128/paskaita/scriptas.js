// console.error('bloga zinute');
// kintamojo deklaravimas su let
let x = 10;
// gali būti reikšmė ir žodžiai
// let x = "Lorem ipsum dolor sit amet";

// informacijos išvedimas į konsolę
console.log(x);

// aritmetiniai  operatoriai: + - * / ir liekanos operatorius %

x = x % 3
// x = x % 3- gaunasi liekana 1, nes iš 10 atimam 9, juos dalinam iš 3, lieka 1
console.log(x);

x = x + 5;
console.log(x);

let loginisPatikrinimas = x < 5;

console.log(loginisPatikrinimas);
console.log(typeof loginisPatikrinimas);

// aritmentinę operaciją galima parašyti ir kitaip: tuomet x reikšmė automatiškai suprantama kaip 5
x += 5;
console.log(x);

// typeof patikrina duomenų tipą
console.log(typeof x);

// x += "tekstas";
if(x <= 5)
{
console.log(typeof x);
console.log(x);
}else{
    console.log('x yra mazesnis nei 5');
}

// === yra sulyginimo operatorius, griežtas tikrinimas, tikrina ir duomenų tipą
console.log(x);
let tekstas = "labas"
if(tekstas === 'labas') {
    console.log('tekstas yra labas');
}

// !== operatorius nelygu, griežtas tikrinimas, tikrina ir duomenų tipą
if(tekstas !== 'labas') {
    console.log('tekstas nėra lygus labas');
}

// == operatorius netikrina duomenų tipo, bet tikrina reikšmę
let skaicius = "5";
if(skaicius == 5){
    console.log('skaicius yra 5');
}

// let tiesa = "gal ir gerai";
if(1) {
    console.log("tiesa");
}

// parašius tiesa be kabučių, iškrenta error, nes kintamasis tiesa nebuvo rastas kode
// let tiesa = "gal ir gerai";
// if(1) {
//     console.log(tiesa);
// }

let eilerastis = "lorem ipsum dolor sit amet";

console.log(eilerastis);

eilerastis += ' consectetur';
console.log(eilerastis);


// tekstas yra indeksuojamas, is jo galima pasiimti raides pagal ju vieta tekste
let kintamasis = "CHICKEN"
            //    0123456
console.log(kintamasis[0]);
console.log(kintamasis[1]);
console.log(kintamasis[2]);
console.log(kintamasis[3]);
console.log(kintamasis[4]);
console.log(kintamasis[5]);
console.log(kintamasis[6]);

// jei prie skaiciaus pridedamas tekstas, galutinis kintamojo tipas yra skaicius
skaicius = 5;
skaicius += "a";
console.log(typeof skaicius);

// parašius nesąmonę, gauname įrašą NaN- Not a Number, nes teksto negalima dalinti iš skaičiaus
kintamasis /= 10;
console.log(kintamasis);
console.log(typeof kintamasis)

// kai kintamajam reikšmė nepriskiriama, jo reikšmė būna undefined
let y;
console.log(y);

// Stringo (teksto) ilgis gaunamas pasinaudojant savybe kintamasis.length
kintamasis = "ROOSTER";
console.log(kintamasis.length);

