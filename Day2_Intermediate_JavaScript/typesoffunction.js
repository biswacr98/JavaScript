function abcd()
{
    //function statement
}

var abcd = function(){
    //function expression
}

//function() {
    //anonymous function
//}

// Basic Fat Arrow
var a = () => {};
var b = () => {};

//Fat Arrow with 1 parameter
var c = parameter => {}

c(12)

// Fat Arrow with Implicit Return
var d = () => "Hello world";
var res = d();