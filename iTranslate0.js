脚本功能：iTranslate 订阅
下载地址：https://is.gd/4QGRR6
特别说明：如不能解锁，必须试用一次即可！
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

https://ssl-api.itranslateapp.com/accounts/v4/subscriptions/verify/ios url script-response-body https://raw.githubusercontent.com/jizhi0520/QX/main//iTranslate0.js

[mitm] 

hostname = ssl-api.itranslateapp.com

*******************************/

let obj = 
{"licenses":[{"bundle_id":"com.outerspaceapps.itranslate","expires_date_ms":253402271999000,"is_trial_period":true,"original_transaction_id":"160000714859958","product_id":"com.itranslate.pro.monthly","transaction_id":"160000714859958"},{"bundle_id":"com.outerspaceapps.itranslate","expires_date_ms":253402271999000,"is_trial_period":true,"original_transaction_id":"160000714859958","product_id":"com.itranslate.pro.monthly","transaction_id":"160000714859958"}]}
}
$done({body: JSON.stringify(obj)});
