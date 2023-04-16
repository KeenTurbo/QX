let obj=JSON.parse($response.body);
delete obj.data.INDEX_TOP_BANNER.contents[1].bubble ;
delete obj.data.INDEX_TOP_BANNER.contents[1].figure ;
$done({body: JSON.stringify(obj)});
