const express = require('express')
const app = express()
const QRCode = require('qrcode')

//middlewares
app.use(express.json())
app.use(express.static('public'))

//conf
const port = 80

//rutas
app.get('/status', (req, res) => {
  res.send('I\'m alive 🧟‍♂️')
})


app.post('/slave-creates-a-qr', (req, res) => {
  QRCode.toDataURL(req.body.qr, function (err, url) {
    res.send(`<div style='position:relative'>
                <img style='width: 226px;height: 40px;position: absolute;' src='/img/top.png'>
                <img style='width:200px;height:200px;position: absolute;z-index: 1;top: 16px;left: 14px;' src='${url}'>
                <img style='width: 227px;height: 40px;position: absolute;top: 190px;' src='/img/bottom.png'>
                <h3 style='position: relative;top: 240px;left: 70px;font-family: sans-serif;'>${req.body.short_code}</h3>
              </div>`
            )
  })
})




//run
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
