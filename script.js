 function setmaxdate(){
    var currentDate = new Date(); 
    console.log(currentDate.toLocaleDateString())
    var ndob =`${currentDate.getFullYear()}-0${currentDate.getMonth()+1}-0${currentDate.getDate()}`;
      document.getElementById("date").max = ndob;
      console.log(ndob)
      } 
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
var numberRegex =/^\d{10}$/;
var namereg = /^[a-zA-Z0-9_]{3,20}$/;
var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
// function check() {
//     var username = document.getElementById("flexibleInput").value.trim();
//     var psskey = document.getElementById("password").value.trim();
//     var cpsskey = document.getElementById("cpassword").value.trim();
//     var isValid = true;
//     var regex;
//     if (emailRegex.test(username)) {
//         regex = emailRegex;
//     } else if (numberRegex.test(username)) {
//         regex = numberRegex;
//     } else {
//         regex = namereg;
//     }
//     if (!regex.test(username) || username === "") {
//         document.getElementById("erruser").innerHTML = "Invalid input format";
//         document.getElementById("flexibleInput").style.borderColor="red";
//         isValid = false;
//     } else {
//         document.getElementById("erruser").innerHTML = "";
//         document.getElementById("flexibleInput").style.borderColor="green";

//     }
//     if (psskey === "") {
//         document.getElementById("errpass").innerHTML = "Please fill the password";
//         document.getElementById("password").style.borderColor="red";
//         isValid = false;
//     } else if (!passwordRegex.test(psskey)) {
//         document.getElementById("errpass").innerHTML = "Password does not match the specified rules";
//         document.getElementById("rule").style.visibility="visible";
//         document.getElementById("password").style.borderColor="red";
//         isValid = false;
//     } else {
//         document.getElementById("errpass").innerHTML = "";
//         document.getElementById("rule").style.visibility="hidden";
//         document.getElementById("password").style.borderColor="green";
//     }
//     if (cpsskey === "") {
//         document.getElementById("errcpass").innerHTML = "Please Re-Enter Password";
//         document.getElementById("cpassword").style.borderColor="red";
//         isValid = false;
//     } else if (cpsskey !== psskey) {
//         document.getElementById("errcpass").innerHTML = "Password not matched";
//         document.getElementById("cpassword").style.borderColor="red";
//         isValid = false;
//     } else {
//         document.getElementById("errcpass").innerHTML = "";
//         document.getElementById("cpassword").style.borderColor="green";
//     }
//     if (isValid) {
//             if (emailArray.includes(username)){
//                 alert("Email Already Exists!")
//             }
//             else{
//                 saveme(username, psskey);
//                 alert("You have successfully registered.");
//                 document.getElementById("tfoot").style.visibility="visible";
//                 // setTimeout(()={document.getElementById("flexibleInput").style.borderColor="blue";
//                 // document.getElementById("password").style.borderColor="blue";
//                 // document.getElementById("cpassword").style.borderColor="blue";},2000)
                
//             }
//         //     document.getElementById("flexibleInput").value=""
//         //      document.getElementById("password").value=""
//         //     document.getElementById("cpassword").value="" 
//         }
// }
// let id=1;
// var emailArray = [];
// function saveme(username, psskey) {
//     var tr = document.createElement("tr");
//     tr.setAttribute("id",id);
//     var td1= tr.appendChild(document.createElement("td"));
//     var td2 = tr.appendChild(document.createElement("td"));
//     var td3 = tr.appendChild(document.createElement("td"));
//     var td4= tr.appendChild(document.createElement("td"));
//     emailArray.push(username);
//     td1.innerHTML='<input type="checkbox" id='+id+' onclick="fetchId(id)">';
//     td2.innerHTML = username;
//     td3.innerHTML = psskey;
//     td4.innerHTML = "<button type='button' id="+id+"  class='delete' onclick='dbmanipulation(id)'>Delete</button>";
//     document.getElementById("tablebody").appendChild(tr);
//     id++;
// }
// var idArray=[];

