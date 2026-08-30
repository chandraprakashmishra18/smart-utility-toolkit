// Custom module to log messages with a timestamp
function logger(message) {
  var time = new Date().toLocaleTimeString();
  console.log("[" + time + "] " + message);
}
module.exports = logger;
 