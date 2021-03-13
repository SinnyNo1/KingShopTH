let select = document.getElementById('select')
let amount = document.getElementById('amount')
let money = document.getElementById('money')
let username = document.getElementById('username')
let number = document.getElementById('number')

function Work() {
    if (select.value == "None") {
        swal({
            title: "เกิดข้อผิดพลาด!",
            text: "คุณยังไม่ได้เลือกไอเทม!",
            icon: "error",
            button: "ตกลง",
        });
    }
    else
    {
        if (amount.value == 0) {
            swal({
                title: "เกิดข้อผิดพลาด!",
                text: "คุณยังไม่ได้เลือกจำนวนไอเทม!",
                icon: "error",
                button: "ตกลง",
            });
        }
        else
        {
            if (amount.value < 0) {
                swal({
                    title: "เกิดข้อผิดพลาด!",
                    text: "คุณกรอกจำนวนไอเทมน้อยกว่า 0!",
                    icon: "error",
                    button: "ตกลง",
                });
            }
            else
            {
                if (username.value.length < 3) {
                    swal({
                        title: "เกิดข้อผิดพลาด!",
                        text: "ชื่อของคุณต่ำกว่า 3 หลัก!",
                        icon: "error",
                        button: "ตกลง",
                    });
                }
                else
                {
                    if (username.value.length > 20) {
                        swal({
                            title: "เกิดข้อผิดพลาด!",
                            text: "ชื่อของคุณมากกว่า 20 หลัก!",
                            icon: "error",
                            button: "ตกลง",
                        });
                    }
                    else
                    {
                        if (number.value.length < 14) {
                            swal({
                                title: "เกิดข้อผิดพลาด!",
                                text: "เลขอ้างอิงของคุณต่ำกว่า 14 หลัก!",
                                icon: "error",
                                button: "ตกลง",
                            });
                        }
                        else
                        {
                            if (number.value.length > 14) {
                                swal({
                                    title: "เกิดข้อผิดพลาด!",
                                    text: "เลขอ้างอิงของคุณมากกว่า 14 หลัก!",
                                    icon: "error",
                                    button: "ตกลง",
                                });
                            }
                            else
                            {
                                swal({
                                    title: "สำเร็จ!",
                                    text: "รอแอดมินเข้าเซิฟเวอร์แล้วแอดของไปให้ภายใน 15 นาที",
                                    icon: "success",
                                    button: "ตกลง",
                                });
const url = "https://discord.com/api/webhooks/820340481497628715/DF_Nu9DsMYojjB-PV5tFVuvkJPV0WvTNeZDayYDt58u_T9WYMdB8RTOmPRIEd6tyKAYU"
const msg = 
{
  "content": null,
  "embeds": [
    {
      "title": "Project XL Item",
      "description": "ชื่อผู้ใช้ Roblox : "+username.value+"\nชื่อไอเทม : "+select.value+"\nจำนวนไอเทม : "+amount.value+"\nจำนวนเงิน : "+money.value+"\nเลขอ้างอิง : "+number.value,
      "color": 16763904
    }
  ],
  "username": "Project XL Item"
}

fetch(url,{"method":"POST","headers": {"content-type":"application/json"},"body":JSON.stringify(msg)})
                            }
                        }
                    }
                }
            }
        }
    }
}