// function fetchId(id){
//     if(idArray.includes(id)){
//         console.log("deleted",idArray);
//        idArray= idArray.filter((val) =>{
//         val!==id
//        } );
//        console.log(idArray);
//     }
//     else{
//         console.log("added", idArray);
//         idArray.push(id);
//     }
// }
// function deleteselected(){
//     idArray.forEach((id)=>{
//         var a= document.getElementById(id);
//         a.remove();
//         document.getElementById("tfoot").style.visibility="visible";
//     })
//    idArray=[];
// }
// function deleteall(){
//     console.log("in me")
//     var tbody=document.getElementById("tablebody");
//     console.log(tbody);
//     var yn=prompt("ARE YOU SURE YOU WANT TO DELETE ALL!(ENTER YES OR NO)")
//     console.log(yn)
//     if(yn==="yes"||yn==="YES"|| yn==="Yes")
//     {
//         tbody.innerHTML= "";
//         emailArray=[];
//         document.getElementById("tfoot").style.visibility="hidden";
//     }
//     console.log(emailArray);
// }
// function dbmanipulation(id) {
//     console.log("id",id);
//     var delrow= document.getElementById(id);
//      var aa=delrow.childNodes[1].textContent;
//      console.log(aa);
//      emailArray = emailArray.filter(email => email !== aa);
//      console.log(emailArray);
//      console.log(emailArray);
//      delrow.remove();
// }
 
