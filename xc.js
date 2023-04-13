let obj=JSON.parse($response.body);
obj.data = Object.fromEntries(
  Object.entries(obj.data).filter(([key, value]) => (key === 'p2'))
);
$done({body: JSON.stringify(obj)});
