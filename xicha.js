let obj=JSON.parse($response.body);
delete obj.data.ads ;
delete obj.data.brands ;
$done({body: JSON.stringify(obj)});
