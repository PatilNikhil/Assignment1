// Writing data to XML format.
var fs = require("fs");
var xml = require("xml");
fs.readFile("source.json", function(err, data) {
	if(err){
		console.log("File Not Found");		
	}
	else{
		var obj = JSON.parse(data);
		var sorted = sortArray(obj.students);
		var result = '{ "Students": [';
		for (var i = 0; i < sorted.length; i++) {
			result += ' { "Student": [ { "_attr": { "Id": ' + sorted[i].id + '} },{ "Name": "' + sorted[i].fName + ' ' + sorted[i].lName + '"},{ "Score": "' + sorted[i].score + '"} ] }';
			if(i != sorted.length - 1)	
			{
				result += ',';
			}	
		}
		result += '] }';
		//console.log(xml(JSON.parse(result), true));
		fs.writeFile("destinationFP3 .xml", xml(JSON.parse(result), true));
		console.log("File is created for result..!");
	}
});
console.log("Reading data from file..!");

function sortArray(records) {
	for (var i = 1; i < records.length; i++){
		if(records[i].score > records[i-1].score){
			var temp = records[i];
			records[i] = records[i-1];
			records[i-1] = temp;
		}
	}
	//console.log(records);
	return records;
}