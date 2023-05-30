/******************************

脚本功能：documents文件管理器+解锁订阅

下载地址：https://is.gd/DLjoIn

TG频道群：https://t.me/gjwj6

进内部群加微:YveL1975



*******************************

[rewrite_local]

^https:\/\/license\.pdfexpert\.com\/api\/2\.0\/documents\/subscription\/refresh url script-request-body https://raw.githubusercontent.com/jizhi0520/QX/main/documents.js

[mitm] 

hostname = license.pdfexpert.com

*******************************/

var jizhi0520 = JSON.parse($response.body);

jizhi0520 = {
  "originalTransactionId" : 520000532982729,
  "inAppStates" : [
    {
      "originalTransactionId" : 520000532982729,
      "productId" : "com.readdle.ReaddleDocsIPad.subscription.year50",
      "subscriptionState" : "lapsed",
      "productName" : "subscription",
      "subscriptionExpirationDate" : "07:07 03/03/2023",
      "isEligibleForIntroPeriod" : false,
      "subscriptionAutoRenewStatus" : "autoRenewOff",
      "type" : "subscription",
      "isInGracePeriod" : false,
      "isInBillingRetryPeriod" : false,
      "entitlements" : [

      ]
    }
  ],
  "chargingPlatform" : "iOS AppStore",
  "receiptStatus" : "ok",
  "bundleId" : "com.readdle.ReaddleDocsIPad",
  "receiptId" : 1579694237000,
  "statisticsInfo" : {
    "events" : [

    ]
  },
  "externalId" : "0b3fbc7c-de5c-4c67-9184-e8bbe4527726"
}


$done({body : JSON.stringify(jizhi0520)});
