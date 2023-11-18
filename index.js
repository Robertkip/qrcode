const express = require('express');
const QRCode = require('qrcode');
const app = express();

app.get('/', async (req, res) => {
  try {
    // Generate a QR code image
    const qrCodeData = 'https://docs.google.com/document/d/1UJ_qnFmAw_Kq-tg81IGpn1vMFjt2DvbsUtadBbTEU8M/edit?usp=sharing'; // Replace with your actual data
    const qrCodeImage = await QRCode.toDataURL(qrCodeData);

    // Send the image as a response
    res.send(`
      <html>
        <body>
          <img src="${qrCodeImage}">
        </body>
      </html>
    `);
  } catch (error) {
    console.error('Error generating QR code:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 4000');
});