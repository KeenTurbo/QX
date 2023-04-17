let obj=JSON.parse($response.body);
let ads = ["obj.data.index.sknComponents","obj.data.mall_index.sknComponents"];
ads[0] = ads[0].filter(item => ["广告"].includes(item.title));
ads[1] = ads[1].filter(item => ["广告"].includes(item.title));
$done({body: JSON.stringify(obj)});
