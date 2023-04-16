let obj = JSON.parse($response.body);
delete obj.data.INDEX_TOP_BANNER.contents[0].bubble;
delete obj.data.INDEX_TOP_BANNER.contents[1].bubble;
delete obj.data.INDEX_TOP_BANNER.contents[2].bubble;
delete obj.data.INDEX_TOP_BANNER.contents[3].bubble;
delete obj.data.INDEX_TOP_BANNER.contents[4].bubble;
$done({
    body: JSON.stringify(obj)
});
