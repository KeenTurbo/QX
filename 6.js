let obj=JSON.parse($response.body);
obj.data?.INDEX_TOP_BANNER?.contents.forEach(item => {
  delete item.bubble; 
});
console.log(obj);
$done({body: JSON.stringify(obj)});
