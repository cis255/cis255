//-------------------------------------------------------------------------------
//-                File Name : coursePlanner.js          				        - 
//-                Part of Project: Program2               					    -
//-------------------------------------------------------------------------------
//'-                Written By: Tyler Miller                  					-
//'-                Written On: 11/3/2016                     					-	
//'------------------------------------------------------------------------------
//'- Program Purpose:                                         					-
//'- This file contains the javascript program that is run to 					-
//'- find the courses a student needs to take in the CS or    					-
//'- or CIS degree. It uses their previosly taken classes to  					-
//'- determine the correct classes to take.                   					-
//'------------------------------------------------------------------------------
//'- Global Variable Dictionary (alphabetically):           				    -
//'- CIS - array containing ordered CIS classes								    -
//'- courseArr - array that will be used to find students cls 					-
//'- CS - array that contains ordered CS classes              					-
//'- highestCourse - uses user's input to determine highest class user has taken-
//'- url - string that holds the url to find CS or CIS classes                  -
//'- xmlhttp - contains new XMLHttpRequest for JSON object                      -
//'------------------------------------------------------------------------------

// Pseudocode:
//-------------------------------------------------------------------------------
// !! main script		
// initialize course arrays, URL string, integer values and XML request
// call checkCSIS();
//
// !! checkCSIS function
// clear coursesNeeded ouput
// clear dropdown menus
// if(radioCS.checked)
// 	courseArray = CS_classes;
//	pageImage = CSflow.png;
//	fillDropdown(CSURL);
// else
// 	courseArray = CIS_classes;
//      pageImage = CISflow.png;
//	fillDropdown(CISURL);
//
// !! isIn function
// for(0 to courseArray.length)
// 	if(currentClass == takenClass)
//		return currentClass
// otherwise return -1	
//
// !! showNeeded function
// initialize inputValue of taken courses and highestCourse
// coursesTaken = newArray from input
// for(0 to coursesTaken.length)
// 	currPosition = isIn(courseArray, coursesTaken[currentCourse]) 
//	if(currPosition > highestCourse)
//	    highestCourse = currPosition
// if (highestCourse != 0)
// 	call stringifyExcept()
// else
//	call stringify()
//
// !! stringify() 
// initialize x
// output all courses needed to take to output section
//
// !! stringifyExcept() 
// initialize x
// output all courses not taken from CS or CIS array
//
// !! fillDropdown()
//if(XML connection is valid)
// 	newArray = CSURLJSON or CISURLJSON
//	call getCourses
//
// !! getCourses()
// for(length of passedXMLArray)
//	create new dropdown element
//	that contains courseNum, term, meeting times, location, and status
// if(status is closed)
//	put in notAvail dropdown
// else
//	put in avail dropdown
//


//Declaring gloabal variables used throughout the program
var courseArr = [];
var CS = ["MATH120B","CS245","COMM105A","RPW304","MATH161","CS105","CS116",
			"CS146","CS245","MATH223","MATH300","CS216","CIS255","CS316",
			"CS331","CIS355","CIS357","CS401","CS411","CS421","CS446","CS451",
			"CS461","CS471"];
var CIS = ["MATH120B","CS245","COMM105A","RPW304","MATH120B","CS105","CS116",
			"CS146","CS216","CIS255","CIS301","CIS311","CIS333","CIS355",
			"CIS366","CIS386","CIS422","CIS424"];
var url = "";
var highestCourse = 0;
var xmlhttp = new XMLHttpRequest();

//initial check to see which option is checked to show correct ouput
checkCSIS();

