
// //เทสกรณีมีของไหม

// var request = require('request');
// request.post(
//     'http://35.240.139.71:20000/api/word ',
//     { json: {
//         "text":"มี ASUS Dual-band Wireless-AC1200 router RT-AC1200G+ ไหม"
//     } },
//     function (error, response, body) {
//         if (!error && response.statusCode == 200) {
//             console.log(body)

//             //console.log(body.Answer.Img)
//         }
//     }
// );


// //เทสกรณีถามว่าของเหลือไหม

// var request = require('request');
// request.post(
//     'http://35.240.139.71:20000/api/word ',
//     { json: {
//         "text":"ASUS Dual-band Wireless-AC1200 router RT-AC1200G+ เหลือไหม"
//     } },
//     function (error, response, body) {
//         if (!error && response.statusCode == 200) {
//             console.log(body)

//             //console.log(body.Answer.Img)
//         }
//     }
// );


// //เทสกรณีที่ไม่มีคำตอบ

var request = require('request');
request.post(
    'http://35.198.240.228:20000/api/word ',
    { json: {
        "text":"มีหน้าร้านไหม"
    } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)

            //console.log(body.Answer.Img)
        }
    }
);


// //เทสกระบวนเตรียมคำและให้ผู้ใข้เลือกต่อว่าคำไหนไม่มีความจำเป็น

// var request = require('request');
// request.get(
//     'http://35.240.139.71:20000/api/findfeature ',
//     function (error, response, body) {
//         if (!error && response.statusCode == 200) {
//             console.log(body);
//         }
//     }
// );