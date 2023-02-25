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

var body = $response["body"]["replace"](/false/g, "true");
var url = $request["url"];
var obj = JSON["parse"](body);
var sj = "2099-07-30 23:50:35;";
var bz = "9999999999999";
const vip = "/app/user/init";
const viq = "/app/user/pro/stat";
/*
const mz = "/app/user";
if (url["indexOf"](mz) != -1) {
    obj["data"]["username"] = ll;
    obj["data"]["nickname"] = ll;
    obj["data"]["avatar"] = qm;
    body = JSON["stringify"](obj)
};*/
if (url["indexOf"](vip) != -1) {
    obj["data"]["expiredDay"] = 999999;
    obj["data"]["newMessage"] = true;
    obj["data"]["isProActive"] = true;
    obj["data"]["subscribe"] = true;
    obj["data"]["userProStatStatusEnum"] = "VALID";
    obj["data"]["expireDate"] = sj;
    obj["data"]["expiredTime"] = sj;
    obj["data"]["userProInfoVO"]["expiredTime"] = sj;
    obj["data"]["userProInfoVO"]["expiredDay"] = 999;
    obj["data"]["userProInfoVO"]["subscribeExpiresDate"] = sj;
    obj["data"]["userProInfoVO"]["placeholderVip"] = true;
    obj["false"] = true;
    body = JSON["stringify"](obj)
};
if (url["indexOf"](viq) != -1) {
    obj["data"]["userProStatStatusEnum"] = "VALID";
    obj["data"]["activeType"] = 3;
    obj["data"]["userProInfoVO"]["placeholderVip"] = true;
    obj["data"]["expiredDay"] = 999999;
    obj["false"] = true;
    obj["data"]["expireDate"] = sj;
    obj["data"]["expiredTime"] = sj;
    obj["data"]["userProInfoVO"]["expiredTime"] = sj;
    obj["data"]["userProInfoVO"]["expiredDay"] = bz;
    obj["data"]["svipUserProInfo"]["expiredDay"] = bz;
    obj["data"]["userProInfoVO"]["subscribeExpiresDate"] = sj;
    obj["data"]["userProInfoVO"]["activeType"] = 2;
    obj["data"]["svipUserProInfo"]["placeholderVip"] = true;
    obj["data"]["svipUserProInfo"]["activeType"] = 2;
    body = JSON["stringify"](obj)
};
$done({body});;;
