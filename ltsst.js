功能：旅途随身听 解锁内购
使用声明：⚠️仅供学习交流，🈲️商业用途

*******************************

[rewrite_local]
# > 旅途随身听 解锁内购
^^https:\/\/www\.1314zhilv\.com\/ltsstnew\/user\/getInfo url script-response-body https://raw.githubusercontent.com/jizhi0520/QX/main/ltsst.js


[mitm] 
hostname=www.1314zhilv.com

*******************************/


let body = {
  "success" : true,
  "message" : "success",
  "state" : 200,
  "content" : {
    "headUrl" : null,
    "isMountSwitch" : 0,
    "isAnchor" : 1,
    "isSYGuidePopUp" : 1,
    "isShowAppletWX" : 0,
    "isDistributor" : 0,
    "isShowGrey" : 0,
    "levDesc" : "尊贵的",
    "totalCashBalance" : 0,
    "userName" : "",
    "userId" : "",
    "phoneNum" : "",
    "identityType" : 1,
    "cashBalance" : 0,
    "isShowBroadcast" : 0,
    "isShowShareBtn" : 0,
    "isShowAppletDY" : 0,
    "isActivate" : 1
  }
}

$done({ body: JSON.stringify(body) });
