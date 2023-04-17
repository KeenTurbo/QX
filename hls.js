let obj=JSON.parse($response.body);
delete obj.data.index.sknComponents ;
$done({body: JSON.stringify(obj)});
