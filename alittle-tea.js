let obj=JSON.parse($response.body);
delete obj.data.ad_img ;
$done({body: JSON.stringify(obj)});
