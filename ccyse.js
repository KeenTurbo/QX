let obj = JSON.parse($response.body);
delete obj.data.INDEX_SLOT_01;
obj.data.INDEX_TOP_BANNER.contents[0].value = "https://raw.githubusercontent.com/jizhi0520/QX/main/cyyss.jpg";
obj.data.INDEX_TOP_BANNER.contents[1].value = "https://raw.githubusercontent.com/jizhi0520/QX/main/cyyss.jpg";
obj.data.INDEX_TOP_BANNER.contents[2].value = "https://raw.githubusercontent.com/jizhi0520/QX/main/cyyss.jpg";
obj.data.INDEX_TOP_BANNER.contents[3].value = "https://raw.githubusercontent.com/jizhi0520/QX/main/cyyss.jpg";
obj.data.INDEX_TOP_BANNER.contents[4].value = "https://raw.githubusercontent.com/jizhi0520/QX/main/cyyss.jpg";
$done({
    body: JSON.stringify(obj)
});
