let obj = JSON.parse($response.body);
//图片热点
obj.data.config = JSON.stringify(JSON.parse(obj.data.config).filter(item => !item.tag.includes("qm-image-hot")));
//会员画布
obj.data.config = JSON.stringify(JSON.parse(obj.data.config).filter(item => !item.tag.includes("qm-member-area")));
obj.data.config = JSON.stringify(JSON.parse(obj.data.config).filter(item => !item.id.includes("0ba6a615-b7e9-48aa-afe7-329635385f2c")));
$done({body: JSON.stringify(obj)});
