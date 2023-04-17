let obj=JSON.parse($response.body);
delete obj.data.homeNewsAdv ;
$done({body: JSON.stringify(obj)});
