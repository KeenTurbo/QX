let obj=JSON.parse($response.body);
delete obj.data.首页 ;
$done({body: JSON.stringify(obj)});
