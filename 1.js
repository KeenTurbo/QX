let obj=JSON.parse($response.body);
delete obj.list ;
$done({body: JSON.stringify(obj)});
