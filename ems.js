let obj=JSON.parse($response.body);
obj.info.moduleJson.replace(/\/g, '');;
$done({body: JSON.stringify(obj)});
