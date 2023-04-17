let obj=JSON.parse($response.body);
delete obj.data.list;
$done({body: JSON.stringify(obj)});
