let obj=JSON.parse($response.body);
delete obj.data.homeNewsAdv ;
delete obj.data.homeBannerAdv ;
$done({body: JSON.stringify(obj)});
