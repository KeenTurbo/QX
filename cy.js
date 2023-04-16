let obj=JSON.parse($response.body);
delete obj.data.contents.bubble ;
delete obj.data.contents.figure ;
delete
$done({body: JSON.stringify(obj)});
