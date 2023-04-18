let obj=JSON.parse($response.body);
delete obj.data.config ;
$done({body: JSON.stringify(obj)});
