let obj=JSON.parse($response.body);
delete obj.data.INDEX_TOP_BANNER.contents[0].bubble ;
delete obj.data.INDEX_TOP_BANNER.contents[0].figure ;
$done({body: JSON.stringify(obj)});
