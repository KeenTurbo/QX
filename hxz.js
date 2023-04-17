let obj=JSON.parse($response.body);
delete obj.data.p_webapp_home_preferential_banner ;
delete obj.data.p_webapp_home_preferential_banner
$done({body: JSON.stringify(obj)});
