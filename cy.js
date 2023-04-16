let obj=JSON.parse($response.body);
delete obj.INDEX_TOP_BANNER.contents[1].bubble ;
$done({body: JSON.stringify(obj)});
