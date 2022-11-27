// Create server
    // Create http module
    const http = require('http') // manage request and response to user
    const server = http.createServer((req,res) => { // create server param1,2 = request and response
        const myHTML = `
        <h1>Hello Node.js</h1>
        <p style="color: green ">Kloof.san | Backend-Dev.</p>
        `
        // res.write(myHTML) // ส่งข้อความตอบกลับไปที่ผู้ใช้ ถ้าเปลี่ยนข้อความอะไรไปต้อง restart server แต่เราใช้ nodemon มาช่วยตรงนี้ได้
        res.end(myHTML) // สิ้นสุดกระบวนการ สามารถเอา myHTML ใส่ในนี้ได้
    }).listen(8888, 'localhost', ()=>{ // ระบุ port connect 
        console.log('start server in port 8888..')
    })
    

    // server.listen(3000,() => { // ระบุ port connect อีกแบบ
    //     console.log('start server in port 3000..')
    // })
    
    
    
// Runserver
// พิมพ์ที่ terminal node index.js จะเป็นการ run server แล้วไปเข้า browser localhost:8888
/* เพื่อไม่ต้องมา ctrl+c แล้ว node index.js เวลาเราแก้ไขเปลี่ยนแปลงอะไรบางอย่าง 
    ให้ลง nodemon npm install nodemon จากนั้นพิมพ์ npx nodemon index.js
    ให้ง่ายกว่านี้ไปเพิ่ม ใน package.json
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start" : "nodemon index.js" หรือ "nodemon ./bin/www",
  },*/
