let obj=JSON.parse($response.body);
delete obj.data.INDEX_SLOT_01 ;
obj.data.INDEX_SLOT_02.contents.value = "https://zdimg.lifeweek.com.cn/app/20230410/16810960185662892.jpg" ;
$done({body: JSON.stringify(obj)});
