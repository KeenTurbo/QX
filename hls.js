let obj=JSON.parse($response.body);
delete obj.data.sknComponents ;
$done({body: JSON.stringify(obj)});
