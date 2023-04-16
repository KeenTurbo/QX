let obj=JSON.parse($response.body);
delete obj.INDEX_SLOT_02 ;
$done({body: JSON.stringify(obj)});
