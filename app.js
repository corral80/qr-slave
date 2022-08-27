const express = require('express')
const app = express()
const QRCode = require('qrcode')

//middlewares
app.use(express.json())
app.use(express.static('public'))

//conf
const port = 3001

//rutas
app.get('/status', (req, res) => {
  res.send('I\'m alive 🧟‍♂️')
})


app.post('/slave-creates-a-qr', (req, res) => {
  QRCode.toDataURL(req.body.qr, function (err, url) {
    res.send(`<div style='position:relative'>
                <img style ="position:absolute; top:170px; transform:rotate(135deg)" src="https://fpay.cl/wp-content/uploads/2020/04/chevron-fpay-amarillo.svg" width="60" height="70" data-src="https://fpay.cl/wp-content/uploads/2020/04/chevron-fpay-amarillo.svg" alt="chevron fpay amarillo">
                <img style ="position:absolute; top:170px; left:190px; transform:rotate(45deg)" src="https://fpay.cl/wp-content/uploads/2020/04/chevron-fpay-rojo.svg" width="60" height="70" data-src="https://fpay.cl/wp-content/uploads/2020/04/chevron-fpay-rojo.svg" alt="chevron fpay rojo">
                <img style ="position:absolute; top:-20px; transform:rotate(225deg)" src="https://fpay.cl/wp-content/uploads/2020/04/chevron-fpay-verde.svg" width="60" height="70" data-src="https://fpay.cl/wp-content/uploads/2020/04/chevron-fpay-verde.svg" alt="chevron fpay verde">
                <img style ="position:absolute; top:-20px; left:190px; transform:rotate(-45deg)" src="https://fpay.cl/wp-content/uploads/2020/04/chevron-fpay-azul.svg" width="60" height="70" data-src="https://fpay.cl/wp-content/uploads/2020/04/chevron-fpay-azul.svg" alt="chevron fpay azul">
                <img style='width:200px;height:200px;position: absolute;z-index: -1;top: 10px;left: 25px;' src='${url}'>
                <span style="font-size: 20px; font-weight: bold; font-family: system-ui; position: absolute; top: 195px; left: 75px;">${req.body.short_code}</span>
              </div>`
            )
  })
})




//run
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
