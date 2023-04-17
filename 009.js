let obj=JSON.parse($response.body);
delete obj.data.homeDineInAdv ;
delete obj.data.homePickupAdv ;
delete obj.data.nearbyShopInfo ;
delete obj.data.homeEventThemesAdv ;
delete obj.data.homeCouponAdv ;
delete obj.data.homeDeliveryAdv ;
$done({body: JSON.stringify(obj)});
