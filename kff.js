let obj=JSON.parse($response.body);
delete obj.data.config.showHoldTips ;
$done({body: JSON.stringify(obj)});
