let obj=JSON.parse($response.body);
delete obj.data.ad ;
$done({body: JSON.stringify(obj)});
