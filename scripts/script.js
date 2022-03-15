// function show () {
//     var elementOne = location.search.substring(1).split("&");
//     var tempOne = elementOne[0].split("=");
//     l = unescape(tempOne[1]);
//     document.getElementById("span").innerHTML=l;
// }
// show();


//Creating a lable - Name
var your_name = document.createElement("label");
your_name.innerText = "Name:"
document.body.appendChild(your_name);

//Creating a input box for name
var input_box1 = document.createElement("input");
input_box1.setAttribute('type','text');
input_box1.setAttribute('placeholder','Enter your name');
input_box1.setAttribute('name','name');
input_box1.setAttribute('id','name');
document.body.appendChild(input_box1);

var br = document.createElement("br");
document.body.appendChild(br);

var br1 = document.createElement("br");
document.body.appendChild(br1);

//Creating a lable - Date of Birth
var date_of_birth = document.createElement("label");
date_of_birth.innerText = "Date of Birth:"
document.body.appendChild(date_of_birth);

//Creating input box for Date of birth
var input_box2 = document.createElement("input");
input_box2.setAttribute('type','date');
input_box2.setAttribute('name','your-dob');
document.body.appendChild(input_box2);

var br2 = document.createElement("br");
document.body.appendChild(br2);

var br3 = document.createElement("br");
document.body.appendChild(br3);

//Creating a label - Mobile Number
var mobile_number = document.createElement("label");
mobile_number.innerText = "Mobile Number:"
document.body.appendChild(mobile_number);

//Creating a input box for mobile number
var input_box3 = document.createElement("input");
input_box3.setAttribute('type','text');
input_box3.setAttribute('placeholder','Enter your mobile number');
input_box3.setAttribute('name','mobile-number');
document.body.appendChild(input_box3);

var br4 = document.createElement("br");
document.body.appendChild(br4);

var br5 = document.createElement("br");
document.body.appendChild(br5);

//Creating a lable - Email
// var email = document.createElement("label");
// email.innerText = "Email:";
// document.body.appendChild(email);
var email  = document.createElement("label");
email.innerHTML = "email";
document.body.appendChild(email);

//Creating a input box for email
var input_box4 = document.createElement("input");
input_box4.setAttribute('type','email');
input_box4.setAttribute('placeholder','Enter your email address');
input_box4.setAttribute('name','mobile-number');
document.body.appendChild(input_box4);

var br6 = document.createElement("br");
document.body.appendChild(br6);

var br7 = document.createElement("br");
document.body.appendChild(br7);

//Creating a label - Maritial Status
var maritial_status = document.createElement('label');
maritial_status.innerText = "Maritial status:";
document.body.appendChild(maritial_status);

//Creating a radio button for yes
var radio_btn1 = document.createElement("input");
radio_btn1.setAttribute('type','radio');
radio_btn1.setAttribute('name','married_or_not');
radio_btn1.setAttribute('id','radio_btn1');
var opt_1 = document.createElement("span");
opt_1.innerHTML = "Yes";
radio_btn1.setAttribute('onclick','spanevent();');
document.body.appendChild(radio_btn1);
document.body.appendChild(opt_1);

//Creating a input box to get spouse's name:
function spanevent () {
    if (document.getElementById('radio_btn1').checked){
        var spouse = document.createElement("label");
        spouse.innerHTML = "Spouse Name";
        document.body.appendChild(spouse);

        var input_box5 = document.createElement("input");
        input_box5.setAttribute('type','text');
        input_box5.setAttribute('name','spousename');
        input_box5.setAttribute('id','spousename');
        input_box5.setAttribute('placeholder','Enter your spouse name');
        document.body.appendChild(input_box5);
    }
}

//Creating a radio button for No
var radio_btn2 = document.createElement("input");
radio_btn2.setAttribute('type','radio');
radio_btn2.setAttribute('name','married_or_not');
radio_btn2.setAttribute('id','radio_btn2');
var opt_2 = document.createElement("span");
opt_2.innerHTML = "No";
document.body.appendChild(radio_btn2);
document.body.appendChild(opt_2);

var br8 = document.createElement("br");
document.body.appendChild(br8);

var br9 = document.createElement("br");
document.body.appendChild(br9);

var br10 = document.createElement("br");
document.body.appendChild(br10);

var br11 = document.createElement("br");
document.body.appendChild(br11);

//Creating a submit Button
var submit_button = document.createElement("button");
submit_button.setAttribute('type','submit');
submit_button.setAttribute('value','submit');
submit_button.setAttribute('id','submit');
submit_button.innerHTML = "Submit";
submit_button.setAttribute('onclick','clickevent();'); 
document.body.appendChild(submit_button);

//Creating a fucntion to deliver a message
function clickevent () {
    if (input_box1.value && input_box2.value && input_box3.value && input_box4.value != ""){
        if (document.getElementById('radio_btn1').checked || document.getElementById('radio_btn2').checked) {
            var myWindow = window.open("Formdetails", "Formdetails", "width=2000,height=1000");
            myWindow.document.write("<h1>Sucess!!!</h1>");
            setTimeout(function () {
            myWindow.close()
            }, 2000);
        }else{
            alert("Some fields are missing!!!");
        }
    }else{
        alert("Some fields are missing!!!");
    }
    }
    

spaneevent();
clickevent();

//Css
var background_color = document.getElementById("body");
body.style.backgroundColor = "lightblue";









