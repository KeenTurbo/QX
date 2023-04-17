let obj=JSON.parse($response.body);
delete obj.data.homeAds ;
$done({body: JSON.stringify(obj)});
