let obj=JSON.parse($response.body);
delete obj.data.sknComponents.settingList ;
$done({body: JSON.stringify(obj)});
