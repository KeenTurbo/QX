let obj=JSON.parse($response.body);
delete obj.data.list.home_banner ;
$done({body: JSON.stringify(obj)});
