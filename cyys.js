let obj=JSON.parse($response.body);
delete obj.data.INDEX_SLOT_01 ;
$done({body: JSON.stringify(obj)});
