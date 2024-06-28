/**
 * TS bir syntax yapisidir. Dil degildir. JS'in uzerine insa edilmis bir yapidir.
 *
 * Temel tipler : string, number, boolean, undefined, null, object.
 *
 * Tip belirtmek icin degisken isminden veya fonksiyondan hemen sonra ": typeName" seklinde tanimlanir.
 *
 */

let firstName: string = "Okan"; // type string olarak belirlendigi icin artik atamalar yalnizca string olmak zorunda.
// firstName= 25; // hata verir cunku type string olarak tanimlanan degiskene number atanamaz.

let age: number = 25;
// age = true; // tipi number oldugu icin boolean "deger" atanamaz

let result: boolean = true; // yalnizca boolean deger atanabilinir
let x: undefined = undefined; // yalnizca undefined atanabilinir.
let y: null = null; // yalnizca null atanabilinir.

let tcKimlikNo: any = "123"; // any : ornek tc no db den string de, number da null da gelebilir. Dikkatli kullanilmasi gerekli.

/******************* DERS 2 *******************/

/**
 * Union Types => | "veya isareti"
 *
 */

let isActive: boolean | number | null = 0; // Union Types '|' ile degisken hem boolean hem de number alabilir dedik. 1 den fazla tip atanabilir

/**
 * Literal Types => Tip tanimi yapmadan yalnizca istedigimiz degerde setlenebilinir.
 *
 */

let resultStatus: "pending" | "approved" | "rejected";
// resultStatus = 12; // hata veriyor cunku resultStatus a yalnizca pending, approved, rejected degerleri verilebilinir.
resultStatus = "pending";
console.log(resultStatus); // "pending"

/**
 * Array => Tanimi let arrName: typeName[]= ["", ...];
 * Array in degerleri type ina esit olmali, "string|number" hangisi ise verileri de o tip olmali
 * let numbers2: Array<number> = [1, 2, 3]; => seklinde de tanimlanabilir
 *
 * Yani;
 * number[] == Array<number>
 * string[] == Array<string>
 *
 * (number | string | boolean)[] == Array<number | string | boolean>
 */

let names: string[] = ["okan", "furkan", "serkan"];
let numbers: number[] = [1, 2, 3]; // yalnizca number degerler verilebinir
let numbers2: Array<number> = [1, 2, 3];
numbers2.map((number, index) => console.log(`${index} => ${number}`));

let mixedArr: Array<number | string | boolean> = [1, "okan"]; // array lerde de union( | ) kullanilabilinir.
let mixedArr2: (number | string | boolean)[] = [1, "okan"]; // array lerde de union( | ) kullanilabilinir.

console.log(mixedArr2);

/******************* DERS 3 *******************/

/**
 * Interface & Type : Kendi tipimizi olusturmamiz saglar.
 * Interface & Type arasindaki fark interface te tanimda "=" kullanilmamaktadir ve extends(miras) edilmesidir.
 *
 */

/**
 * optional Type : Opsiyonel Tipler (?) degiskenin yanina ? atildiginda zorunlulugu kalkar
 *
 */

type User0 = {
  name: string;
  age: number;
};

interface User {
  name: string;
  age?: number; // optional type ile age zorunlulugu kaldirildi.
}

const object1: User = {
  // tipini User a bagladik. O da Userdaki name ve age icermek zorunda tipleriyle beraber.
  name: "Okan",
};

let array1: User[] = [{ name: "Ali", age: 22 }]; // array leri de baglayabilirz. Her elemen User tipinde olmali ve icermeli

console.clear();
console.log(object1);
console.log(array1);

/**
 * Functions
 * degiskenlerinin tipini hemen yaninda fonksiyonun tipini ise (): string|number seklinde union type da verilebilinir.
 *
 */

const topla = (a: number, b: number): number | null => a + b;
console.clear();
console.log(typeof topla(5, 8));

const write = (arr: string[]): void => {
  arr.forEach((val: string) => console.log(val));
};

let myArr = ["Okan", "Enes", "None"];

console.clear();
write(myArr);

//ornek

interface Okan {
  name: string;
  age: number;
}

const writeConsole = (arr: Okan[]): void =>
  arr.forEach((val: Okan) => console.log(val.name));

const obj1: Okan = {
  name: "test",
  age: 22,
};

const obj2: Okan = {
  name: "aciklama",
  age: 25,
};

let myArray: Array<Okan> = [obj1, obj2];
console.clear();
writeConsole(myArray);

/******************* DERS 4 *******************/

/**
 * Generic Type
 * fonksiyonun () once <genericName> yaziyoruz.
 *
 */

// const yazdir = (array: string[]) => console.log(array);
// yazdir(['enes', 'ali', 'veli']);

function yazdir<T>(arr: T[]): void {
  console.log(arr);
}

yazdir([1, 2]);

interface GenericType<T> {
  name: string;
  age: number;
  salary: T[];
}
console.clear();

const obje1: GenericType<string> = {
  name: "Okan",
  age: 22,
  salary: ["100", "200", "300"],
};

const obje2: GenericType<number> = {
  name: "Okan",
  age: 22,
  salary: [100, 200, 300],
};

let array: GenericType<string | number>[] = [obje1, obje2];

function writeGeneric<T>(arr: GenericType<T>[]): void {
  arr.forEach((value: GenericType<T>) => console.log(value));
}

writeGeneric(array);

/**
 * extends - miras alma
 *
 */

interface ortakAlanlar {
  id: string;
  createdAt: string;
  createdBy: string;
}

interface Musteri extends ortakAlanlar {
  musteriNo: string;
}

interface Kurum extends ortakAlanlar {
  kurumNo: string;
}

const kurum: Kurum = {
  id: "1",
  createdAt: "09.06.2024",
  createdBy: "Okan",
  kurumNo: "21",
};

console.clear();
console.log(kurum);

/**
 * keywords : Partial, Required, Readonly, Pick, Omit
 * Partial : ? opsiyonel isareti gorur. Hepsine vermektense Partial ile hepsi nullable birakilabilinir. Kullanimi : Partial<typeName>
 * Required : Iceride ? ile opsiyonel tanimlansa dahi Required ile hepsi zorunlu kilinir. Kullanimi Required<typeName>
 * Readonly : Deger atamasi yapilamaz sadece okunur. Kullanimi Readonly<typeName>
 * Pick: Sadece istenilen field varmis gibi davratiriz. Zorunlu olsa daha istenilen disindakiler zorunlu olsa dahi bakmaz. Kullanimi Pick<typeName, "fieldName">
 * Omit: Secilen field yokmus gibi davranir. Kullanimi Omit<typeName, "fieldName">
 *
 */

interface Aras {
  name?: string;
  lastname?: string;
  age?: number;
  tckn?: string;
  birthdate?: string;
}

// const user1: Partial<Aras> = { // Opsiyonel olarak hepsine ? vermekten ziyade null gecilmesini sagladik
// const user1: Required<Aras> = { // Opsiyonel olarak ? verilse dahi her fieldi zorunlu kilar.
// const user1: Readonly<Aras> = { // Readonly ile sarildiginda deger atamasi yapilamaz sadece okunur.
// const user1: Pick<Aras, "name"> = { // Sadece istenilen field varmis gibi davratiriz
// const user1: Omit<Aras, "name"> = { // Secilen field yokmus gibi davranir.
const user1: Partial<Aras> = {
  name: "okan",
  age: 22,
};

// user1.name="ali"; // Readonly ile sarildiginda deger atamasi yapilamaz sadece okunur.
console.clear();
console.log(user1.name);
