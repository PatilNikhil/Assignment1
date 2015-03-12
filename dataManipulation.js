/* Node Module which contains 2 functions.
   1) which checks given object is valid Json object or not.
   2) which sorts the given array of students in to descending order of score.
@author Nikhil */

//function to validate Json object
function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
    	console.log("Not a valid Json " + e);
        return false;
    }
    return true;
}

//Function to sort given array of students in to descending order of score.
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

exports.isJsonString = isJsonString;
exports.sortArray = sortArray;