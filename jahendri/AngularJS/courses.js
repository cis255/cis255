var app1 = angular.module('app1', []);

app1.controller('ctrl1', function($scope) {

  $scope.courses = [{"academicLevel":"UG","capacity":"30","comments":[],"courseNumber":"254","credit":"4","description":"This course focuses on web design and the client side of web application development. Topics include XHTML, Cascading Style Sheets (CSS), the Document Object Model, creating dynamic content and architecture, and building\/deploying web pages and web sites. A large portion of the class is spent on examining the ECMA\/JavaScript client side scripting language. Current topics of interest such as Web 2.0 and AJAX are explored. An introduction to using both commercial and open source web development tools is also provided.","instructors":[{"username":"gpcorser","name":"G. Corser"}],"lineNumber":"0050","location":"UC","meetingTimes":[{"method":"LEC","building":"SE","room":"135","days":"TR","startTime":"08:00 AM","endTime":"12:10 PM","instructor":"gpcorser"}],"prefix":"CIS","prerequisites":"CS 116 (Previous, Required)  ","seatsAvailable":"10","section":"11","status":"Open","term":"16\/SP","title":"Client Side Web Appl Devel 0"},
  {"academicLevel":"UG","capacity":"16","comments":[],"courseNumber":"255","credit":"3","description":"General methods of problem solving, modeling, and simulation using specialized electrical engineering software such as MATLAB\/Simulink, LabVIEW, and Multisim.  Applications will be drawn from digital and analog electrical systems. Course includes a computational laboratory to implement topics covered in lectures.","instructors":[{"username":"rmuralee","name":"R. Muraleedharan Sreekumarid"},{"username":"rmuralee","name":"R. Muraleedharan Sreekumarid"}],"lineNumber":"1072","location":"UC","meetingTimes":[{"method":"LEC","building":"P","room":"241","days":"MW","startTime":"11:30 AM","endTime":"01:20 PM","instructor":"rmuralee"},{"method":"LAB","building":"P","room":"241","days":"MW","startTime":"01:30 PM","endTime":"04:20 PM","instructor":"rmuralee"}],"prefix":"ECE","prerequisites":"ECE 216, ECE 235 (Previous, Required)  ","seatsAvailable":"0","section":"31","status":"Clsd","term":"16\/SU","title":"EE Computer Methods"},
  {"academicLevel":"UG","capacity":"30","comments":[],"courseNumber":"255","credit":"4","description":"This course focuses on web design and the client side of web application development. Topics include XHTML, Cascading Style Sheets (CSS), the Document Object Model, creating dynamic content and architecture, and building\/deploying web pages and web sites. A large portion of the class is spent on examining the ECMA\/JavaScript client side scripting language. Current topics of interest such as Web 2.0 and AJAX are explored. An introduction to using both commercial and open source web development tools is also provided.","instructors":[{"username":"gpcorser","name":"G. Corser"}],"lineNumber":"0482","location":"UC","meetingTimes":[{"method":"LEC","building":"SE","room":"135","days":"M","startTime":"12:30 PM","endTime":"02:20 PM","instructor":"gpcorser"},{"method":"LEC","building":"W","room":"226","days":"W","startTime":"12:30 PM","endTime":"02:20 PM"},{"method":"FNL","building":"SE","room":"135","days":"M","startTime":"12:30 PM","endTime":"02:20 PM"}],"prefix":"CIS","prerequisites":"CS 116 (Previous, Required)  ","seatsAvailable":"3","section":"01","status":"Open","term":"16\/FA","title":"Client Side Web Appl Devel 2"},
  {"academicLevel":"UG","capacity":"30","comments":[],"courseNumber":"256","credit":"4","description":"This course focuses on web design and the client side of web application development. Topics include XHTML, Cascading Style Sheets (CSS), the Document Object Model, creating dynamic content and architecture, and building\/deploying web pages and web sites. A large portion of the class is spent on examining the ECMA\/JavaScript client side scripting language. Current topics of interest such as Web 2.0 and AJAX are explored. An introduction to using both commercial and open source web development tools is also provided.","instructors":[{"username":"gpcorser","name":"G. Corser"}],"lineNumber":"0483","location":"ONL","meetingTimes":[{"method":"ONL","instructor":"gpcorser"}],"prefix":"CIS","prerequisites":"CS 116 (Previous, Required)  ","seatsAvailable":"16","section":"90","status":"Open","term":"16\/FA","title":"Client Side Web Appl Devel 3"},
  {"academicLevel":"UG","capacity":"16","comments":[],"courseNumber":"255","credit":"3","description":"General methods of problem solving, modeling, and simulation using specialized electrical engineering software such as MATLAB\/Simulink, LabVIEW, and Multisim.  Applications will be drawn from digital and analog electrical systems. Course includes a computational laboratory to implement topics covered in lectures.","instructors":[{"username":"oktosh","name":"O. Tosh"},{"username":"oktosh","name":"O. Tosh"}],"lineNumber":"0778","location":"UC","meetingTimes":[{"method":"LEC","building":"P","room":"241","days":"MW","startTime":"01:30 PM","endTime":"02:20 PM","instructor":"oktosh"},{"method":"LAB","building":"P","room":"241","days":"M","startTime":"02:30 PM","endTime":"05:20 PM","instructor":"oktosh"}],"prefix":"ECE","prerequisites":"ECE 216, ECE 235 (Previous, Required)  ","seatsAvailable":"0","section":"01","status":"Clsd","term":"16\/FA","title":"EE Computer Methods"}];
  
  $scope.getTitleAndDescription = function() {
  
    // find the array element that matches the user input
	var arrayElement = -1; 
	for(var i=0; i < $scope.courses.length; i++) {
	    if($scope.courses[i].prefix == $scope.p &&
		   $scope.courses[i].courseNumber == $scope.c) {
		   $scope.title = $scope.courses[i].title;
		   $scope.description = $scope.courses[i].description;
		   arrayElement = i;
		}
	}
    if(arrayElement == -1) {
	    $scope.title = "No course with prefix/number entered.";
		$scope.description = "";
	}

  }; // end getTitleAndDescription

  // Define initial values
  $scope.first = 1;
  $scope.second = 1;
  
  $scope.celsius = -40;
  $scope.fahrenheit = -40;

  $scope.updateValue = function() {
    $scope.calculation = $scope.first + ' + ' + $scope.second +
      " = " + (+$scope.first + +$scope.second);
  };
  
  $scope.updateTemp = function() {
    $scope.C2F = $scope.celsius + ' Celsius is ' + ($scope.celsius  * 1.8 + 32) + ' Fahrenheit';
  };
  
  
  
  
  
  
});