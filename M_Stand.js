let obj=JSON.parse($response.body);
delete obj.data.homeNewsAdv ;
delete obj.data.homePickupAdv ;
delete obj.data.homeBannerAdv ;
delete obj.data.homeDialogAdv ;
delete obj.data.homeTopAdv ;
$done({body: JSON.stringify(obj)});
