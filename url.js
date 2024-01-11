var url = requre("url");
var addr = "http://localhost:3010/default.htm?year=2017&month=febuary";
var q = url.parse(addr, true);

console.log(q.host); // returns localhost:3010
console.log(q.pathname); // returns '/default.htm
console.log(q.search); // returns '?year=2017&month=febuary'

var qdata = q.query; // returns an object: {year: 2017, month: 'febuary}
console.log(qdata.month);
console.log(qdata.year);
