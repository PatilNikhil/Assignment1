/* Node module to read json data and  write it in new .txt file.
 @author Nikhil */

var fs = require("fs");
var dm = require("./dataManipulation");
//function of file system to read given file
fs.readFile("source.json", function(err, data) {
	var result = "First Name | Last Name | Score ";
	if(err){
		//printing error if file not found
		console.log("File Not Found");		
	}
	else{
		//checking valid json object
		if(dm.isJsonString(data)){
			var obj = JSON.parse(data);
			//concatinating data of each student 
			for (var i = 0; i < obj.students.length; i++) {
				result += "\n " + obj.students[i].fName + " | " + obj.students[i].lName + " | " + obj.students[i].score;
			}
			//writing final result to .txt file
			fs.writeFile("destinationFP1.txt", result);
			console.log("File destinationFP1.txt is created \n Data : \n" + result);
		}
	}
});
