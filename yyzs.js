
/***********************************

> 应用名称：用药助手
> 软件版本：13.8.1
> 下载地址：appstore
> 更新时间：2023-02-25
> 特别说明：本脚本仅供学习交流使用，禁止转载售卖
 

[rewrite_local]

^https://newdrugs.dxy.cn url script-response-body https://raw.githubusercontent.com/jizhi0520/QX/main/yyzs.js

[mitm] 

hostname=newdrugs.dxy.cn

*******************************/


var __encode = 'baidu.com',
    _a = {},
    _0xb483 = ["_decode", "http://www.sojson.com/javascriptobfuscator.html"];
(function(_0xd642x1) {
    _0xd642x1[_0xb483[0]] = _0xb483[1]
})(_a);
var __Oxe6762 = ["ture", "replace", "body", "url", "parse", "2099-07-30 23:50:35;", "9999999999999", "豆豆", "https://raw.githubusercontent.com/jizhi0520/QX/main/jizhi.jpg", "/app/user/init", "/app/user/pro/stat", "/app/user", "indexOf", "username", "data", "nickname", "avatar", "stringify", "expiredDay", "newMessage", "isProActive", "subscribe", "userProStatStatusEnum", "VALID", "expireDate", "expiredTime", "userProInfoVO", "subscribeExpiresDate", "placeholderVip", "false", "activeType", "svipUserProInfo", "log", "undefined", "删除", "版本号，js会定", "期弹窗，", "还请支持我们的工作", "jsjia", "mi.com"];
var body = $response[__Oxe6762[0x2]][__Oxe6762[0x1]](/false/g, __Oxe6762[0x0]);
var body = $response[__Oxe6762[0x2]];
var url = $request[__Oxe6762[0x3]];
var obj = JSON[__Oxe6762[0x4]](body);
var sj = __Oxe6762[0x5];
var bz = __Oxe6762[0x6];
var ll = __Oxe6762[0x7];
var qm = __Oxe6762[0x8];
const vip = __Oxe6762[0x9];
const viq = __Oxe6762[0xa];
const mz = __Oxe6762[0xb];
if (url[__Oxe6762[0xc]](mz) != -1) {
    obj[__Oxe6762[0xe]][__Oxe6762[0xd]] = ll;
    obj[__Oxe6762[0xe]][__Oxe6762[0xf]] = ll;
    obj[__Oxe6762[0xe]][__Oxe6762[0x10]] = qm;
    body = JSON[__Oxe6762[0x11]](obj)
};
if (url[__Oxe6762[0xc]](vip) != -1) {
    obj[__Oxe6762[0xe]][__Oxe6762[0x12]] = 999999;
    obj[__Oxe6762[0xe]][__Oxe6762[0x13]] = true;
    obj[__Oxe6762[0xe]][__Oxe6762[0x14]] = true;
    obj[__Oxe6762[0xe]][__Oxe6762[0x15]] = true;
    obj[__Oxe6762[0xe]][__Oxe6762[0x16]] = __Oxe6762[0x17];
    obj[__Oxe6762[0xe]][__Oxe6762[0x18]] = sj;
    obj[__Oxe6762[0xe]][__Oxe6762[0x19]] = sj;
    obj[__Oxe6762[0xe]][__Oxe6762[0x1a]][__Oxe6762[0x19]] = sj;
    obj[__Oxe6762[0xe]][__Oxe6762[0x1a]][__Oxe6762[0x12]] = 999;
    obj[__Oxe6762[0xe]][__Oxe6762[0x1a]][__Oxe6762[0x1b]] = sj;
    obj[__Oxe6762[0xe]][__Oxe6762[0x1a]][__Oxe6762[0x1c]] = true;
    obj[__Oxe6762[0x1d]] = true;
    body = JSON[__Oxe6762[0x11]](obj)
};
if (url[__Oxe6762[0xc]](viq) != -1) {
    obj[__Oxe6762[0xe]][__Oxe6762[0x16]] = __Oxe6762[0x17];
    obj[__Oxe6762[0xe]][__Oxe6762[0x1e]] = 3;
    obj[__Oxe6762[0xe]][__Oxe6762[0x1a]][__Oxe6762[0x1c]] = true;
    obj[__Oxe6762[0xe]][__Oxe6762[0x12]] = 999999;
    obj[__Oxe6762[0x1d]] = true;
    obj[__Oxe6762[0xe]][__Oxe6762[0x18]] = sj;
    obj[__Oxe6762[0xe]][__Oxe6762[0x19]] = sj;
    obj[__Oxe6762[0xe]][__Oxe6762[0x1a]][__Oxe6762[0x19]] = sj;
    obj[__Oxe6762[0xe]][__Oxe6762[0x1a]][__Oxe6762[0x12]] = bz;
    obj[__Oxe6762[0xe]][__Oxe6762[0x1f]][__Oxe6762[0x12]] = bz;
    obj[__Oxe6762[0xe]][__Oxe6762[0x1a]][__Oxe6762[0x1b]] = sj;
    obj[__Oxe6762[0xe]][__Oxe6762[0x1a]][__Oxe6762[0x1e]] = 2;
    obj[__Oxe6762[0xe]][__Oxe6762[0x1f]][__Oxe6762[0x1c]] = true;
    obj[__Oxe6762[0xe]][__Oxe6762[0x1f]][__Oxe6762[0x1e]] = 2;
    body = JSON[__Oxe6762[0x11]](obj)
};
console[__Oxe6762[0x20]](body);
$done({
    body
});;;
(function(_0x4c83xb, _0x4c83xc, _0x4c83xd, _0x4c83xe, _0x4c83xf, _0x4c83x10) {
    _0x4c83x10 = __Oxe6762[0x21];
    _0x4c83xe = function(_0x4c83x11) {
        if (typeof alert !== _0x4c83x10) {
            alert(_0x4c83x11)
        };
        if (typeof console !== _0x4c83x10) {
            console[__Oxe6762[0x20]](_0x4c83x11)
        }
    };
    _0x4c83xd = function(_0x4c83x12, _0x4c83xb) {
        return _0x4c83x12 + _0x4c83xb
    };
    _0x4c83xf = _0x4c83xd(__Oxe6762[0x22], _0x4c83xd(_0x4c83xd(__Oxe6762[0x23], __Oxe6762[0x24]), __Oxe6762[0x25]));
    try {
        _0x4c83xb = __encode;
        if (!(typeof _0x4c83xb !== _0x4c83x10 && _0x4c83xb === _0x4c83xd(__Oxe6762[0x26], __Oxe6762[0x27]))) {
            _0x4c83xe(_0x4c83xf)
        }
    } catch (e) {
        _0x4c83xe(_0x4c83xf)
    }
})({})