function checkCSIS()
//'------------------------------------------------------------
//'-                Function Name: checkCSIS
//'------------------------------------------------------------
//'-                Written By: Tyler Miller
//'-                Written On: 11/5/2016
//'------------------------------------------------------------
//'- Function Purpose:                                       
//'-                                                          
//'- This subroutine is called whenever the user clicks the   
//'- CS or CIS radio button. It is also run to when the program
//'- initializes. It will clear the dropdown menus as well as 
//'- make sure to select the proper course arrays, show the proper
//'- course flow diagram and call the fillDropDown menu.      
//'-----------------------------------------------------------
//'- Parameter Dictionary (in parameter order):               
//'- (none)                                                        
//'-----------------------------------------------------------
//'- Local Variable Dictionary (alphabetically):              
//'- selectBox - temp dropdown to clear HTML dropdown menu
//'------------------------------------------------------------
{
	var selectBox = document.getElementById("avail");
	selectBox.innerHTML = "";
	selectBox = document.getElementById("notAvail");
	selectBox.innerHTML = "";
	document.getElementById("outNeeded").value = "";
	if(document.getElementById("radCS").checked)
	{
		courseArr = CS;
		document.getElementById("imgSchedule").innerHTML = 
		'<br/><center><a href="http://svsu-csis.weebly.com/uploads/3/5/8/4/3584226/9290686_orig.png"><img src="img/csplan.png" style="width: 80%;" /></a></center>';
		url = "https://api.svsu.edu/courses?prefix=CS";
		fillDropdown(url);		
	}
	else
	{
		courseArr = CIS;
		document.getElementById("imgSchedule").innerHTML = 
		'<br/><center><a href="http://svsu-csis.weebly.com/uploads/3/5/8/4/3584226/5127466_orig.png"><img src="img/cisplan.png" style="width: 80%;" /></a></center>';
		url = "https://api.svsu.edu/courses?prefix=CIS";
		fillDropdown(url);
	}
}

//returns index number of e in courseArr or -1 if not found
function isIn(courseArr, takenClass)
//'------------------------------------------------------------
//'-                Function Name: isIn(arr,str)   
//'------------------------------------------------------------
//'-                Written By: Corser and Tyler Miller
//'-                Written On: 11/5/2016
//'------------------------------------------------------------
//'- Function Purpose:                                       
//'-                                                          
//'- This function is called to find to see if the user's   
//'- inputted class is in the CS or CIS class lists. If it is, 
//'- it returns the position of where the class is located in 
//'- the array, else, it returns -1                                 
//'-----------------------------------------------------------
//'- Parameter Dictionary (in parameter order):               
//'- courseArr - either CIS or CS array with all classes loaded
//'- takenClass - class from user's class array to search for
//'-----------------------------------------------------------
//'- Local Variable Dictionary (alphabetically):              
//'- i = integer counter 
//'------------------------------------------------------------
{
	for(var i = 0; i < courseArr.length; i++)
	{
		if( courseArr[i] == takenClass) 
			return i;
	}
	return -1;
}

function showNeeded(courseArr)
//'------------------------------------------------------------
//'-                Function Name: showNeeded(arr)
//'------------------------------------------------------------
//'-                Written By: Corser and Tyler Miller
//'-                Written On: 11/5/2016
//'------------------------------------------------------------
//'- Function Purpose:                                       
//'-                                                          
//'- This function is called whenver the user clicks the      
//'- Show Courses Needed button to figure out the classes that 
//'- they still need to take in the CS or CIS cirriculum before
//'- they can graduate. It will display them in the Courses
//'- Needed section.
//'-----------------------------------------------------------
//'- Parameter Dictionary (in parameter order):               
//'- courseArr - either CIS or CS array with all classes loaded
//'-----------------------------------------------------------
//'- Local Variable Dictionary (alphabetically):              
//'- inTaken - string input that contains classes from user
//'- coursesTaken - array made from inTaken string
//'------------------------------------------------------------
{
	var inTaken = document.getElementById("inTaken").value;
	inTaken = inTaken.toUpperCase();
	console.log(inTaken);
	var coursesTaken = inTaken.split(" ");
	
	console.log(coursesTaken);
	coursesTaken.sort();
	highestCourse = 0;	
	for(var i = 0; i < coursesTaken.length; i++)
	{
		var currPos = isIn(courseArr, coursesTaken[i])
		if(currPos > highestCourse)
			highestCourse = currPos;
	}
	
	//just a check to see highest position in array
	console.log("Highest Course Pos: " + highestCourse);
	
	if (highestCourse <= 0)
		document.getElementById("outNeeded").value = 
		stringify(courseArr);
	else
		document.getElementById("outNeeded").value = 
		stringifyExcept(courseArr, highestCourse);
}

