const express = require('express')
var expressLayouts = require('express-ejs-layouts');

const app = express()
const port = 3000

//menggunakan ejs
app.set('view engine','ejs')
app.use(expressLayouts);

//menggunakan layout yg ini
app.set('layout', 'layout/layout');

//Mengizinkan file gambar diakses
app.use(express.static('public'))

app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})




//untuk halaman index
app.get('/', (req, res) => {
  cont = [
    {
      name :'ESP',
      email:'esp@gmail.com',
    },
    {
      name :'eldra',
      email:'eldra@gmail.com',
    },
    {
      name :'surya',
      email:'surya@gmail.com',
    },
  ]
  //mengirimkan data ke index
  res.render('index',
  {
    nama:'Eldra Surya P',
    title:'WebServer EJS',
    cont,
  })
})


//untuk halaman about
app.get('/about', (req, res) => {
    res.render('about',{ title:'About Page'})

})

//untuk halaman contact
app.get('/contact', (req, res) => {
     res.render('contact',{ title:'Contact Page'})
})

app.get('/product/:id', (req, res) => {
    res.send(`product id: ${req.params.id} <br> category id : ${ req.query.category}`)
})

app.use('/', (req, res) => {
  res.status(404)
  res.send('Not found')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
