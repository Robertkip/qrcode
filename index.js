const QRCode =require('qrcode');
const path = require('path');

QRCode.toFile(path.join(__dirname, 'qrcode.jpg'), 'https://docs.google.com/document/d/1UJ_qnFmAw_Kq-tg81IGpn1vMFjt2DvbsUtadBbTEU8M/edit?usp=sharing', (err)=>{
  if (err) throw err;
});