let obj=JSON.parse($response.body);
delete obj.data.INDEX_SLOT_01;
delete obj.data.INDEX_SLOT_02;
delete obj.data.INDEX_TOP_BANNER.bubble;
delete obj.data.INDEX_TOP_BANNER.figure;
obj.data?.INDEX_TOP_BANNER?.contents?.splice(1);
obj.data.INDEX_TOP_BANNER.contents[0].value = "https://raw.githubusercontent.com/jizhi0520/QX/main/cyyss.jpg";
$done({body: JSON.stringify(obj)});
