let obj=JSON.parse($response.body);
delete obj.data.INDEX_SLOT_01;
obj.data?.INDEX_TOP_BANNER?.contents?.forEach(item => {
  delete item.bubble; 
  delete item.value;
});
obj.data?.INDEX_TOP_BANNER?.contents[0]?.value = "https://raw.githubusercontent.com/jizhi0520/QX/main/cyyss.jpg";
$done({body: JSON.stringify(obj)});
