let obj=JSON.parse($response.body);
obj.data.objects.forEach(item => {
 item.imageUrl="https://raw.githubusercontent.com/jizhi0520/QX/main/warm%20water.png";;
});
$done({body: JSON.stringify(obj)});
