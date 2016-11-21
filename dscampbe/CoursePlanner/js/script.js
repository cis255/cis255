// JavaScript Document

var CSMajor = [
    { prefix: "CS", courseNumber: "105", PreReq: [""] },
    { prefix: "CS", courseNumber: "116", PreReq: [{ prefix: "CS", courseNumber: "105" }] },
    { prefix: "CS", courseNumber: "146", PreReq: [{ prefix: "CS", courseNumber: "105" }] },
    { prefix: "CS", courseNumber: "216", PreReq: [{ prefix: "CS", courseNumber: "116" }] },
    { prefix: "CS", courseNumber: "316", PreReq: [{ prefix: "CS", courseNumber: "216" }] },
    { prefix: "CS", courseNumber: "331", PreReq: [{ prefix: "CS", courseNumber: "216" }] },
    { prefix: "CS", courseNumber: "401", PreReq: [{ prefix: "CS", courseNumber: "331" }] },
    { prefix: "CS", courseNumber: "411", PreReq: [{ prefix: "CS", courseNumber: "216" }] },
    { prefix: "CS", courseNumber: "421", PreReq: [{ prefix: "CIS", courseNumber: "355" }, { prefix: "CS", courseNumber: "357" }, { prefix: "CS", courseNumber: "401" }, { prefix: "CS", courseNumber: "411" }] },
    { prefix: "CS", courseNumber: "446", PreReq: [{ prefix: "CS", courseNumber: "331" }] },
    { prefix: "CS", courseNumber: "451", PreReq: [{ prefix: "CS", courseNumber: "316" }] },
    { prefix: "CS", courseNumber: "461", PreReq: [{ prefix: "CS", courseNumber: "316" }] },
    { prefix: "CS", courseNumber: "471", PreReq: [{ prefix: "CS", courseNumber: "421" }] },
    { prefix: "CIS", courseNumber: "255", PreReq: [{ prefix: "CS", courseNumber: "116" }] },
    { prefix: "CIS", courseNumber: "355", PreReq: [{ prefix: "CS", courseNumber: "216" }, { prefix: "CS", courseNumber: "255" }] },
    { prefix: "CIS", courseNumber: "357", PreReq: [{ prefix: "CS", courseNumber: "216" }] }
];
var CSElective = [
    { prefix: "CIS", courseNumber: "311", PreReq: [{ prefix: "CS", courseNumber: "216" }, { prefix: "CS", courseNumber: "146" }] },
    { prefix: "CS", courseNumber: "345", PreReq: [{ prefix: "CS", courseNumber: "216" }] },
    { prefix: "CS", courseNumber: "403", PreReq: [{ prefix: "CS", courseNumber: "316" }] },
    { prefix: "CS", courseNumber: "431", PreReq: [{ prefix: "CS", courseNumber: "331" }] },
    { prefix: "CS", courseNumber: "476", PreReq: [{ prefix: "CS", courseNumber: "316" }] },
    { prefix: "CS", courseNumber: "482", PreReq: [{ prefix: "CS", courseNumber: "216" }] }
];
/*var CSGeneral = [
    { prefix: "CS", courseNumber: "245", PreReq: [""] },
    { prefix: "MATH", courseNumber: "161", PreReq: [] },
    { prefix: "MATH", courseNumber: "223", PreReq: [] },
    { prefix: "MATH", courseNumber: "300", PreReq: [] },
    { prefix: "COMM", courseNumber: "105A", PreReq: [] },
    { prefix: "RPW", courseNumber: "304", PreReq: [] },
    { prefix: "PHIL", courseNumber: "205A!", PreReq: [] },
    { prefix: "PHIL", courseNumber: "201B", PreReq: [] }
];*/
var CISMajor = [
    { prefix: "CS", courseNumber: "105", PreReq: [""] },
    { prefix: "CS", courseNumber: "116", PreReq: [{ prefix: "CS", courseNumber: "105" }] },
    { prefix: "CS", courseNumber: "146", PreReq: [{ prefix: "CS", courseNumber: "105" }] },
    { prefix: "CS", courseNumber: "216", PreReq: [{ prefix: "CS", courseNumber: "116" }] },
    { prefix: "CIS", courseNumber: "255", PreReq: [{ prefix: "CS", courseNumber: "116" }] },
    { prefix: "CIS", courseNumber: "301", PreReq: [{ prefix: "CS", courseNumber: "146" }, { prefix: "CS", courseNumber: "216" }, { prefix: "CS", courseNumber: "245" }] },
    { prefix: "CIS", courseNumber: "311", PreReq: [{ prefix: "CS", courseNumber: "216" }, { prefix: "CS", courseNumber: "146" }] },
    { prefix: "CIS", courseNumber: "333", PreReq: [{ prefix: "CS", courseNumber: "216" }] },
    { prefix: "CIS", courseNumber: "355", PreReq: [{ prefix: "CS", courseNumber: "216" }, { prefix: "CIS", courseNumber: "255" }] },
    { prefix: "CIS", courseNumber: "366", PreReq: [{ prefix: "CIS", courseNumber: "366" }] },
    { prefix: "CIS", courseNumber: "386", PreReq: [{ prefix: "CS", courseNumber: "216" }] },
    { prefix: "CIS", courseNumber: "422", PreReq: [{ prefix: "CIS", courseNumber: "311" }, { prefix: "CIS", courseNumber: "366" }, { prefix: "CIS", courseNumber: "386" }, ] },
    { prefix: "CIS", courseNumber: "424", PreReq: [{ prefix: "CIS", courseNumber: "422" }] }
];
var CISElective = [
    { prefix: "CS", courseNumber: "345", PreReq: [{ prefix: "CS", courseNumber: "216" }] },
    { prefix: "CIS", courseNumber: "357", PreReq: [{ prefix: "CS", courseNumber: "216" }] },
    { prefix: "CIS", courseNumber: "371", PreReq: [{ prefix: "CS", courseNumber: "216" }, { prefix: "CS", courseNumber: "245" }] },
    { prefix: "CIS", courseNumber: "425", PreReq: [{ prefix: "CS", courseNumber: "311" }, { prefix: "CS", courseNumber: "245" }] },
    { prefix: "CIS", courseNumber: "486", PreReq: [{ prefix: "CIS", courseNumber: "386" }] }
];
/*var CISGeneral = [
    { prefix: "CS", courseNumber: "245", PreReq: [] },
    { prefix: "MATH", courseNumber: "120B", PreReq: [] },
    { prefix: "COMM", courseNumber: "105A", PreReq: [] },
    { prefix: "RPW", courseNumber: "304", PreReq: [] },
    { prefix: "ACCT", courseNumber: "213", PreReq: [] },
    { prefix: "ECON", courseNumber: "221", PreReq: [] },
    { prefix: "LAW", courseNumber: "308", PreReq: [] },
    { prefix: "MGT", courseNumber: "321", PreReq: [] },
    { prefix: "MKT", courseNumber: "331", PreReq: [] },
    { prefix: "PHIL", courseNumber: "205A!", PreReq: [] },
    { prefix: "PHIL", courseNumber: "210B", PreReq: [] }
];*/
var CompletedCourses = [];
var NeededCourses = [];
var API_Data = [];
var AvailCourses = [];
var UnavailCourses = [];

