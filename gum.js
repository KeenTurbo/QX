let obj=JSON.parse($response.body);
delete obj.data.homeCommunityEntryBg ;
delete obj.data.inviteActivityLandingGoodImg ;
delete obj.data.defaultPosterPic ;
delete obj.data.customBannerForCity ;
delete obj.data.indexShareConfig ;
$done({body: JSON.stringify(obj)});
