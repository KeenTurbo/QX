let obj=JSON.parse($response.body);
delete obj.data.main_body.items ;
$done({body: JSON.stringify(obj)});