function stringify(courseArr)
//'------------------------------------------------------------
//'-                Function Name: stringify(arr)
//'------------------------------------------------------------
//'-                Written By: Corser and Tyler Miller
//'-                Written On: 11/5/2016
//'------------------------------------------------------------
//'- Function Purpose:                                       
//'-                                                          
//'- This function is called when there are no classes taken  
//'- that match the classes in the selected array. It will print
//'- the entire contents of the CS or CIS array
//'-----------------------------------------------------------
//'- Parameter Dictionary (in parameter order):               
//'- courseArr - either CIS or CS array with all classes loaded
//'-----------------------------------------------------------
//'- Local Variable Dictionary (alphabetically):              
//'- x - string that contains the courses the student must take
//'------------------------------------------------------------
{
	var x= "";
	for(var i = 0; i < courseArr.length; i++)
	{
		if(i == 0)
			x = courseArr[i];
		else
			x = x + " + " + courseArr[i];
	}
	return x.trim();
}
function stringifyExcept(courseArr, classPos)
//'------------------------------------------------------------
//'-                Function Name: stringifyExcept(arr, int)
//'------------------------------------------------------------
//'-                Written By: Corser and Tyler Miller
//'-                Written On: 11/5/2016
//'------------------------------------------------------------
//'- Function Purpose:                                       
//'-                                                          
//'- This function is called when there are no classes taken  
//'- that match the classes in the selected array. It will print
//'- the entire contents of the CS or CIS array
//'-----------------------------------------------------------
//'- Parameter Dictionary (in parameter order):               
//'- courseArr - either CIS or CS array with all classes loaded
//'- classPos - input from position of highest class taken
//'-----------------------------------------------------------
//'- Local Variable Dictionary (alphabetically):              
//'- x - string that contains the courses the student must take
//'------------------------------------------------------------
{
	var x= "";
	var counter = 0;
	for(var i = 0; i < courseArr.length; i++)
	{
		if(i > classPos) 
		{
			if(counter == 0)
				x = courseArr[i];
			else
				x = x + " + " + courseArr[i];
			counter++;
		}
	}
	return x.trim();
}

function fillDropdown(url)
//'------------------------------------------------------------
//'-                Function Name: fillDropdown(str)        
//'------------------------------------------------------------
//'-                Written By: Corser and Tyler Miller
//'-                Written On: 11/5/2016
//'------------------------------------------------------------
//'- Function Purpose:                                       
//'-                                                          
//'- This function is called to get a JSON object in order to fill
//'- the dropdown menus in order to show the available and      
//'- unavailable CS and CIS classes              
//'-----------------------------------------------------------
//'- Parameter Dictionary (in parameter order):               
//'- url - string that contains URL for XML response/JSON obj  
//'-----------------------------------------------------------
//'- Local Variable Dictionary (alphabetically):              
//'- (none)
//'------------------------------------------------------------
{
	xmlhttp.onreadystatechange = function() 
	{
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
		{
			var myArr = JSON.parse(xmlhttp.responseText);
			getCourses(myArr);
		}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}


function getCourses(arr) 
//'------------------------------------------------------------
//'-                Function Name: getCourses(arr)          
//'------------------------------------------------------------
//'-                Written By: Corser and Tyler Miller
//'-                Written On: 11/5/2016
//'------------------------------------------------------------
//'- Function Purpose:                                       
//'-                                                          
//'- This function is to create a new attribute in the dropdown   
//'- menus that contains contents from the XML/JSON object     
//'- created from the SVSU API site             
//'-----------------------------------------------------------
//'- Parameter Dictionary (in parameter order):               
//'- arr - array from the JSON obj                             
//'-----------------------------------------------------------
//'- Local Variable Dictionary (alphabetically):              
//'- i - counter/pos integer
//'------------------------------------------------------------
{
	var i;
	for(i = 0; i < arr.courses.length; i++) 
	{
		var newP = document.createElement("option");
		newP.setAttribute("value", i);
		var newText 
			= document.createTextNode(arr.courses[i].prefix + " " 
				+ arr.courses[i].courseNumber + " | " 
				+ arr.courses[i].term + " | " 
				+ arr.courses[i].meetingTimes[0].days + " - " 
				+ arr.courses[i].meetingTimes[0].startTime + " | " 
				+ arr.courses[i].instructors[0].name + " | "
				+ arr.courses[i].location + " | "
				+ arr.courses[i].status); 
		if(arr.courses[i].status == "Clsd")
		{	
			document.getElementById("notAvail").appendChild(newP);
			newP.appendChild(newText);
		}
		else
		{
			document.getElementById("avail").appendChild(newP);
			newP.appendChild(newText);
		}
	}	
}