let obj=JSON.parse($response.body);
obj.data.index.sknComponents = obj.data.index.sknComponents.filter(item => ["广告"].includes(item.title));
obj.data.mall_index.sknComponents = obj.data.mall_index.sknComponents.filter(item => ["广告"].includes(item.title));
$done({body: JSON.stringify(obj)});
