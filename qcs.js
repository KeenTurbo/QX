let obj=JSON.parse($response.body);
delete obj.data.show_duration = 1 ;
$done({body: JSON.stringify(obj)});
