let obj=JSON.parse($response.body);
delete obj.INDEX_TOP_BANNER ;
$done({body: JSON.stringify(obj)});