var xmlhttp = [];
var API_requests = ["CS", "CIS", "MATH", "COMM", "RPW", "ACCT", "ECON", "LAW", "MGT", "PHIL", "MKT"];

for (var i = 0; i < API_requests.length; i++) {
    xmlhttp[i] = new XMLHttpRequest();
    var url = "https://api.svsu.edu/courses?prefix=" + API_requests[i];
    xmlhttp[i].open("GET", url, true);
    var pointer = xmlhttp[i]
    xmlhttp[i].onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var temp = JSON.parse(this.responseText);
            temp = temp.courses;
            addItemsToArray(temp, API_Data);
        }
    };
    xmlhttp[i].send();
};



function ListMajors() {
    var i;
    document.getElementById("ListOfMajors").innerHTML = "";
    //CreateOption("ListOfMajors", "disabled", "disabled", "--Major Courses--", true);
    var arr;

    if (document.getElementById("selectMajor").value == "CS") {
        for (i = 0, arr = CSMajor; i < arr.length; i++) {
            CreateOption("ListOfMajors", "value", arr[i].prefix.toUpperCase() + "-" + arr[i].courseNumber, arr[i].prefix.toUpperCase() + "-" + arr[i].courseNumber, false);
        }
        //CreateOption("ListOfMajors", "disabled", "disabled", "--Elective Courses--", false);
        for (i = 0, arr = CSElective; i < arr.length; i++) {
            CreateOption("ListOfMajors", "value", arr[i].prefix.toUpperCase() + "-" + arr[i].courseNumber, arr[i].prefix.toUpperCase() + "-" + arr[i].courseNumber, false);
        }
        //CreateOption("ListOfMajors", "disabled", "disabled", "--General Courses--", false);
        /*for (i = 0, arr = CSGeneral; i < arr.length; i++) {
            CreateOption("ListOfMajors", "value", arr[i].prefix.toUpperCase() + "-" + arr[i].courseNumber, arr[i].prefix.toUpperCase() + "-" + arr[i].courseNumber, false);
        }*/
    } else if (document.getElementById("selectMajor").value == "CIS") {
        for (i = 0, arr = CISMajor; i < arr.length; i++) {
            CreateOption("ListOfMajors", "value", arr[i].prefix.toUpperCase() + "-" + arr[i].courseNumber, arr[i].prefix.toUpperCase() + "-" + arr[i].courseNumber, false);
        }
        //CreateOption("ListOfMajors", "disabled", "disabled", "--Elective Courses--", false);
        for (i = 0, arr = CISElective; i < arr.length; i++) {
            CreateOption("ListOfMajors", "value", arr[i].prefix.toUpperCase() + "-" + arr[i].courseNumber, arr[i].prefix.toUpperCase() + "-" + arr[i].courseNumber, false);
        }
        //CreateOption("ListOfMajors", "disabled", "disabled", "--General Courses--", false);
        /*for (i = 0, arr = CISGeneral; i < arr.length; i++) {
            CreateOption("ListOfMajors", "value", arr[i].prefix.toUpperCase() + "-" + arr[i].courseNumber, arr[i].prefix.toUpperCase() + "-" + arr[i].courseNumber, false);
        }*/
    }
}

