const portNum = 3030;
const fs =require('fs')
const url = require('url') // import module url เข้ามาเพื่อเอา query string มาใช้เพื่อเปลี่ยน page product


const indexPage =fs.readFileSync(`${__dirname}/templates/index.html`) 
const productPage1 =fs.readFileSync(`${__dirname}/templates/product1.html`)
const productPage2 =fs.readFileSync(`${__dirname}/templates/product2.html`)
const productPage3 =fs.readFileSync(`${__dirname}/templates/product3.html`)

const http = require('http') 
const server = http.createServer((req,res) => { 
    
    // console.log(url.parse(req.url,true)) // log object url query sting มันจะอยู่ใน path: '/?id=1'
    const {pathname,query} = url.parse(req.url,true)
    // const pathName = req.url 
        
    console.log(`URL : ${pathname}`)
   if (pathname ==='/' || pathname ==='/home') {
    res.end(indexPage)  
   } else if (pathname==='/product') {
    // console.log(query.id); // ดูค่า object query string ที่ส่งมาจาก url คืออะไรจากนั้นจะเอามาใช้
    if (query.id === '1') {
        res.end(productPage1)
    } else if (query.id === '2') {
        res.end(productPage2)
    } else if (query.id === '3') {
        res.end(productPage3)
    }
    else {
        res.end('<h1>Not Found!</h1>')
    }
    
   } else {
    
    res.writeHead(404) 
    res.end(`<h1>Error Path Not Found!!</h1>`)
   }
}).listen(portNum, 'localhost', ()=>{ 
    console.log(`start server in port ${portNum}..`)
})