// Promise นำมาใช้แทน callbackในการทำงานแบบ Asynchronous ใช้กับงานที่มีการหน่วงเวลา งานที่ต้องทำเบื้องหลัง

const connect = true; // check connect internet
const url1 = 'flook.dev/salary.json';
const url2 = 'Flook.dev/file2.json';
const url3 = 'Flook.dev/file3.json';
const url4 = 'Flook.dev/file4.json';
        

export function downloading (url) {
    return new Promise ((resolve,reject) => {
        console.log(`Wait loading...`);
        setTimeout(() => {
            if(connect) {
                resolve(`Loaded ${url} complete!`); //ถ้า connect = true ให้ส่งสถานะ resolve และมันส่ง `Loaded ${url} complete`ด้วย
            } else {
                reject(`Error timeout!` );
            }
        },3000);
    })
};



    // downloading (url1) //ถ้า downloading ทำเสร็จแล้วเราให้ then ว่าทำอะไรต่อ โดย result = ค่าที่ส่งมาของ resolve or reject
    // .then(result => {
    //     console.log(`${result}`);
    // }).catch(error => { //เกิดข้อผิดพลาดและเกิดสถานะ reject จะเข้ามาที่นี่ แล้ว log ออกว่า error
    //     console.log(`${error}`);
    // }).finally(()=> { // จะเกิด resolve or reject จะวิ่งเข้ามาที่นี่เสมอ
    //     console.log('End of process')
    // })

// ลองเอามาใช้แก้ปัญหา call back hell dowload 5 data from 5 url
    // promise hell
    // downloading (url1)
    // .then((result1) => {
    //     console.log(result1)
    //     downloading (url2).then((result2)=> {
    //         console.log(result2)
    //         downloading (url3).then((result3)=> {
    //             console.log(result3)
    //         })
    //     })
    // })
    
    // promise fix hell
    downloading(url1)
    .then((result1) => { 
        console.log(result1)
        return downloading(url2) // url 1 โหลดเสร็จเราจะ return downloading และ pass url2 ไปเพราะ downloading มันมี promise
    }).then((result2) => { // then ถัดมาจะรับ result2 = downloading(url2) แล้วเอามา log
        console.log(result2)
        return downloading(url3)
    }).then((result3) => { 
        console.log(result3)
        return downloading(url4)
    }).then((result4) => { 
        console.log(result4)
    }).catch((error)=> {
        console.log(error)
    }).finally(()=>{
        console.log('End process!')
    })