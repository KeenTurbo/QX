let obj=JSON.parse($response.body);
delete obj.info.moduleJson;
$done({body: JSON.stringify(obj)});
