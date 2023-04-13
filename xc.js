let obj=JSON.parse($response.body);
obj.data = obj.data.filter(item => !(item.id === 31));
$done({body: JSON.stringify(obj)});
