
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
var body = $response['body'];
var url = $request['url'];
var obj = JSON['parse'](body);
var sj = '2099-07-30 23:50:35;';
var bz = '9999999999999';
var ll = '豆豆';
var qm = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg10.360buyimg.com%2Fn0%2Fjfs%2Ft1%2F66253%2F38%2F12315%2F158714%2F5d9caed4Ef32b47b9%2F33d8d07a8489788a.jpg&refer=http%3A%2F%2Fimg10.360buyimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661201310&t=651564aec8b189f326a483d97de6af5b';
const vip = '/app/user/init';
const viq = '/app/user/pro/stat';
const mz = '/app/user';
if (url['indexOf'](mz) != -1) {
    obj['data']['username'] = ll;
    obj['data']['nickname'] = ll;
    obj['data']['avatar'] = qm;
    body = JSON['stringify'](obj)
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
    body = JSON['stringify'](obj)
};
if (url['indexOf'](viq) != -1) {
    obj['data']['expireDate'] = sj;
    obj['data']['activeType'] = 'svipUserProInfo';
    obj['data']['userProInfoVO']['status'] = 3;
    obj['data']['userProInfoVO']['subscribeExpiresDate'] = sj;
    obj['data']['userProInfoVO']['subscribeType'] = 'svip';
    obj['data']['userProInfoVO']['autoRenewal'] = true;
    obj['newMessage'] = true;
    body = JSON['stringify'](obj)
};
$done({body});
