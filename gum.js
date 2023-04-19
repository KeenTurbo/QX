let obj=JSON.parse($response.body);
delete obj.data.homeCommunityEntryBg ;
$done({body: JSON.stringify(obj)});
