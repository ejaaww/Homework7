// soal1.js
const shape = require('./shape');

const sisiPersegi = 10;
const panjangPersegiPanjang = 8;
const lebarPersegiPanjang = 12;

const luasPersegi = shape.luasPersegi(sisiPersegi);
const kelilingPersegi = shape.kelilingPersegi(sisiPersegi);
const luasPersegiPanjang = shape.luasPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang);
const kelilingPersegiPanjang = shape.kelilingPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang);

console.log(`Luas Persegi: ${luasPersegi}`);
console.log(`Keliling Persegi: ${kelilingPersegi}`);
console.log(`Luas Persegi Panjang: ${luasPersegiPanjang}`);
console.log(`Keliling Persegi Panjang: ${kelilingPersegiPanjang}`);
