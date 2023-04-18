let obj = JSON.parse($response.body);
obj.data.config = JSON.stringify(JSON.parse(obj.data.config).filter(item => !item.title.includes("会员画布")));
obj.data.config = JSON.stringify(JSON.parse(obj.data.config).filter(item => !item.title.includes("图片")));
obj.data.config = JSON.stringify(JSON.parse(obj.data.config).filter(item => !item.title.includes("图片热点")));
$done({body: JSON.stringify(obj)});