function CreateOption(id, attribute, attributeValue, textNode, selected) {
    var option = document.createElement("option");
    var DisplayText = document.createTextNode(textNode);
    option.setAttribute(attribute, attributeValue);
    if (selected) {
        option.setAttribute("selected", "selected");
    }
    option.appendChild(DisplayText);
    document.getElementById(id).appendChild(option);
}

function CreateLabelWithCheck(id, arrEle) {
    var label = document.createElement("label");
    var input = document.createElement("input");
    var DisplayText
    var isRequired;
    var Major = document.getElementById("selectMajor").value;

    if (Major == "CIS") {
        isRequired = idOf(CISElective, arrEle) == -1;
    } else {
        isRequired = idOf(CSElective, arrEle) == -1;
    }

    if (!isRequired) {
        DisplayText = document.createTextNode(arrEle.prefix.toUpperCase() + "-" + arrEle.courseNumber + " <Elective>");
    } else {
        DisplayText = document.createTextNode(arrEle.prefix.toUpperCase() + "-" + arrEle.courseNumber);
    }
    document.createTextNode(arrEle.prefix.toUpperCase() + "-" + arrEle.courseNumber);
    label.setAttribute("id", "Comp_" + arrEle.prefix.toUpperCase() + "-" + arrEle.courseNumber);
    if (id == "completeCol1" || id == "completeCol2") {
        label.setAttribute("onClick", "RemoveItems(this.id)");
        input.setAttribute("type", "checkbox");
        input.setAttribute("value", arrEle.prefix.toUpperCase() + "-" + arrEle.courseNumber);
        label.appendChild(input);
    }

    label.appendChild(DisplayText);
    document.getElementById(id).appendChild(label);
    document.getElementById(id).innerHTML += "<br/>";
}

function AddToCompletedList() {
    var element = document.getElementById("inputCourseComplete");
    var courseId = element.value;
    if (courseId == "" || courseId == undefined) {

    } else {
        var temp = courseId.split("-");
        temp[0] = temp[0];
        var ob = {
            "prefix": temp[0],
            "courseNumber": temp[1]
        };
        CompletedCourses.push(ob);
        element.value = "";
    }
    ListDisplayed();
}

function ListDisplayed() {
    document.getElementById("completeCol1").innerHTML = "";
    document.getElementById("completeCol2").innerHTML = "";
    for (var i = 0; i < CompletedCourses.length; i++) {
        if (i % 2 == 1) {
            CreateLabelWithCheck("completeCol2", CompletedCourses[i]);
        } else {
            CreateLabelWithCheck("completeCol1", CompletedCourses[i]);
        }
    }
}

