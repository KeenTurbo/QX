let obj=JSON.parse($response.body);
body.data.sections = body.data.sections.filter(item => ["center_v2", "head_v2", "member", "core_function"].includes(item.sectionId));$done({body: JSON.stringify(obj)});
