function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 6 užduotis: Sukurti kintamąjį su stringu: “Once upon a time in hollywood”. Jame visas “o” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.


let text = 'Once upon a time in hollywood';
console.log(text);

let textMazosiomis = text.toLowerCase();
console.log(textMazosiomis);

let textPakeistas = textMazosiomis.replaceAll('o', '*');
console.log(textPakeistas);


// 7 užduotis: Sukurkite keturis kintamuosius kuriems sugeneruokite atsitiktines reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. 

let a = rand (0, 2), b = rand (0, 2), c = rand (0, 2), d = rand (0, 2);
console.log(a, b, c, d)

let nulis = 0, vienas = 0, du = 0;

if(a === 0) {
    nulis++
} else if (a === 1) {
    vienas++
} else {
    du++
}

if(b === 0) {
    nulis++
} else if (b === 1) {
    vienas++
} else {
    du++
}

if(c === 0) {
    nulis++
} else if (c === 1) {
    vienas++
} else {
    du++
}

if(d === 0) {
    nulis++
} else if (d === 1) {
    vienas++
} else {
    du++
}

console.log('Nulis: ' + nulis);
console.log('Vienetai: ' + vienas);
console.log('Dvejetai: ' + du);


// 8 užduotis:  Pasinaudokite atsitiktinio skaičiaus generavimo funkcija. Sukurkite du kintamuosius ir naudodamiesi funkcija jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.

let pirmas = rand (0, 4), antras = rand (0, 4);
console.log(pirmas, antras);

if(pirmas >= antras) {
    rezultatas = pirmas / antras
}
else { 
    pirmas <= antras 
    resultatas = antras / pirmas
};

console.log(resultatas.toFixed(2));

// 9 užduotis: Naudokite funkciją ir sukurkite tris kintamuosius kuriems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite vidurinę reikšmę.

let skaicius1 = rand (0, 25), skaicius2 = rand (0, 25), skaicius3 = rand (0, 25);
console.log(skaicius1, skaicius2, skaicius3);

if(skaicius1 < skaicius2 && skaicius1 > skaicius3) {
    console.log(skaicius1)
} 
else if(skaicius1 > skaicius2 && skaicius1 < skaicius3) {
    console.log(skaicius1);
} 
else if(skaicius2 > skaicius1 && skaicius2 < skaicius3) {
    console.log(skaicius2);
}
else if(skaicius2 < skaicius1 && skaicius2 > skaicius3) {
     console.log(skaicius2);
}
else if(skaicius3 > skaicius2 && skaicius3 < skaicius1) {
    console.log(skaicius3);
}
else if(skaicius3 < skaicius2 && skaicius3 > skaicius1) {
    console.log(skaicius3);
}

// 10 užduotis: Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. Stringo ilgis: 3 simboliai.

let letter1 = rand (97, 122), letter2 = rand (97, 122), letter3 = rand (97, 122); 

console.log(String.fromCharCode (letter1) + String.fromCharCode (letter2) + String.fromCharCode (letter3))