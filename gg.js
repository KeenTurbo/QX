let obj = JSON.parse($response.body);
obj.data.actionPointList= JSON.stringify(JSON.parse(obj.data.actionPointList).filter(item => !item.pointName.includes("新品公告")));
$done({body: JSON.stringify(obj)});
