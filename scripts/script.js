// function display() {
//     window.location.href = "http://127.0.0.1:5500/result.html";
//     const parameters = new URLSearchParams(window.location.search);
//     var name = parameters.get('yname');
//     console.log(name);
//     document.write("Name : " + name + "<br>");
//     var dateofbirth = parameters.get('your-dob');
//     document.write("Date Of Birth : " + dateofbirth + "<br>");
//     var mobilenumber = parameters.get('mobileNumber');
//     document.write("Mobile Number : " + mobilenumber + "<br>");
//     var email_ = parameters.get('email');
//     document.write("Your Email : " + email_ + "<br>");
//     var country = parameters.get('country');
//     document.write("Your Country : " + country + "<br>");
//     var uploadImage = parameters.get('uploadImage');
//     document.write("Uploaded Image : " + uploadImage + "<br>");
//     var maritialstatus = parameters.get('married_or_not');
//     document.write("Maritial status : " + maritialstatus + "<br>");

// }
console.log("Check");
function submitCall () {
 var userdetails = {
     name : document.getElementById('yname').value,
     dateOfBirth : document.getElementById('dob').value,
     mobileNumber : document.getElementById('mobileNumber').value,
     email : document.getElementById('email').value,
     country : document.getElementById('country').value,
     uploadImage : document.getElementById('uploadImage').value,
     maritialStatus : document.getElementById('radio_btn1').checked

 }   
 var form = document.getElementById("myForm");
 function handleForm (event) {
      event.preventDefault(); 
    } 
 form.addEventListener('submit', handleForm);
 
 var url=new URL("http://127.0.0.1:5500/result.html?yname=" + userdetails.name + "&dob=" +userdetails.dateOfBirth + "&mobileNumber=" + userdetails.mobileNumber + "&email=" + userdetails.email + "&country=" + userdetails.country + "&uploadImage=" + userdetails.uploadImage + "&married_or_not=" + userdetails.maritialStatus);
 window.location.href =url
 document.write("<h1> This is result.html page!!! </h1> <br> ");
 document.write("Name : " + userdetails.name + "<br>");
 document.write("Date of Birth : " + userdetails.dateOfBirth + "<br>");
 document.write("Mobile Number : " + userdetails.mobileNumber + "<br>");
 document.write("Email : " + userdetails.email + "<br>");
 document.write("Country : " + userdetails.country + "<br>");
 document.write("Uploaded Image Name : " + userdetails.uploadImage + "<br>");
 document.write("Maritial Status : " + userdetails.maritialStatus)



}







