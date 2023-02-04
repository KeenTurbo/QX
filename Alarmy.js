
/***************************************

脚本功能：
下载地址：appstore
软件版本：所有
脚本作者：
更新时间：
问题反馈：
作者QQ:
QQ会员群：添加作者
TG反馈群：
TG频道群：
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
忠告:请添加频道获取食用方法

**************************************

[mitm]

hostname = ars.alar.my

[rewrite_local]

^http[s]?:\/\/ars\.alar\.my\/api\/v2\/user\/sync url script-response-body https://raw.githubusercontent.com/jizhi0520/QX/main/Alarmy.js

***************************************/

var body = $response.body; 
let obj = JSON.parse($response.body);
obj={
    "env": "PROD",
    "userID": "E7BA93F9-AC48-4824-9A6E-821C4B8F9F21",
    "subscription": [{
        "originalTransactionID": "550001242190807",
        "productID": "droom.sleepIfUCanFree.premium.yearly01.4",
        "willAutoRenew": false,
        "isActive": true,
        "expiresDateMs": 32493834549000,
        "periodType": "TRIAL",
        "latestPurchaseDateMs": 1668504347000,
        "originalPurchaseDateMs": 1668504348000
    }],
    "syncDateMs": 1675524387227
}
$done({body: JSON.stringify(obj)});
