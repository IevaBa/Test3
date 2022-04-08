/* 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai) */

/* let a = 10;
let b = 10;
if (a > b) {
  console.log("a skaičius didesnis");
} else if (a < b) {
  console.log("b skaičius didesnis");
} else {
  console.log("skaičiai lygūs");
} */

/* 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai) */

/* for (let i = 1; i < 11; i++) {
  console.log(i);
} */

/* 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai) */

/* for (let i = 0; i < 11; i = i + 2) {
  console.log(i);
} */

/* 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai) */

/* for (let i = 1; i < 6; i++) {
  console.log(Math.floor(Math.random(i) * 10) + 1);
} */

/* 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai) */

/* do {
  random = Math.floor(Math.random() * 10 + 1);
  console.log(random);
} while (random !== 5); */

/* 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai) */

/* let numbers = [
  10, 20, 23, 22, 15, 11, 16, 29, 18, 17, 12, 10, 26, 27, 13, 15, 18, 21, 16,
  18, 10, 11, 15, 27, 13, 14, 22, 23, 25, 26,
];
function findMax(numbers) {
  let currentMax = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > currentMax) {
      currentMax = numbers[i];
    }
  }
  return currentMax;
}
console.log(findMax(numbers)); */

/* 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai) */

/* var myArray = [];
function letters() {
  var text = "";
  var possible = "ABCD";
  for (var i = 0; i < 4; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}
console.log(letters());

for (var j = 1; j <= 100; j++) {
  myArray.push(j);
}
console.log(myArray); */

/* 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
"(XXX) XXX-XXXX". (10 taškų) */
