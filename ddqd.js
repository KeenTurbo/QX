/******************************

脚本功能：滴答清单
下载地址：https://is.gd/xDbsrm
软件版本：6.3.80
更新时间：2023-02-25
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

***************************

[rewrite_local]

^https:\/\/dida365\.com\/api\/v2\/user\/status url script-response-body https://raw.githubusercontent.com/jizhi0520/QX/main/ddqd.js

[mitm] 

hostname = dida365.com

*******************************/



var _0xf36b = ["body", "parse", "proEndDate", "9999-12-31T00:00:00.000+0000", "needSubscribe", "pro", "stringify"];
var body = $response[_0xf36b[0]];
var obj = JSON[_0xf36b[1]](body);
obj[_0xf36b[2]] = _0xf36b[3];
obj[_0xf36b[4]] = false;
obj[_0xf36b[5]] = true;
body = JSON[_0xf36b[6]](obj);
$done(body)
