let obj=JSON.parse($response.body);
obj.data.center=[];
$done({body: JSON.stringify(obj)});
