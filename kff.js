let obj = JSON.parse($response.body);
obj.data.config = JSON.stringify(JSON.parse(obj.data.config).filter(item => !item.title.includes("轮播")));
$done({body: JSON.stringify(obj)});
