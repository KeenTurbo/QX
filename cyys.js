let obj=JSON.parse($response.body);
delete obj.data.INDEX_SLOT_01 ;
delete obj.data.INDEX_SLOT_02;
$done({body: JSON.stringify(obj)});
