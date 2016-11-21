
//Javascript 

/*Javascript Pseudocode:
	-----------
	declare and initialize arrays, URL string to utilize, XML Request
	call courseChange()
	
	courseChange() function:
		clear courses needed output
		if(radio button checked: CS)
			courseList = CSCourses
			change URL used to show courses with prefix "CS"
		else	
			courseList = CISCourses
			change URL used to show courses with prefix "CIS"
		
	isIn() function:
		for(0 to courseList.length())
			if (courseList[i] == input) return i
		return -1
	
	showNeeded function:
		add input data into new array
		if (radio button checked: CS)
			input data = isIn()
			if input == -1
					print entire array of CS courses needed: stringify()
			else
					print entire array - input data of CS courses needed: stringifyExcept()
		else
			input data = isIn()
			if input == -1
					print entire array of CIS courses needed: stringify()
			else
					print entire array - input data of CIS courses needed: stringifyExcept()
	
	stringify() function:
		for(0 to courseList.length())
		input = prior input + " " + input
	
	stringifyExcept() function:
		for(0 to courseList.length())
		if (input doesn't equal the array data) 
			input = prior input + " " + input 
*/
			
	
			// create array, courses, list of all courses needed for a CIS  or CS student
			var courseList = [];
			var CSCourses = ["MATH120B","CS245","COMM105A","RPW304","MATH161","CS105","CS116",
							"CS146","CS245","MATH223","MATH300","CS216","CIS255","CS316",
							"CS331","CIS355","CIS357","CS401","CS411","CS421","CS446","CS451",
							"CS461","CS471"];
			var CISCourses = ["MATH120B","CS245","COMM105A","RPW304","MATH120B","CS105","CS116",
							"CS146","CS216","CIS255","CIS301","CIS311","CIS333","CIS355",
							"CIS366","CIS386","CIS422","CIS424"];
						
			CSCourses = CSCourses.sort();
			CISCourses = CISCourses.sort();
			
			function courseChange () {
				
				var select = document.getElementById("available");
					select.innerHTML = "";
					select = document.getElementById("notAvailable");
					select.innerHTML = "";
					document.getElementById("N").value = "";
					if(document.getElementById("CS").checked)
					{
						courseList = CSCourses;
						var xmlhttp = new XMLHttpRequest();
						var url = "https://api.svsu.edu/courses?prefix=CS&term=17\/WI";

						xmlhttp.onreadystatechange = function() {
							if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
								var myArr = JSON.parse(xmlhttp.responseText);
								myFunction(myArr);
							}
						};
						xmlhttp.open("GET", url, true);
						xmlhttp.send();
						
						myFunction(courseList);
					}
					else
					{
						courseList = CISCourses;
						url = "https://api.svsu.edu/courses?prefix=CIS";
						var xmlhttp = new XMLHttpRequest();
						var url = "https://api.svsu.edu/courses?prefix=CIS&term=17\/WI";

						xmlhttp.onreadystatechange = function() {
							if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
								var myArr = JSON.parse(xmlhttp.responseText);
								myFunction(myArr);
							}
						};
						xmlhttp.open("GET", url, true);
						xmlhttp.send();
						
						myFunction(courseList);
	
					}
				
			}
			
			// make an array into one string
			function stringifyExcept (a, n)	{
				var x = "";
				for(var i =0; i < a.length; i++)	{
					if (i != n) x = x + " " + a[i];
				}
				return x.trim();
			}
			
			// make an array into one string
			function stringify (a)	{
				var x = "";
				for(var i =0; i < a.length; i++)	{
					x = x + " " + a[i];
				}
				return x.trim();
			}
			
			// returns index number of e in courses or -1 if not found
			function isIn (a, e)	{
				for(var i =0; i < a.length; i++)	{
					if (a[i] == e) return i;
				}
				return -1;
			}
			
			// returns elements in array, courses, that are not in array, T
			function showNeeded(courseList)	{
				var T = document.getElementById("T").value;
				T = new Array(T);
				if (document.getElementById("CS").checked)
					{
						var x = isIn(CSCourses, T[0]);
						if (x == -1) {
							document.getElementById("N").value = stringify(CSCourses);
						}
						else {
							document.getElementById("N").value = stringifyExcept(CSCourses, x);
						}
					}
				else
					{
						var x = isIn(CISCourses, T[0]);
						if (x == -1) {
							document.getElementById("N").value = stringify(CISCourses);
						}
						else {
							document.getElementById("N").value = stringifyExcept(CISCourses, x);
						}
					}
			}
			
			<!-- javascript solution: creates new COURSE elements with attributes -->
			var xmlhttp = new XMLHttpRequest();
			var url = "https://api.svsu.edu/courses?prefix=CS&term=17\/WI";

			xmlhttp.onreadystatechange = function() {
				if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
					var myArr = JSON.parse(xmlhttp.responseText);
					myFunction(myArr);
				}
			};
			xmlhttp.open("GET", url, true);
			xmlhttp.send();

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
						+ arr.courses[i].meetingTimes[0].instructor + " "
						+ arr.courses[i].location + " "
						+ arr.courses[i].status); 
					if(arr.courses[i].status == "Clsd")
						{	
							document.getElementById("notAvailable").appendChild(newP);
							newP.appendChild(newText);
						}
					else
						{
							document.getElementById("available").appendChild(newP);
							newP.appendChild(newText);
						}
				}
			}