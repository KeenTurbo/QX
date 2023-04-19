let obj=JSON.parse($response.body);
delete obj.data.data.homeCommunityEntryBg ;
delete obj.data.data.inviteActivityLandingGoodImg ;
delete obj.data.data.defaultPosterPic ;
delete obj.data.data.customBannerForCity.indexShareConfig ;
$done({body: JSON.stringify(obj)});
