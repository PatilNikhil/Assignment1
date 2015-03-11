/* Node Module to read json from file and write it to new .txt file  
 @author Nikhil */
 
var fs = require("fs");
fs.readFile("source.json", function(err, data) {
	var result = "First Name | Last Name | Score ";
	if(err){
		console.log("File Not Found");		
	}
	else{
		if(IsJsonString(data)){
			var obj = JSON.parse(data);
			
			for (var i = 0; i < obj.students.length; i++) {
				result += "\n " + obj.students[i].fName + " | " + obj.students[i].lName + " | " + obj.students[i].score;
			}
			fs.writeFile("destinationFP1.txt", result);
			console.log("File destinationFP1.txt is created \n Data : " + result);
		}
	}
});
function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
    	console.log("Not a valid Json " + e);
        return false;
    }
    return true;
}
