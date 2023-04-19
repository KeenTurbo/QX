let obj=JSON.parse($response.body);
delete obj.data.actionPointList ;
$done({body: JSON.stringify(obj)});
