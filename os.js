var os = require("os");

console.log("OS CPU architecture: " + os.arch());
console.log("Free memory of the system: " + os.totalmem());
console.log("OS Platform: " + os.platform());
console.log("Information about the current user: " + os.userInfo().username);
console.log("OS type: " + os.type());
console.log("Current directory: " + os.homedir());
console.log("Uptime: " + os.uptime());
console.log("Hostname: " + os.hostname());
