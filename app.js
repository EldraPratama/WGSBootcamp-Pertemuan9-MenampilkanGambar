const express = require('express')
var expressLayouts = require('express-ejs-layouts');
const app = express()
const port = 3000

//menggunakan ejs
app.set('view engine','ejs')
app.use(expressLayouts);

app.set('layout', 'layout/layout');

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

// app.use((req, res, next) => {
//   console.log('Time:', Date.now())
//   next()
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// const fs   = require('fs');
// const http = require('http')
// const port = 3000

// //fungsi untuk membuka suatu file
// const openFile = (path,res) => {
//     fs.readFile(path,(err,data)=>{
//         if (err) {
//             res.writeHead(404)
//             res.write('Error : page not found')          
//         }else{
//             res.write(data)
//         }
//         res.end()
//     })
// }

// http
//     .createServer((req,res)=>{
//         const url = req.url
//         console.log(url);
//         res.writeHead(200,{
//             'Content-Type':'text/html'
//         }) 
       
//         if (url==='/about') {
//             //Membuka file html about 
//             openFile('./about.html',res)
//         }else if (url==='/contact') {
//              //Membuka file html contact
//             openFile('./contact.html',res)
//         }else {
//              //Membuka file html index jika url yang dicari tidak ada 
//             openFile('./index.html',res)
//         }

// })
//     .listen(3000,()=>{
//         console.log('Server is listening on port 3000');
//     })