function validation(){
    var fname = document.getElementById("fname").value.trim() ;
    var mobile= document.getElementById("mobile").value;
    var email = document.getElementById("email").value.trim() ;
    var dob=document.getElementById("date").value;
    var gender=document.getElementById("gender").value;
    var isValid = true;
    if (namereg.test(fname)|| fname =="") 
    {
        document.getElementById("errfn").innerHTML ="Please fill the name of the user";
        isValid = false;
    }
    else if(fname[0] !== fname[0].toUpperCase()){
        document.getElementById("errfn").innerHTML ="First name must start with an uppercase letter";
        isValid=false;
    }
    else {
        document.getElementById("errfn").innerHTML = "";
        isValid=true;
    }
    if (mobile == "") 
    {
        document.getElementById("errmb").innerHTML ="please fill the mobile nnumber";
        isValid = false;
    }
    else if(!numberRegex.test(mobile)){
        document.getElementById("errmb").innerHTML ="Mobile number must of 10 Digits";
        isValid = false;
    }
    else {
        document.getElementById("errmb").innerHTML = "";
        isValid=true;
    }
    if (email === "") 
    {
        document.getElementById("errmail").innerText = " please fill the email box.";
        isValid = false;
    }
    else if(!emailRegex.test(email)){
        document.getElementById("errmail").innerText = " Email is not in proper format";
        isValid = false;
    }
    else {
        document.getElementById("errmail").innerHTML = "";
        isValid=true;
    }
    if(dob == "")
    {
        document.getElementById("errdate").innerHTML ="Please fill the Date of Birth";
        isValid = false;
    }
    else {
        document.getElementById("errdate").innerHTML = "";
        console.log(dob.value)
        isValid=true;
    }
    if(gender == "")
    {
        document.getElementById("errdate").innerHTML ="please fill the Date of Birth";
        isValid = false;
    }
    else {
        document.getElementById("errdate").innerHTML = "";
        console.log(dob.value)
        isValid=true;
    }
    if(isValid){
        alert("From Submitted");
         holdclick();
   }
   function holdclick()
  {
    var adrregex=/^\d+[a-zA-Z0-9\s,.'-]*$/i;
    var address=document.getElementById("address").value
    var country=document.getElementById("country").value;
    var pincode=document.getElementById("pincode").value;
    isValid=true;
    if(country === "")
    {
        document.getElementById("errcountry").innerHTML="Please select country"
    }
    else{
        document.getElementById("errcountry").innerHTML=""
    }
    if(!adrregex.test(address))
    {
        document.getElementById("erraddress").innerHTML="Please fill the address"
    }
    else{   
        document.getElementById("erraddress").innerHTML=""
    }
    if(pincode.length<5)
    {
        document.getElementById("errpincode").innerHTML="Please Enter 6 Digit pincode"
    }
    else{
        document.getElementById("errpincode").innerHTML=""
    }
    saveme1(fname,mobile,email,dob,gender,country,address,pincode)
  }
}
  function saveme1(fname,mobile,email,dob,gender,country,address,pincode,) 
  {
    console.log("hey")
    var tr = document.createElement("tr");
    // tr.setAttribute("id",id);
    var td1= tr.appendChild(document.createElement("td"));
    var td2 = tr.appendChild(document.createElement("td"));
    var td3 = tr.appendChild(document.createElement("td"));
    var td4= tr.appendChild(document.createElement("td"));
    var td5= tr.appendChild(document.createElement("td"));
    var td6= tr.appendChild(document.createElement("td"));
    // var td7= tr.appendChild(document.createElement("td"));
    // var td8 =tr.appendChild(document.createElement("td"));
    var td9= tr.appendChild(document.createElement("td"));
    var td10= tr.appendChild(document.createElement("td"));
    var td11= tr.appendChild(document.createElement("td"));
    // emailArray.push(username);
    td1.innerHTML = fname;
    td2.innerHTML = mobile;
    td3.innerHTML = email;
    td4.innerHTML = dob;
    td5.innerHTML = gender;
    td6.innerHTML = country;
    // td7.innerHTML = state;
    // td8.innerHTML=city;
    td9.innerHTML = address;
    td10.innerHTML = pincode;
    td11.innerHTML = "<button type='button'   class='delete' onclick='dbmanipulation(id)'>Delete</button>";
    document.getElementById("tablebody2").appendChild(tr);
    // id++;
}

//   console.log(currentDate.toISOString());
//   console.log( currentDate.toUTCString());
//   console.log( currentDate.toDateString());
//   console.log( currentDate.toTimeString());
//     var dev = currentDate.toLocaleDateString();
//   // console.log( currentDate.toLocaleString());
//   // console.log( currentDate.toLocaleTimeString());
//   // console.log( currentDate.toString());
//   // const date = new Date();
//   console.log(dev);
//   var dob =document.getElementById("date").value;
//   console.log(dob);

//   var areDatesEqual = dev === dob;
// console.log(areDatesEqual);

// const year = date.getFullYear();
// const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
// const day = date.getDate().toString().padStart(2, '0');

// const formattedDate = `${year}-${month}-${day}`;
// console.log(formattedDate);
// .
// .
// .
// .
// .
// .
// .
// .
// function updatecity(){
//     var firstdropdown=document.getElementById("State");
//     var seconddropdown=document.getElementById("city");
//    var selectedcatergory=firstdropdown.value;
//    if(selectedcatergory==="Haryana")
//    {    
//     addOption(seconddropdown,"panipat","Panipat");
//     addOption(seconddropdown,"jind","Jind");
//     addOption(seconddropdown,"sonipat","Sonipat");
//    }
//    else if(selectedcatergory==="Punjab")
//    {
//     addOption(seconddropdown,"","select city")
//     addOption(seconddropdown,"ludhiana","Ludhiana");
//     addOption(seconddropdown,"amritsar","Amritsar");
//     addOption(seconddropdown,"patiala","Patiala");
//    }
//    else if(selectedcatergory==="Jammu-Kashmir")
//    {
//     addOption(seconddropdown,"","select city")
//     addOption(seconddropdown,"jammu","Jammu");
//     addOption(seconddropdown,"samba","Samba");
//     addOption(seconddropdown,"srinagar","Srinagar");
//    }
//    else if(selectedcatergory==="Gujarat")
//    {
//     addOption(seconddropdown,"","select city")
//     addOption(seconddropdown,"ahmedabad","Ahmedabad");
//     addOption(seconddropdown,"surat","Surat");
//     addOption(seconddropdown,"jamnagar","Jamnagar");
//    }
//   }
//   function addOption(selectElement, value, text) {
//     var option = document.createElement("option");
//     option.value = value;
//     option.text = text;
//     selectElement.add(option);
//   }
//   updatecity();