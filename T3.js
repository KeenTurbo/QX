let obj=JSON.parse($response.body);
delete obj.data.adlist ;
$done({body: JSON.stringify(obj)});
