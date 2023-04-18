let obj=JSON.parse($response.body);
delete obj.data.config.events ;
$done({body: JSON.stringify(obj)});
