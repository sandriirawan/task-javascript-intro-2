// 10 method bawaan JavaScript (Built-in Functions

// slice():
// Metode ini digunakan untuk mengembalikan potongan (slice) dari array awal tanpa mengubah array aslinya. Potongan array ditentukan dengan indeks awal dan indeks akhir (indeks akhir tidak termasuk).
// Contoh penggunaan:
const numberss = [1, 2, 3, 4, 5];
const slicedArray = numberss.slice(1, 4);
console.log(slicedArray); // Output: [2, 3, 4]

// filter():
// Metode ini digunakan untuk memfilter elemen dalam array berdasarkan kondisi tertentu. Ia mengembalikan array baru yang hanya berisi elemen yang memenuhi kondisi yang ditentukan.
// Contoh penggunaan:
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]

// indexOf():
// Metode ini digunakan untuk mencari indeks pertama dari elemen tertentu dalam array. Ia mengembalikan indeks elemen yang ditemukan atau -1 jika elemen tidak ditemukan.
// Contoh penggunaan:
const fruits = ["apple", "banana", "orange"];
const index = fruits.indexOf("banana");
console.log(index); // Output: 1

// typeof():
// Metode ini digunakan untuk mengembalikan jenis data dari suatu variabel atau ekspresi.
// Contoh penggunaan:
let name = "John";
console.log(typeof name); // Output: "string"
let age = 25;
console.log(typeof age); // Output: "number

// Math.max():
// Metode ini digunakan untuk menemukan nilai terbesar dari beberapa angka yang diberikan sebagai argumen.
// Contoh penggunaan:
let maxNumber = Math.max(10, 5, 8, 15);
console.log(maxNumber); // Output: 15

// Math.min():
// Metode ini digunakan untuk menemukan nilai terkecil dari beberapa angka yang diberikan sebagai argumen.
// Contoh penggunaan:
let minNumber = Math.min(10, 5, 8, 15);
console.log(minNumber); // Output: 5

// isNaN():
// Metode ini digunakan untuk memeriksa apakah suatu nilai adalah "NaN" (Not a Number).
// Contoh penggunaan:
console.log(isNaN(10)); // Output: false
console.log(isNaN("Hello")); // Output: true

// parseInt():
// Metode ini digunakan untuk mengonversi string menjadi bilangan bulat (integer). Ini mengambil string sebagai argumen dan mengembalikan bilangan bulat. Metode ini akan mengabaikan karakter non-numerik dalam string.
// Contoh penggunaan:
let number = parseInt("10");
console.log(number); // Output: 10

// find():
// Metode ini digunakan untuk mencari elemen pertama dalam array yang memenuhi kondisi tertentu. Ia mengembalikan nilai elemen yang ditemukan atau undefined jika tidak ada elemen yang memenuhi kondisi.
// Contoh penggunaan:
const nomor = [1, 2, 3, 4, 5, 6];
const evenNumber = nomor.find((num) => num % 2 === 0);
console.log(evenNumber); // Output: 2

// reduce():
// Metode ini digunakan untuk mengurangi elemen-elemen array menjadi satu nilai tunggal dengan menggunakan fungsi akumulator. Metode ini menerima dua argumen: fungsi akumulator dan nilai awal akumulator.
// Contoh penggunaan:
const angka = [1, 2, 3, 4, 5];
const sum = angka.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); // Output: 15
