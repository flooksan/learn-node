// Asyncchronous
    // console.log('เริ่มต้นโหลด');
    // console.log('กำลังโหลด');
    // console.log('จบการทำงาน');

// Synchronous 1
    // console.log('เริ่มต้นโหลด');

    // /* JS เห็น block setTimeout หน่วงไว้ 4 วิ มันจะเอาไปทำงานเบื้องหลัง(backgroud)แล้วเอา 
    //  console.log('จบการทำงาน'); มาทำงานก่อน เพราะมันทำงานแบบ non-blocking model = Async
    //  ซึ่ง console.log('จบการทำงาน') จะขึ้นท้ายสุด แต่ถ้าอยากให้มันทำแบบ Asyncchronous ตามลำดับให้รอ 
    //  console.log('กำลังโหลด'); ทำงานก่อน ไปดูหัวข้อถัดไป */
    // setTimeout(()=>{
    //     console.log('กำลังโหลด'); 
    // },4000)

    // console.log('จบการทำงาน');

/* JS เป็นการทำงานหากอยากให้ทำงานแบบ Asyncchronous ให้ทำงานตามลำดับทำได้โดยใช้
1. CallBack 
2. Promise
3. Async & Await
*/

// ทบทวน Callback Function
    // เขียนแบบ function ปกติ ให้ค่า sum = undefined
        // const calculate = (x,y) => {
        //     console.log('wait calculate 3 sec...')
        //     setTimeout(()=> {
        //         return x+y
        //     },3000)
        // }

        // function display(result) {
        //     console.log(`summation = ${result}`)
        // }

        // const sum = calculate(100,50)
        // display(sum)
    
    // use callback
        // const calculate = (x,y,callback) => { // callback เป็น function ที่เราจะให้ทำงานหลังจาก funtion calculate ทำงานเสร็จ
        //     console.log('wait calculate 3 sec...')
        //     setTimeout(()=> {
        //         const sum =  x+y // เราทำการบวกเลขแล้วเก็บค่าไว้ในตัวแปร sum
        //         callback(sum)  
        //         // หลังจากที่มันบวกเลขเสร็จ เรียกใช้ callback คือ function display โดยส่ง sum ไปแสดงผล มันจะทำงานหลังจากผ่านไป 3 sec
        //     },3000)
        // }

        // function display(result) {
        //     console.log(`summation = ${result}`)
        // }

        // calculate(100,50,display) // เขียนแบบที่ 1 ถ้าเกิด calculate ทำงานเสร็จจะทำ display ต่อ
        // calculate(50,100, (result) => { // เขียนแบบที่ 2 ไม่ต้องมี display function คือเอามาเขียนตรงนี้เลย
        //     console.log(`summation = ${result}`)
        // })
    
    // เขียนโปรแกรมดาวน์โหลดไฟล์ function normal
        // url1 = 'Flook.dev/file999.json'
        
        // function downloading (url) {
        //     console.log(`Loading ${url}`)
        // }

        // function complete () {
        //     console.log(`Complete!!`)
        // }

        // downloading(url1)
        // complete()

    // เขียนโปรแกรมดาวน์โหลดไฟล์ function callback

        const url1 = 'Flook.dev/file1.json'
        const url2 = 'Flook.dev/file2.json'
        const url3 = 'Flook.dev/file3.json'
        
        function downloading (url,callback) {
            console.log(`Loading ${url}`) 
            setTimeout(() => {
                callback(url)
            },3000)
        }

        function complete (ans) {
            console.log(`Downloaded ${ans} complete!!`)
        }

        // downloading(url1,complete)
        downloading(url1,(ans) => {
            console.log(`Downloaded ${ans} complete!!`)
            
                downloading(url2,(ans) => {
                    console.log(`Downloaded ${ans} complete!!`)

                        downloading(url3,(ans) => {
                            console.log(`Downloaded ${ans} complete!!`)
                                
                        })
                        
                })
        })
        // การเขียน callback ซ้อนกันแบบนี้จะทำให้เกิด callback hell คืองงเพราะมันซ้อนกันไปเรื่อยๆ จนงง
            
        
        