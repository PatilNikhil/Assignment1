// Writing data to File.
var fs = require("fs");
fs.readFile("source.json", function(err, data) {
	var result = "First Name | Last Name | Score ";
	if(err){
		console.log("File Not Found");		
	}
	else{
		var obj = JSON.parse(data);
		for (var i = 0; i < obj.students.length; i++) {
			result += "\n " + obj.students[i].fName + " | " + obj.students[i].lName + " | " + obj.students[i].score;
		}
		fs.writeFile("destinationFP1.txt", result);
		console.log("File is created for result..!")
	}
});