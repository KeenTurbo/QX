let obj=JSON.parse($response.body);
delete obj.data.config.qm-banner ;
$done({body: JSON.stringify(obj)});
