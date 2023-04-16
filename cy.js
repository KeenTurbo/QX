let obj=JSON.parse($response.body);
delete obj.data.INDEX_TOP_BANNER.contents.bubble ;
delete obj.data.INDEX_TOP_BANNER.contents.figure ;
$done({body: JSON.stringify(obj)});
