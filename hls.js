let obj=JSON.parse($response.body);
delete obj.data.index.sknComponents.settingList ;
$done({body: JSON.stringify(obj)});
