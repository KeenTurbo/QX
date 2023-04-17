let obj=JSON.parse($response.body);
delete obj.data.config.props;
$done({body: JSON.stringify(obj)});
