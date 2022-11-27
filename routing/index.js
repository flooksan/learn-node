const portNum = 8080;
const fs =require('fs')

// เป็นfolder ที่ทำการจัดเก็บ index.js นี้ที่เรา run node dir = dir : C:\Users\patip\Desktop\learn-workspace\Node.js\routing 
const indexPage =fs.readFileSync(`${__dirname}/webpages/index.html`) // เข้าถึงไฟล์ index.html โดยการอ่านไฟล์แล้วเก็บค่าใส่ indexPage
const productPage =fs.readFileSync(`${__dirname}/webpages/product.html`)

const http = require('http') // manage request and response to user
const server = http.createServer((req,res) => { // create server param1,2 = request and response
    // routing ทำงานกับ req เช่น url ของ browserที่เราส่งไปหา server เพื่อให้ server โชว์เว๊ป
    const pathName = req.url /* url ของเว๊ปไซต์ มันจะโชว์ออกมาเป็น URL : / เป็นการบอกว่าเป็นการทำงานอยู่หน้าแรก 
        ถ้าไปเขียน ในเว๊ปว่า /home ต่อจาก localhost:8080 จะได้ URL : /home 
        ความหมายคือ run server localhost:8080 pathName หรือ URL = /home ซึ่งเป็นสิ่งที่ user request โดย server 
        จะต้อง response ว่าจะส่งอะไรกลับไปให้ user */
        console.log(`URL : ${pathName}`)
   if (pathName ==='/' || pathName ==='/home') {
    res.end(indexPage) // เราไป read indexPage มาด้านบนแล้วเวลา user เข้าหน้า home หรือ / ปกติจะโชว์หน้า index.html ของเรา
   } else if (pathName==='/product') {
    res.end(productPage)
   } else {
    // ถ้าหาหน้าไม่เจอ หรือไม่มีอาจจะต้องมีการส่ง HTTP Status code กลับไปด้วย ดังด้านล่าง
    res.writeHead(404) // จะโชว์ใน log GET http://localhost:8080/test 404 (Not Found)
    res.end(`<h1>Error Path Not Found!!</h1>`)
   }
}).listen(portNum, 'localhost', ()=>{ 
    console.log(`start server in port ${portNum}..`)
})