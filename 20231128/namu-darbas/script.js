
// 1 užduotis: Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.

let aktorėsVardas = "Nijolė";
let aktorėsPavardė = "Narmontaitė";

if(aktorėsVardas.length > aktorėsPavardė.length){
    console.log(aktorėsPavardė);
}else{
    console.log(aktorėsVardas);
}

// 2 užduotis: Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
// "Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".

let manoVardas = "Dangira", manoPavarde = "Rakštytė-Pipirienė", gimimoMetai = "1974", šieMetai = "2023";
let amzius = šieMetai - gimimoMetai;

console.log("Aš esu " + manoVardas + " " + manoPavarde + "." + " Man yra " + amzius + " metai");

// 3 užduotis: Sukurkite 2 kintamuosius. Jiems priskirkite vartotojo vardą ir pavardę. Sukurti trečią kintamąjį ‘inicialai’ sudarytą iš dviejų pirmųjų vardo ir pavardės raidžių.

let vartotojoVardas = "Lapė";
let vartotojoPavardė = "Ilgasnapė";
vartotojoInicialai = vartotojoVardas[0] + vartotojoPavardė[0];

console.log(vartotojoInicialai);

// 4 užduotis: Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.

let aktVardas = "Meryl", aktPavardė = "Streep", aktInicialai = aktVardas[2] + aktVardas[3] + aktVardas[4] + aktPavardė[3] + aktPavardė[4] + aktPavardė[5];

console.log(aktInicialai);

// 5 užduotis: Sukurti kintamąjį data ir priskirti jai datos reikšmę tokiu formatu: YYYY-MM-DD, pvz: 2023-11-07. sukurkite programą, kuri pasiima mėnesio reikšmę ir atspausdina gauto mėnesio pavadinimą.

let data = "2023-11-30";
let mėnuo = data[5] + data[6];
if(mėnuo === '01') console.log("Sausis");
if(mėnuo === '02') console.log("Vasaris");
if(mėnuo === '03') console.log("Kovas");
if(mėnuo === '04') console.log("Balandis");
if(mėnuo === '05') console.log("Gegužė");
if(mėnuo === '06') console.log("Birželis");
if(mėnuo === '07') console.log("Liepa");
if(mėnuo === '08') console.log("Rugpjūtis");
if(mėnuo === '09') console.log("Rugsėjis");
if(mėnuo === '10') console.log("Spalis");
if(mėnuo === '11') console.log("Lapkritis");
if(mėnuo === '12') console.log("Gruodis");

// if(data == data[5], data[5]){
//     console.log('Lapkritis')
// }