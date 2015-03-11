/* Node module to read json data and  write sorted data(in descendind) to new .txt File.
 @author Nikhil */
 
var fs = require("fs");
fs.readFile("source.json", function(err, data) {
	var result = " Id | First Name | Last Name | Score ";
	if(err){
		console.log("File Not Found");		
	}
	else{
		if(IsJsonString(data)){
			var obj = JSON.parse(data);
			var sorted = sortArray(obj.students);
			for (var i = 0; i < sorted.length; i++) {
				result += "\n "+ sorted[i].id + " | " + sorted[i].fName + " | " + sorted[i].lName + " | " + sorted[i].score;
			}
			fs.writeFile("destinationFP2.txt", result);
			console.log("File destinationFP2.txt is created \n Data : \n" + result);
		}
	}
});
console.log("Reading data from file..!");

function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
    	console.log("Not a valid Json " + e);
        return false;
    }
    return true;
}

function sortArray(records) {
	for (var i = 1; i < records.length; i++){
		if(records[i].score > records[i-1].score){
			var temp = records[i];
			records[i] = records[i-1];
			records[i-1] = temp;
		}
	}
	return records;
}
