let obj=JSON.parse($response.body);
delete obj.data.100001.negativeScreen.list.adlist ;
$done({body: JSON.stringify(obj)});
