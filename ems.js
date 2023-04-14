let obj=JSON.parse($response.body);
delete obj.data.info.moduleJson;
$done({body: JSON.stringify(obj)});
