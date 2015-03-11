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


/**
Review FeedBack : 

1.Please Mention at the top in multiline comment what is this file is for and auther name as well
e.g. Node Module to read json from file
	@author Satish

2.File name should not be like readFP1 it shouldbe like e.g readJsonFile

3.Cosole Loggers should be in this format 
e.g. console.log("[filename] >> [FunctionName] >> param : " + text);
In that way you can debug easily

4.At Line 9 you need handle case what if JSON.parse input is not a valid json string then it will genrate runtime error

I added this comment in one file please implement in that in other file as well 

*/