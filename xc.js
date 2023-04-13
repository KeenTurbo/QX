let obj=JSON.parse($response.body);
delete obj.data.p3;
$done({body: JSON.stringify(obj)});