function GetNeededClasses() {
    var Major = document.getElementById("selectMajor").value;
    if (Major == "CS") {
        NeededCourses = [];
        addItemsToArray(CSMajor, NeededCourses);
        //addItemsToArray(CSGeneral, NeededCourses);
        addItemsToArray(CSElective, NeededCourses);

    } else {
        NeededCourses = [];
        addItemsToArray(CISMajor, NeededCourses);
        //addItemsToArray(CISGeneral, NeededCourses);
        addItemsToArray(CISElective, NeededCourses);
    }
    //NeededCourses = difference(NeededCourses,CompletedCourses);

    return NeededCourses;
}

function difference(a1, a2) {
    var result = [];
    var conflict;
    for (var i = 0; i < a1.length; i++) {
        for (var j = 0; j < a2.length; j++) {
            if (a2[j].prefix == a1[i].prefix && !conflict) {
                if (a2[j].courseNumber == a1[i].courseNumber) {
                    conflict = true;
                }
            }
        }
        if (!conflict) {
            result.push(a1[i]);
        }
        conflict = false;
    }
    return result;
}

function PopulateNeededList() {
    var list = GetNeededClasses();
    document.getElementById("neededCol1").innerHTML = "";
    document.getElementById("neededCol2").innerHTML = "";
    for (var i = 0; i < list.length; i++) {
        if (i % 2 == 1) {
            CreateLabelWithCheck("neededCol2", list[i]);
        } else {
            CreateLabelWithCheck("neededCol1", list[i]);
        }
    }
    setAvalibility();
}

function ResetLists() {
    document.getElementById("completeCol1").innerHTML = "";
    document.getElementById("completeCol2").innerHTML = "";
    document.getElementById("neededCol1").innerHTML = "";
    document.getElementById("neededCol2").innerHTML = "";
}

function RemoveItems(id) {
    var temp = id.substring(5);
    temp = temp.split("_");
    var ob = {
        "prefix": temp[0],
        "courseNumber": temp[1]
    };
    var pos = idOf(CompletedCourses, ob);
    CompletedCourses.splice(pos, 1);
    ListDisplayed();
    PopulateNeededList();
}

function idOf(list, key) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].prefix == key.prefix && list[i].courseNumber == key.courseNumber) {
            return i;
        }
    }
    return -1;
}

function addItemsToArray(ListIn, ListOut) {
    for (var i = 0; i < ListIn.length; i++) {
        ListOut.push(ListIn[i]);
    }
}

function setAvalibility() {
    /*for (var i = 0; i < NeededCourses.length; i++) {
        var API_index = idOf(API_Data, NeededCourses[i]);
        if (API_index != -1) {
            NeededCourses[i]["PreReq"] = API_Data[API_index].prerequisites;
            NeededCourses[i]["PreReq"] = NeededCourses[i]["PreReq"].trim();
        } else {
            console.log("API_index: " + API_index + " Caused by NeededCourses[" + i + "]:" + NeededCourses[i]);
            NeededCourses[i]["PreReq"] = "";
        }
    }*/
    var colAvail = 0,
        colUnavail = 0;
    document.getElementById("Avail2").innerHTML = "";
    document.getElementById("Avail1").innerHTML = "";
    document.getElementById("Unavail2").innerHTML = "";
    document.getElementById("Unavail1").innerHTML = "";
    for (var i = 0; NeededCourses[i]; i++) {

        if (hasPreReqs(CompletedCourses, NeededCourses[i].PreReq) && idOf(CompletedCourses, NeededCourses[i]) == -1) {

            if (colAvail % 2 == 1) {
                CreateLabelWithCheck("Avail2", NeededCourses[i]);
                colAvail++;
            } else {
                CreateLabelWithCheck("Avail1", NeededCourses[i]);
                colAvail++;
            }
        }else if (idOf(CompletedCourses, NeededCourses[i]) == -1) {
            if (colUnavail % 2 == 1) {
                CreateLabelWithCheck("Unavail2", NeededCourses[i]);
                colUnavail++;
            } else {
                CreateLabelWithCheck("Unavail1", NeededCourses[i]);
                colUnavail++;
            }
        }
    }
}

function hasPreReqs(list, arrPreReq) {
    var test = true;
    for (var i = 0; i < arrPreReq.length; i++) {
        if (idOf(list, arrPreReq[i]) == -1 && arrPreReq[i] != "") {
            test = false;
        }
    }
    return test;
}