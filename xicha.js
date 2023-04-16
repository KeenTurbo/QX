let obj=JSON.parse($response.body);
delete obj.data.ad ;
delete obj.data.brands ;
$done({body: JSON.stringify(obj)});
