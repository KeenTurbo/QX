let obj=JSON.parse($response.body);
delete obj.data.exchange_info ;
delete obj.data.top_background_url ;
delete obj.data.bottom_banner_list ;
$done({body: JSON.stringify(obj)});
