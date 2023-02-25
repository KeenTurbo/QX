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



re('is_vip":false@expire_time":"\\d{4}','is_vip":true@expire_time":"2099')
function re(){var e=$response.body;if(arguments[0].includes("@")){var n=arguments[0].split("@"),r=arguments[1].split("@");for(i=0;i<n.length;i++)var l=new RegExp(n[i],"g"),e=e.replace(l,r[i])}else{l=new RegExp(arguments[0],"g");e=e.replace(l,arguments[1])}$done(e)}
