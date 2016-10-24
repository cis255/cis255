var CSMajor = [
	{Prefix:"cs",courseNumber:"105"},
	{Prefix:"cs",courseNumber:"116"},
	{Prefix:"cs",courseNumber:"146"},
	{Prefix:"cs",courseNumber:"216"},
	{Prefix:"cs",courseNumber:"316"},
	{Prefix:"cs",courseNumber:"331"},
	{Prefix:"cs",courseNumber:"401"},
	{Prefix:"cs",courseNumber:"411"},
	{Prefix:"cs",courseNumber:"421"},
	{Prefix:"cs",courseNumber:"446"},
	{Prefix:"cs",courseNumber:"451"},
	{Prefix:"cs",courseNumber:"461"},
	{Prefix:"cs",courseNumber:"471"},
	{Prefix:"cis",courseNumber:"255"},
	{Prefix:"cis",courseNumber:"355"},
	{Prefix:"cis",courseNumber:"357"}
];
var CSElective = [
	{Prefix:"cis",courseNumber:"311"},
	{Prefix:"cs",courseNumber:"345"},
	{Prefix:"cs",courseNumber:"403"},
	{Prefix:"cs",courseNumber:"431"},
	{Prefix:"cs",courseNumber:"476"},
	{Prefix:"cs",courseNumber:"482"}
];
var CSGeneral = [
	{Prefix:"cs",courseNumber:"245"},
	{Prefix:"math",courseNumber:"161"},
	{Prefix:"math",courseNumber:"223"},
	{Prefix:"math",courseNumber:"300"},
	{Prefix:"comm",courseNumber:"105A"},
	{Prefix:"rpw",courseNumber:"304"},
	{Prefix:"phil",courseNumber:"205A!"},
	{Prefix:"phil",courseNumber:"201B"}
];
var CISMajor = [
	{Prefix:"cs",courseNumber:"105"},
	{Prefix:"cs",courseNumber:"116"},
	{Prefix:"cs",courseNumber:"146"},
	{Prefix:"cs",courseNumber:"216"},
	{Prefix:"cis",courseNumber:"255"},
	{Prefix:"cis",courseNumber:"301"},
	{Prefix:"cis",courseNumber:"311"},
	{Prefix:"cis",courseNumber:"333"},
	{Prefix:"cis",courseNumber:"355"},
	{Prefix:"cis",courseNumber:"366"},
	{Prefix:"cis",courseNumber:"386"},
	{Prefix:"cis",courseNumber:"422"},
	{Prefix:"cis",courseNumber:"424"}
];
var CISElective = [
	{Prefix:"cs",courseNumber:"345"},
	{Prefix:"cis",courseNumber:"357"},
	{Prefix:"cis",courseNumber:"371"},
	{Prefix:"cis",courseNumber:"425"},
	{Prefix:"cis",courseNumber:"486"},
	{Prefix:"cis",courseNumber:"490"}
];
var CISGeneral = [
	{Prefix:"cs",courseNumber:"245"},
	{Prefix:"math",courseNumber:"120B"},
	{Prefix:"comm",courseNumber:"105A"},
	{Prefix:"rpw",courseNumber:"304"},
	{Prefix:"acct",courseNumber:"213"},
	{Prefix:"econ",courseNumber:"221"},
	{Prefix:"law",courseNumber:"308"},
	{Prefix:"mgt",courseNumber:"321"},
	{Prefix:"mkt",courseNumber:"331"},
	{Prefix:"phil",courseNumber:"205A!"},
	{Prefix:"phil",courseNumber:"210B"}
];

/*function populateClasses()
{
	'use strict';
	var xmlhttp = new XMLHttpRequest();
	var url = "https://api.svsu.edu/courses";
	var newOption =- document.createElement("option");
	
	if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
	{
		var CourseList = JSON.parse(xmlhttp.responseText);
		
	}
	
}*/
function test() {
    document.getElementById("ListOfMajors").innerHTML = "";
    var l1 = document.createElement("option");
    var DisplayText = document.createTextNode("--Major Courses--");
    l1.setAttribute("disabled","disabled");
    l1.appendChild(DisplayText);
    document.getElementById("ListOfMajors").appendChild(l1);
}

function ListMajors()
{
    var i;
    document.getElementById("ListOfMajors").innerHTML = "";
    CreateOption("ListOfMajors", "disabled", "disabled", "--Major Courses--", true);
    var arr;
    
    if (document.getElementById("Major").value == "cs") {
        for (i = 0, arr = CSMajor; i < arr.length; i++) {
            CreateOption("ListOfMajors", "value", arr[i].Prefix + "-" + arr[i].courseNumber, arr[i].Prefix.toUpperCase() + "-" + arr[i].courseNumber, false);
        }
        CreateOption("ListOfMajors", "disabled", "disabled", "--Elective Courses--", false);
        for (i = 0, arr = CSElective; i < arr.length; i++) {
            CreateOption("ListOfMajors", "value", arr[i].Prefix + "-" + arr[i].courseNumber, arr[i].Prefix.toUpperCase() + "-" + arr[i].courseNumber, false);
        }
        CreateOption("ListOfMajors", "disabled", "disabled", "--General Courses--", false);
        for (i = 0, arr = CSGeneral; i < arr.length; i++) {
            CreateOption("ListOfMajors", "value", arr[i].Prefix + "-" + arr[i].courseNumber, arr[i].Prefix.toUpperCase() + "-" + arr[i].courseNumber, false);
        }
    }else if(document.getElementById("Major").value == "cis"){
        for (i = 0, arr = CISMajor; i < arr.length; i++) {
            CreateOption("ListOfMajors", "value", arr[i].Prefix + "-" + arr[i].courseNumber, arr[i].Prefix.toUpperCase() + "-" + arr[i].courseNumber, false);
        }
        CreateOption("ListOfMajors", "disabled", "disabled", "--Elective Courses--", false);
        for (i = 0, arr = CISElective; i < arr.length; i++) {
            CreateOption("ListOfMajors", "value", arr[i].Prefix + "-" + arr[i].courseNumber, arr[i].Prefix.toUpperCase() + "-" + arr[i].courseNumber, false);
        }
        CreateOption("ListOfMajors", "disabled", "disabled", "--General Courses--", false);
        for (i = 0, arr = CISGeneral; i < arr.length; i++) {
            CreateOption("ListOfMajors", "value", arr[i].Prefix + "-" + arr[i].courseNumber, arr[i].Prefix.toUpperCase() + "-" + arr[i].courseNumber, false);
        }
    }
}

function CreateOption(id, attribute, attributeValue, textNode, selected)
{
    var option = document.createElement("option");
    var DisplayText = document.createTextNode(textNode);
    option.setAttribute(attribute, attributeValue);
    if (selected) {
        option.setAttribute("selected", "selected");
    }
    option.appendChild(DisplayText);
    document.getElementById(id).appendChild(option);
}
 
function AddCourse(type) {
    if (type == 'Major') {
        var selection = document.getElementById("ListOfMajors").value;
        AddToLists('MajorList', selection);
    } else if (type == 'NonMajor') {
        var selection = document.getElementById("Non-Majors").value.toUpperCase();
        AddToLists('NonMajorList', selection);
    }
}
function AddToLists(List, course) {
    var addCheck = document.createElement("input");
    addCheck.setAttribute("type", "Checkbox");
    addCheck.setAttribute("id", "Major-" + course);
    var text = document.createTextNode(" "+course.toUpperCase());
    var addText = document.createElement("p");
    addText.appendChild(addCheck);
    addText.appendChild(text);
    document.getElementById(List).appendChild(addText);
}