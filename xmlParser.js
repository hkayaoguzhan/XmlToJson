const fs = require("fs");
const util = require("util");
const xml2js = require("xml2js");

 
var xml = fs.readFileSync("random.xml", "utf-8");

function testXmlParse(xml) {
  var parser = new xml2js.Parser({ explicitArray: false, explicitRoot: false });

  parser.parseString(xml, (err, result) => {
    if (err) {
      console.error("Something wrong: ", err);
    } else {
      var lastJson = util.inspect(result, false, null, true);
      console.log(lastJson);
    }
  });
}

testXmlParse(xml);
 

