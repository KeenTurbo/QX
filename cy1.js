let obj = JSON.parse($response.body);
obj.data.INDEX_TOP_BANNER.contents[0].bubble = "https://raw.githubusercontent.com/jizhi0520/QX/main/cyyss1.jpg";
obj.data.INDEX_TOP_BANNER.contents[1].bubble = "https://raw.githubusercontent.com/jizhi0520/QX/main/cyyss1.jpg";
obj.data.INDEX_TOP_BANNER.contents[2].bubble = "https://raw.githubusercontent.com/jizhi0520/QX/main/cyyss1.jpg";
obj.data.INDEX_TOP_BANNER.contents[3].bubble = "https://raw.githubusercontent.com/jizhi0520/QX/main/cyyss1.jpg";
obj.data.INDEX_TOP_BANNER.contents[4].bubble = "https://raw.githubusercontent.com/jizhi0520/QX/main/cyyss1.jpg";
$done({
    body: JSON.stringify(obj)
});
