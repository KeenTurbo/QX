let obj = JSON.parse($response.body);

delete obj.data.INDEX_SLOT_01;

//删除所有👇滚动AD
//delete obj.data.INDEX_TOP_BANNER.contents ;

//换图
obj.data.INDEX_TOP_BANNER.contents[0].value = "https://raw.githubusercontent.com/jizhi0520/QX/main/zzcl.png";
//保留一个👇
delete obj.data.INDEX_TOP_BANNER.contents[1];
delete obj.data.INDEX_TOP_BANNER.contents[2];
delete obj.data.INDEX_TOP_BANNER.contents[3];
delete obj.data.INDEX_TOP_BANNER.contents[4];
delete obj.data.INDEX_TOP_BANNER.contents[5];

$done({
    body: JSON.stringify(obj)
});
