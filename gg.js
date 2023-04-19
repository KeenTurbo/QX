let obj = JSON.parse($response.body);
obj.data.actionPointList = JSON.stringify(JSON.parse(obj.data.actionPointList).filter(item => !item.pointCode.includes("homeNews")));
