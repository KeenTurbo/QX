let obj=JSON.parse($response.body);
delete obj.data.settingList ;
$done({body: JSON.stringify(obj)});
