let obj = JSON.parse($response.body);

delete obj.data.INDEX_SLOT_01;

//删除所有👇滚动AD
//delete obj.data.INDEX_TOP_BANNER.contents ;

//保留一个👇
delete obj.data.INDEX_TOP_BANNER.contents[1];
//delete obj.data.INDEX_TOP_BANNER.contents[2];
//delete obj.data.INDEX_TOP_BANNER.contents[3];
//delete obj.data.INDEX_TOP_BANNER.contents[4];

$done({
    body: JSON.stringify(obj)
});
