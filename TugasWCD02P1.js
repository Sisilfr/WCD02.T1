//soal nomor1
let lenght = 3;
let widht = 5;

let luas = lenght * widht;

console.log("Luas persegi panjang = " + luas);

//soal nomor2

let radius = 5;
let diameter = 2 * radius; //untuk mencari diameter
let keliling = (2 * Math.PI * radius); //untuk mencari keliling
let area = (Math.PI * Math.pow(radius, 2)); // untuk mencari luas

console.log("diameter = " + diameter);
console.log("keliling = " + keliling.toFixed(4));
console.log("area = " + area.toFixed(3));

//soal nomor3
let sudutA = 80;
let sudutB = 65;

let sudutC = 180 - (sudutA + sudutB);

console.log("sudut ketiga = " + sudutC);

//soal nomor4
let date1 = new Date("2024-03-19");
let date2 = new Date("2024-03-21");
let differenceInDays = (date2 - date1) / (1000 * 3600 * 24);

console.log("Selisih Hari = " + differenceInDays);

//soal nomor5
function getInitials(fullName) {
    let names = fullName.split(" ");
    let initial1 = names[0].charAt(0).toUpperCase();
    let initial2 = names[1].charAt(0).toUpperCase();
    return initial1 + initial2;
}

let fullName = "John Doe";
let initials = getInitials(fullName);

console.log("Inisial nama = " + initials);
