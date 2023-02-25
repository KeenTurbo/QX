
/***********************************

> 应用名称：用药助手
> 软件版本：13.8.1
> 下载地址：https://apps.apple.com/cn/app/id540999305
> 更新时间：2023-02-25
> 特别说明：本脚本仅供学习交流使用，禁止转载售卖
 

[rewrite_local]

^https://newdrugs.dxy.cn url script-response-body https://raw.githubusercontent.com/jizhi0520/QX/main/yyzs.js

[mitm] 

hostname=newdrugs.dxy.cn

*******************************/


var body = $response.body.replace(/false/g, "true");
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);
var sj = "2099-07-30 23:50:35;";
var bz = "9999999999999";
var ll = "豆豆";
var qm = "https://cdn.dribbble.com/users/3972215/screenshots/14522042/media/7a72b7b1ab3c9445e7a0795e1be2e3c7.jpg";
const vip = "/app/user/init";
const viq = "/app/user/pro/stat";
const mz = "/app/user";

if (url.indexOf(mz) != -1) {
obj.data.username = ll;
obj.data.nickname = ll;
obj.data.avatar = qm;
body = JSON.stringify(obj);
}

if (url.indexOf(vip) != -1) {
obj.data.expiredDay = 999999;
obj.data.newMessage = true;
obj.data.isProActive = true;
obj.data.subscribe = true;
obj.data.userProStatStatusEnum = "VALID";
obj.data.expireDate = sj;
obj.data.expiredTime = sj;
obj.data.userProInfoVO.subscribeExpiresDate = sj;
obj.data.userProInfoVO.expiredDay = 999;
obj.data.userProInfoVO.placeholderVip = sj;
obj.data.userProInfoVO.activeType = "svip";
console.log("xqk", JSON.stringify(obj));
body = JSON.stringify(obj);
}

if (url.indexOf(viq) != -1) {
obj.data.userProInfoVO.placeholderVip = sj;
obj.data.userProInfoVO.userProStatStatusEnum = "VALID";
obj.data.userProInfoVO.subscribe = true;
obj.data.userProInfoVO.expiredDay = 999999;
obj.data.newMessage = true;
obj.data.isProActive = true;
obj.data.subscribeExpiresDate = sj;
obj.data.expireDate = sj;
obj.data.userProInfoVO.expiredTime = bz;
obj.data.svipUserProInfo.expiredTime = "2099-04-12 16:14:16";
obj.data.svipUserProInfo.expiredDay = "9999999";
obj.data.svipUserProInfo.subscribe = true;
obj.data.remainExpiredDay = "9999999";
obj.data.svipUserProInfo.appendDays = "9999999";
obj.data.svipUserProInfo.placeholderVip = true;
body = JSON.stringify(obj);
}

$done({body});
