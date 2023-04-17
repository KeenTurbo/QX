let obj=JSON.parse($response.body);
delete obj.data.bannerInfoConfig ;
delete obj.data.nextRightDetailVO ;
$done({body: JSON.stringify(obj)});
