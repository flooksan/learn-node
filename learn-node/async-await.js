// Async / await
// import {downloading} from "./promise.js"  error Cannot use import statement outside a module

const connect = true; // check connect internet
const url1 = 'flook.dev/salary.json';
const url2 = 'Flook.dev/file2.json';
const url3 = 'Flook.dev/file3.json';
const url4 = 'Flook.dev/file4.json';

function downloading (url) {
    return new Promise ((resolve,reject) => {
        console.log(`Wait loading...`);
        setTimeout(() => {
            if(connect) {
                resolve(`Loaded ${url} complete!`); 
            } else {
                reject(`Error timeout!` );
            }
        },1000);
    })
};

    // use Aysnc/ await
    async function start () {
        console.log(await downloading(url1))
        console.log(await downloading(url2))
        console.log(await downloading(url3))
        console.log(await downloading(url4))
        // ต้องใส่ await ถ้าต้องการให้มันทำงานตามลำดับ ถ้าไม่ใส่มันจะทำพร้อมกันหมดเลย ตัวสุดท้ายใส่ไม่ใส่ก็ได้แต่ควรใส่
    }

    start().catch((error) => { //เรียกใช้ start  async function
        console.log(`${error} !!`)
    }).finally(() => { console.log(('=').repeat(5),'Complete!',('=').repeat(5)) })

// Aplly async - awit
    /* api ดึงภาพสินค้า จากหลังบ้าน => เอาไปใช้หน้าบ้าน (แสดงภาพบน web) */
    /* api เป็น promise เมื่อเริ่มดึงภาพจากหลังบ้านจะขึ้นสถานะเป็น pending -> 
        ผลที่ได้แต่ละภาพเป็น resolve or reject -> ก่อนจะแสดงต้องรอข้อมูลมาครบก่อน (await) 
        ถ้าไม่รอหน้าเว๊ปเราจะเป็นหน้าเปล่าๆ ดังนั้นเราจะแสดงเป็นหน้า download บอก user เมื่อภาพมาก็โชว์ภาพ */
