let obj=JSON.parse($response.body);
delete obj.data.homeNewsAdv ;
delete obj.data.eventThemes ;
delete obj.data.homeBannerAdv ;
delete obj.data.nearbyShopInfo ;
delete obj.data.homeDialogAdv ;
delete obj.data.homeTopAdv ;
$done({body: JSON.stringify(obj)});
