let obj=JSON.parse($response.body);
delete obj.data.bannerInfoConfig ;
delete obj.data.memberBaseInfoEnterResult ;
$done({body: JSON.stringify(obj)});
