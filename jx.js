/***********************************

> 应用名称：简讯
> 软件版本：5.0.2
> 下载地址：https://apps.apple.com/cn/app/id1160249028
> 特别提醒：如需转载请注明出处，谢谢合作！
> 特别说明：本脚本仅供学习交流使用，禁止转载售卖
          


[rewrite_local]

^https?:\/\/api\.tipsoon\.com\/api\/v1\/user\/info url script-response-body https://raw.githubusercontent.com/jizhi0520/QX/main/jx.js


[mitm] 

hostname=api.tipsoon.com

***********************************/



if (!$response.body) $done({});
const url = $request.url;
let obj = JSON.parse($response.body);

// 简讯
if (url.includes("/api/v1/user/info")) {
  let obj = JSON.parse(body);
  obj.data.is_vip = true;
  obj.data.vip_expire_time = "2040-01-01 23:59:59";
  body = JSON.stringify(obj);
}

$done({ body });
