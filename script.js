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

/* function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
for (let = i = 0; i < 5; i++) {
  console.log(rand(1, 10));
} */
/* 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai) */

/* do {
  random = Math.floor(Math.random() * 10 + 1);
  console.log(random);
} while (random !== 5); */

//kitas sprendimas
/* function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let n;
while (n !== 5) {
  n = rand(1, 10);
  console.log(n);
} */
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

//kitas sprendimas
/* function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(rand(1, 10)); // random sk. nuo 1 iki 10
let masyvas = [];
let max = 0;
for (let i = 0; i < rand(20, 30); i++) {
  masyvas.push(rand(10, 30));
}
console.log(masyvas);
for (let i = 0; i < masyvas.length; i++) {
  if (masyvas[i] > max) {
    max = masyvas[i];
  }
}
console.log("max: " + max); */
/* 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai) */

/* function letters() {
  var text = "";
  var possible = "ABCD";
  for (var i = 0; i < 100; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}
console.log(letters());
const counts = [];
for (const num of letters()) {
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}
console.log("Counts:");
console.log("\t- A: " + counts["A"]);
console.log("\t- B: " + counts["B"]);
console.log("\t- C: " + counts["C"]);
console.log("\t- D: " + counts["D"]); */

//kitas sprendimas
/* function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const raides = ["A", "B", "C", "D"];
const masyvas7 = [];
for (let i = 0; i < 100; i++) {
  masyvas7.push(raides[rand(0, 3)]);
}
console.log(masyvas7);

let countA = 0;
let countB = 0;
let countC = 0;
let countD = 0;
for (let i = 0; i < masyvas7.length; i++) {
  if (masyvas7[i] === "A") {
    countA++;
  }
  if (masyvas7[i] === "B") {
    countB++;
  }
  if (masyvas7[i] === "C") {
    countC++;
  }
  if (masyvas7[i] === "D") {
    countD++;
  }
}
console.log(
  `Raidžių masyve yra: A: ${countA}, B: ${countB}, C: ${countC}, D: ${countD}`
); */

/* 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kintamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų) */
/* function lygineSuma(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    let suma = a + b;
    if (suma % 2 === 0) {
      return `Skaičių a + b suma yra: ${suma}`;
    } else {
      return "Skaičių suma nelyginė";
    }
  } else if (Array.isArray(a) && Array.isArray(b)) {
    let suma = a.length + b.length;
    if (suma % 2 === 0) {
      return `Masyvų a ir b ilgių suma yra: ${suma}`;
    } else {
      return "Masyvų suma yra nelyginė";
    }
  } else {
    return "Pateikti neteisingi kintamieji";
  }
}
console.log(lygineSuma(2, 8));
console.log(lygineSuma(2, 7));
console.log(lygineSuma("2", 8));
console.log(lygineSuma([2], 8));
console.log(lygineSuma([2], [6, 2, 1]));
console.log(lygineSuma([2], [8, 1, "456", "1"])); */

/* 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų) */
/* function pirminisSkaicius(a) {
  if (typeof a !== "number") {
    return "Pateiktas kintamasis nėra skaičius";
  }
  let count = 0; //kiek kartų iš savęs dalijasi skaičius
  for (let i = 1; i <= a; i++) {
    if (a % i === 0) {
      count++;
    }
  }
  if (count < 2) {
    return "Įvestas blogas skaičius";
  }
  if (count === 2) {
    return "Įvestas pirminis skaičius";
  }
  if (count > 2) {
    return "Įvestas sudėtinis skaičius";
  }
}
console.log(pirminisSkaicius("AAAA"));
console.log(pirminisSkaicius(4, 4, "AAAA"));
console.log(pirminisSkaicius(0));
console.log(pirminisSkaicius(3));
console.log(pirminisSkaicius(17));
console.log(pirminisSkaicius(15)); */

/* 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
"(XXX) XXX-XXXX". (10 taškų) */

/* function telefonoNumeris(a) {
  if (!Array.isArray(a)) {
    return "Kintamasis nėra masyvas";
  }
  if (a.length !== 10) {
    return "Masyvas yra netinkamo ilgio";
  }
  for (let i = 0; i < 10; i++) {
    if (typeof a[i] !== "number") {
      return "Masyvo reikšmės turi būti skaičiai";
    }
  }
  return `(${a[0]}${a[1]}${a[2]}) ${a[3]}${a[4]}${a[5]}-${a[6]}${a[7]}${a[8]}${a[9]}`;
}
console.log(telefonoNumeris(17));
console.log(telefonoNumeris("aajdjd"));
console.log(telefonoNumeris(["hi", 3, 4, 5, 5, 5, 5, 5, 5, 5]));
console.log(telefonoNumeris([2, 3, 4, 5, 5, 5, 5, 5, 5, 5]));
console.log(telefonoNumeris([3, 4, 5, 6, 3, 2, 1])); */
