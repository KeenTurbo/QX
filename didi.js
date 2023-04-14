let obj=JSON.parse($response.body);
obj.data.sections.forEach((item) => {
  if (!(item.sectionId==="center_v2"  item.sectionId==="head_v2"  item.sectionId==="member" || item.sectionId==="core_function")){
  delete item;
  }
});
$done({body: JSON.stringify(obj)});
