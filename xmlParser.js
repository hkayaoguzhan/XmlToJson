
var parser = require('fast-xml-parser');
var he = require('he');
var fs = require("fs");
var util = require("util");

var xml = fs.readFileSync("random.xml", "utf-8")

var options = {
    attributeNamePrefix : "@_",
    attrNodeName: "attr", 
    textNodeName : "#text",
    ignoreAttributes : true,
    ignoreNameSpace : false,
    allowBooleanAttributes : false,
    parseNodeValue : true,
    parseAttributeValue : false,
    trimValues: true,
    cdataTagName: "__cdata", //default is 'false'
    cdataPositionChar: "\\c",
    parseTrueNumberOnly: false,
    arrayMode: false, //"strict"
    attrValueProcessor: (val, attrName) => he.decode(val, {isAttributeValue: true}),
    tagValueProcessor : (val, tagName) => he.decode(val), 
    stopNodes: ["parse-me-as-string"]
};

if( parser.validate(xml) === true) { 
    var jsonObj = parser.parse(xml,options);
}

var tObj = parser.getTraversalObj(xml,options);
var jsonObj = (parser.convertToJson(tObj,options));
var last = util.inspect(jsonObj, false, null, true);

console.log(last)