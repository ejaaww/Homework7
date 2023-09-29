// soal2.js
const fs = require('fs');

const logData = 'Data untuk saat ini sudah dimasukkan\n';

// Menuliskan data log ke dalam file log.txt
fs.appendFile('log.txt', logData, (err) => {
  if (err) {
    console.error('Terjadi kesalahan saat menulis ke file log.txt');
  } else {
    console.log('Data berhasil ditulis ke file log.txt');
  }
});
