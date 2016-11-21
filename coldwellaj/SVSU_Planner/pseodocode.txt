// create array A and B to hold courses
var A = []; // Holds courses needed
var B = []; // Holds courses not Available
var C = []; // Holds courses to remove from B

// pre load options
var x = document.getElementById("N");
selectAvailable("https://api.svsu.edu/courses?prefix=CIS&term=17/\WI");
selectAvailable("https://api.svsu.edu/courses?prefix=CS&term=17/\WI");
selectAvailable("https://api.svsu.edu/courses?prefix=MATH&term=17/\WI");

// loadCS: Sets page up for CS
// majors
function loadCS(){
A = ["MATH140","MATH103","CS105","CS146","CS116",
"MATH120A","CS245","CIS255","CS216","MATH300",
"CIS355","CIS357","CS411","CS331","CS446","CS401",
"CS451","CS421","CS471"];
B = ["MATH140","MATH103","CS105","CS146","CS116",
"MATH120A","CS245","CIS255","CS216","MATH300",
"CIS355","CIS357","CS411","CS331","CS446","CS401",
"CS451","CS421","CS471"];
document.getElementById("course map").src = "CS Map.png";
document.getElementById("N").innerHTML = stringify(A);
document.getElementById("NA").innerHTML = stringifyExcept(B,C);
}

// loadCIS: Sets page up for CS
// majors
function loadCIS(){
A = ["MATH103","CS105","CS116","CS146",
"MATH120B","CS245","CIS255","CS216","CIS301",
"CIS311","CIS333","CIS355","CIS366","CIS386",
"CIS422","CIS424"];
B = ["MATH103","CS105","CS116","CS146",
"MATH120B","CS245","CIS255","CS216","CIS301",
"CIS311","CIS333","CIS355","CIS366","CIS386",
"CIS422","CIS424"];
document.getElementById("course map").src = "CIS Map.png";
document.getElementById("N").innerHTML = stringify(A);
document.getElementById("NA").innerHTML = stringifyExcept(B,C);
}

// stringifyExcept: Make an array into one string
// except for the ones in T. Method partialy coded
// by George Corser, modified by Alex Coldwell
function stringifyExcept(A,T) {
	var x = "";
	for(var i = 0; i<T.length; i++){
		for(var y = 0; y<A.length; y++){
			if(T[i] == A[y]){
				A.splice(y,1);
			}
		}
	}
	A = A.toString();
	A = A.trim();
	A = A.split(",");
	for(var i = 0; i<A.length; i++) {
		x = x + A[i] + " ";
	}
	return x.trim();
}

// stringify: Make an array into one string
// Method partialy coded by George Corser
function stringify (A) {
	var x = "";
	for(var i = 0; i<A.length; i++) {
		x =x + " " + A[i];
	}
	return x.trim();
}

// showNeeded: returns elements in A that are
// not in array T
function showNeeded(A) {
	var input = document.getElementById("T").value;
	var T = input.split(" ");
	document.getElementById("N").innerHTML = stringifyExcept(A,T);
}

<!-- Section to populate the select for courses available -->

// selectAvailable: takes the URL and populates the available 
// CS or CIS courses depending on your major and places them 
// in array C. Method partialy coded by George Corser, modified
// by Alex Coldwell
function selectAvailable(url){
	var xmlhttp = new XMLHttpRequest();
	console.log(url);
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var myArr = JSON.parse(xmlhttp.responseText);
			console.log(myArr);
			myFunction(myArr);
		}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}
	
function myFunction(arr) {
	var out = "";
	var i;
	for(i = 0; i < arr.courses.length; i++) {
		var newP = document.createElement("option");
		newP.setAttribute("value", i);
		var newText 
			= document.createTextNode(arr.courses[i].prefix + " " 
			+ arr.courses[i].courseNumber + " " 
			+ arr.courses[i].term + " " 
			+ arr.courses[i].meetingTimes[0].days + " " 
			+ arr.courses[i].meetingTimes[0].startTime + " " 
			+ arr.courses[i].status + " "
			+ arr.courses[i].meetingTimes[0].instructor);
		if (arr.courses[i].prefix == "MATH"){
			if(arr.courses[i].courseNumber == "140" ||
			arr.courses[i].courseNumber == "120A" ||
			arr.courses[i].courseNumber == "103" ||
			arr.courses[i].courseNumber == "300" ||
			arr.courses[i].courseNumber == "120B" ){
				if(arr.courses[i].status == "Open"){
					document.getElementById("id02").appendChild(newP);
					newP.appendChild(newText);
					C.push(arr.courses[i].prefix+arr.courses[i].courseNumber); 
					console.log(C);
				}
			}
		}
		else {
		if(arr.courses[i].status == "Open"){
				document.getElementById("id02").appendChild(newP);
				newP.appendChild(newText);
				C.push(arr.courses[i].prefix+arr.courses[i].courseNumber); 
				console.log(C);
			}
		}
	}
}



// del : Takes the prefix and the courseNumber of an
// available course and removes it from the unavailable list B
function del(pre, num){	
	var hold = pre+num;
	for(var i = 0; i<B.length; i++){
		if(hold == B[i]){
			B.splice(i,1);
		}
	}
}
