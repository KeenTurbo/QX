
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


var body = $response['body']['replace'](/false/g, 'true');
var url = $request['url'];
var obj = JSON['parse'](body);
var sj = '2099-07-30 23:50:35';
var bz = '9999999999999';
var ll = '豆豆';
var qm = 'https://raw.githubusercontent.com/jizhi0520/QX/main/jizhi.jpg';
const vip = '/app/user/init';
const viq = '/app/user/pro/stat';
const mz = '/app/user';
if (url['indexOf'](mz) != -1) {
    obj['data']['username'] = ll;
    obj['data']['nickname'] = ll;
    obj['data']['avatar'] = qm;
};
if (url['indexOf'](vip) != -1) {
    obj['data']['expiredDay'] = 999999;
    obj['data']['newMessage'] = true;
    obj['data']['isProActive'] = true;
    obj['data']['subscribe'] = true;
    obj['data']['userProStatStatusEnum'] = 'VALID';
    obj['data']['expireDate'] = sj;
    obj['data']['expiredTime'] = sj;
    obj['data']['userProInfoVO']['expireDate'] = sj;
    obj['data']['userProInfoVO']['expiredDay'] = 999;
    obj['data']['userProInfoVO']['subscribeExpiresDate'] = sj;
    obj['data']['placeholderVip'] = true;
    obj['data']['activeType'] = 'svipUserProInfo';
    obj['data']['log'] = undefined;
    obj['data']['delete'] = '删除';
};
if (url['indexOf'](viq) != -1) {
    obj['data']['expireDate'] = sj;
    obj['data']['activeType'] = 'svipUserProInfo';
    obj['data']['userProInfoVO']['status'] = 3;
    obj['data']['userProInfoVO']['subscribeExpiresDate'] = sj;
    obj['data']['userProInfoVO']['subscribeType'] = 'svip';
    obj['data']['userProInfoVO']['autoRenewal'] = true;
    obj['newMessage'] = true;
};
$done({body: JSON.stringify(obj)});
