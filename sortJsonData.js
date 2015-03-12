/* Node module to read json data and  write sorted data(in descendind) to new .txt File.
 @author Nikhil */

var fs = require("fs");
var dm = require("./dataManipulation");
//function of file system to read given file
fs.readFile("source.json", function(err, data) {
	var result = " Id | First Name | Last Name | Score ";
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
			//concatinating data of each student 
			for (var i = 0; i < sorted.length; i++) {
				result += "\n "+ sorted[i].id + " | " + sorted[i].fName + " | " + sorted[i].lName + " | " + sorted[i].score;
			}
			//writing final result to .txt file
			fs.writeFile("destinationFP2.txt", result);
			console.log("File destinationFP2.txt is created \n Data : \n" + result);
		}
	}
});
console.log("Reading data from file..!");
