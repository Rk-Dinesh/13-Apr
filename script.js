function createele (tagname,attrname,attrvalue,content) {
    let ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML = content;
    return ele;
}

function inputele (tagname,attrname,attrvalue,attrname1,attrvalue2) {
    let ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue2);
    return ele; 
}

function linebreak (tagename) {
    let ele = document.createElement(tagename);
    return ele;
}

var FirstName = createele("label","for","firstName","FirstName: ");
var linebreak1 = linebreak("br");
var inputFname = inputele("input","text","firstName","id","firstName");
var linebreak2 = linebreak("br");

var MiddleName = createele("label","for","middleName","MiddleName: ");
var linebreak3 = linebreak("br");
var inputmname = inputele("input","text","middleName","id","middleName");
var linebreak4 = linebreak("br");


var LastName = createele("label","for","lastName","LastName: ");
var linebreak5 = linebreak("br");
var inputlname = inputele("input","text","lastName","id","lastName");
var linebreak6 = linebreak("br");

var Email = createele("label","for","email","Email: ");
var linebreak7 = linebreak("br");
var inputemail = inputele("input","text","email","id","email");
var linebreak8 = linebreak("br");

var state = createele("label","for","state","State: ");
var linebreak9 = linebreak("br");
var inputs = inputele("input","text","State","id","state");
var linebreak10 = linebreak("br");



document.body.append(FirstName,linebreak1,inputFname,linebreak2,MiddleName,linebreak3,inputmname,linebreak4,LastName,linebreak5,inputlname,linebreak6,Email,linebreak7,inputemail,linebreak8,state,linebreak9,inputs,linebreak10);