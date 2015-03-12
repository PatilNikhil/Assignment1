/* Node module to read json data and  write sorted data(in descendind) in XML format.
 @author Nikhil */ 

var fs = require("fs");
var xml = require("xml");
var dm = require("./dataManipulation");
//function of file system to read given file
fs.readFile("source.json", function(err, data) {
	if(err){
		//printing error if file not found
		console.log("File Not Found");		
	}
	else{
		//checking valid json object
		if(dm.isJsonString(data)){
			var obj = JSON.parse(data);
			//calling sortArray for sorting records
			var sorted = dm.sortArray(obj.students);
			//creating string of json object
			var result = '{ "Students": [';
			//concatinating data of each student 
			for (var i = 0; i < sorted.length; i++) {
				result += ' { "Student": [ { "_attr": { "Id": ' + sorted[i].id + '} },{ "Name": "' + sorted[i].fName + ' ' + sorted[i].lName + '"},{ "Score": "' + sorted[i].score + '"} ] }';
				//concatinating "," upto second last record
				if(i != sorted.length - 1)	
				{
					result += ',';
				}	
			}
			result += '] }';
			//parsing json sting & passing to Xml() to create xml of object and writing to .xml file
			fs.writeFile("destinationFP3 .xml", xml(JSON.parse(result), true));
			console.log("File destinationFP3.xml is created \n Data : \n" + xml(JSON.parse(result), true));
		}
	}
});
console.log("Reading data from file..!");
