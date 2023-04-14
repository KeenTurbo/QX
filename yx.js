let obj=JSON.parse($response.body);
obj.data.topFunctionalArea.splice(4);
$done({body: JSON.stringify(obj)});
