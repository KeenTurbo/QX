let obj=JSON.parse($response.body);
obj.data.topFunctionalArea.splice(8);
$done({body: JSON.stringify(obj)});
