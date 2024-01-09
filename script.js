//  Global Varibales............................................................
 var flag=0;
 var popup=0;
 var tbody=document.getElementById("tablebody");
 console.log(tbody)
 var passwordArray=[];
 let id=1;
var idArray=[];
var emailArray = [];
 var important;
 var wrongpassowrd=0;
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
var numberRegex =/^\d{10}$/;
var namereg = /^[a-zA-Z0-9_]{3,20}$/;
var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
//  On load functions............................................................
 function setmaxdate(){
    var currentDate = new Date(); 
    console.log(currentDate.toLocaleDateString())
    var ndob=`${currentDate.getFullYear()}-0${currentDate.getMonth()+1}-0${currentDate.getDate()}`;
    var dob =`${currentDate.getFullYear()-18}-0${currentDate.getMonth()+1}-0${currentDate.getDate()}`;
      document.getElementById("dob").max = dob;
      document.getElementById("startdate").max = ndob;
      console.log(ndob);
      document.querySelector(".close").addEventListener("click",()=>{
        document.querySelector(".loginpop").classList.remove("openpop");
        document.querySelector(".whatdo").classList.remove("hidden");
        document.querySelector(".loginbtn").classList.remove("hidden");
        document.querySelector(".opendb").classList.remove("hidden");
    });
      } 
    //   pop...............................................................................
    document.querySelector(".loginbtn").addEventListener("click",()=>{
        console.log("abc");
        document.querySelector(".loginpop").classList.add("openpop");
        popup=1;
        document.querySelector(".whatdo").classList.add("hidden");
        document.querySelector(".loginbtn").classList.add("hidden");
        document.querySelector(".opendb").classList.add("hidden");
        
  });
//   document.querySelector(".opendb").addEventListener("click",()=>{
//     if(tbody.innerHTML.trim()==""){
//         Swal.fire({
//             title: 'TABLE EMPTY!', text: 'PLEASE LOGIN ! TO DATA IN TABLE',icon: 'warning',
//                         confirmButtonText: 'Okay'
//         });
//     }
//     else
//     {
//     console.log("abc");
//     document.querySelector(".table1").style.opacity=1;
//     }
// });
function check()
 {
    var name=document.getElementById("name").value.trim();
    var username = document.getElementById("flexibleInput").value.trim();
    var psskey = document.getElementById("password").value.trim();
    var cpsskey = document.getElementById("cpassword").value.trim();
    var dob=document.getElementById("dob").value;
    var startdate=document.getElementById("startdate").value;
    var enddate=document.getElementById("enddate").value;
    var isValid = true;
    var regex;
    console.log("dob",dob);
    if (emailRegex.test(username)) {
        regex = emailRegex;
    } else if (numberRegex.test(username)) {
        regex = numberRegex;
    } else {
        regex = namereg;
    }
    if (!regex.test(username) || username === "") {
        document.getElementById("erruser").innerHTML = "Invalid input format";
        document.getElementById("flexibleInput").style.borderColor="red";
        isValid = false;
    } else if (emailArray.includes(username))
    {
        document.getElementById("erruser").innerHTML = "Email Already Exits!";
        document.getElementById("flexibleInput").style.borderColor="red";
        isValid=false;
    }
    else {
        document.getElementById("erruser").innerHTML = "";
        document.getElementById("flexibleInput").style.borderColor="green";

    }
    if (!namereg.test(name) || name === "") {
        document.getElementById("errname").innerHTML = "Invalid input format";
        document.getElementById("name").style.borderColor="red";
        isValid = false;
    } else {
        document.getElementById("errname").innerHTML = "";
        document.getElementById("name").style.borderColor="green";

    }
    if (psskey === "") {
        document.getElementById("errpass").innerHTML = "Please fill the password";
        document.getElementById("password").style.borderColor="red";
        isValid = false;
    } else if (!passwordRegex.test(psskey)) {
        document.getElementById("errpass").innerHTML = "Password does not match the specified rules";
        document.getElementById("rule").style.visibility="visible";
        document.getElementById("password").style.borderColor="red";
        isValid = false;
    } else {
        document.getElementById("errpass").innerHTML = "";
        document.getElementById("rule").style.visibility="hidden";
        document.getElementById("password").style.borderColor="green";
    }
    if (cpsskey === "") {
        document.getElementById("errcpass").innerHTML = "Please Re-Enter Password";
        document.getElementById("cpassword").style.borderColor="red";
        isValid = false;
    } else if (cpsskey !== psskey) {
        document.getElementById("errcpass").innerHTML = "Password not matched";
        document.getElementById("cpassword").style.borderColor="red";
        isValid = false;
    } else {
        document.getElementById("errcpass").innerHTML = "";
        document.getElementById("cpassword").style.borderColor="green";
    }
    if(dob=="")
    {
        document.getElementById("errdob").innerHTML = "Please Enter Date Of Birth";
        document.getElementById("dob").style.borderColor="red";
        isValid = false;
    }
    else{
        document.getElementById("errdob").innerHTML="";
        document.getElementById("dob").style.borderColor="green";
    }
    if(startdate=="")
    {
        document.getElementById("errstartdate").innerHTML = "Please Enter Start Date";
        document.getElementById("startdate").style.borderColor="red";
        isValid=false;
    }
    else{
        document.getElementById("errstartdate").innerHTML = "";
        document.getElementById("startdate").style.borderColor="green";
    }
    if(enddate=="")
    {
        document.getElementById("errenddate").innerHTML = "Please Enter End Date";
        document.getElementById("enddate").style.borderColor="red";
        isValid=false;
    }
    else{
        document.getElementById("errenddate").innerHTML = "";
        document.getElementById("enddate").style.borderColor="green";
    }
    if (isValid) 
    {
        if(flag==0&&popup==1)
        {
                saveme(username,name,dob,startdate,enddate);
                Swal.fire({
                     title: 'FROM SUBMITTED!', text: 'Do You To Save More Logins in Table',icon: 'success', showDenyButton:true,
                        confirmButtonText: 'YES', denyButtonText: `NO`
                }).then((result)=>{
                    if(result.isDenied){
                        document.querySelector(".table1").classList.add("opentable");
                        document.querySelector(".loginpop").classList.remove("openpop");
                        document.querySelector(".loginbtn").classList.remove("hidden");
                        document.querySelector(".loginbtn button").classList.add("loginbtn1");
                    }
                });
                console.log(popup);
                passwordArray.push(psskey);             
                 document.getElementById("tfoot").style.visibility="visible";
                // setTimeout(()={document.getElementById("flexibleInput").style.borderColor="blue";
                // document.getElementById("password").style.borderColor="blue";
                // document.getElementById("cpassword").style.borderColor="blue";},2000)
                document.getElementById("flexibleInput").value="";
                document.getElementById("password").value="";
                document.getElementById("cpassword").value="";
                document.getElementById("name").value="";
                document.getElementById("dob").value="";
                document.getElementById("startdate").value="";
                document.getElementById("enddate").value="";
                console.log(wrongpassowrd);
        } 
        else if(flag==1)
        {
            if(passwordArray.includes(psskey)){
                Swal.fire({
                    title: 'Authentication Passed', text: 'Data Updated',icon: 'success',
                       confirmButtonText: 'Okay'
               });
                upadtedata();
            }
            else if(!passwordArray.includes(psskey))
            {
                Swal.fire({title: 'Authentication Failed', text: 'Wrong Password! Enter Correct Password to Update Data.',icon: 'warning',
                confirmButtonText: 'Okay'}); 
                wrongpassowrd++;
                if(wrongpassowrd=1)
                {
                    document.querySelector(".errattempt").innerHTML=`Wrong Password Attempt:${wrongpassowrd},3 of ${wrongpassowrd-3} left`
                }
                else if(wrongpassowrd==3) 
                {
                    document.querySelector(".reset").style.visibility="visible";
                }
            }
         }   
    }
}
function saveme(username,name,dob,startdate,enddate) {
    var tr = document.createElement("tr");
    tr.setAttribute("id",id);
    var td1=tr.appendChild(document.createElement("td"));
    var td2= tr.appendChild(document.createElement("td"));
    var td3 = tr.appendChild(document.createElement("td"));
    var td4= tr.appendChild(document.createElement("td"));
    var td5= tr.appendChild(document.createElement("td"));
    var td6= tr.appendChild(document.createElement("td"));
    var td7= tr.appendChild(document.createElement("td"));
    var td8= tr.appendChild(document.createElement("td"));
    emailArray.push(username);
    td1.innerHTML='<input type="checkbox" id='+id+' onclick="fetchId(id)">';
    td2.innerHTML=name;
    td3.innerHTML = username;
    td4.innerHTML=dob;
    td5.innerHTML=startdate;
    td6.innerHTML=enddate;
    td7.innerHTML = "<button type='button' id="+id+"  class='delete' onclick='dbmanipulation(id)'>Delete</button>";
    td8.innerHTML = "<button type='button' id="+id+"  class='edit' onclick='dbedit(id)' ondblclick='upadtedata(id)'>EDIT</button>";  
    document.getElementById("tablebody").appendChild(tr);
    console.log(tr);
    console.log("id after creation",id); 
    idArray.push(id);
    console.log(`id array after ${id}st creation`,idArray)
    id++;
    console.log("Password array:",passwordArray)

}
function fetchId(id){
    if(idArray.includes(id)){
        console.log("deleted",idArray);
       idArray= idArray.filter((val) =>{
        val!==id
       } );
       console.log(idArray);
    }
    else{
        console.log("added", idArray);
        idArray.push(id);
    }
}
function deleteselected(){
    idArray.forEach((id)=>{
        var a= document.getElementById(id);
        a.remove();
        document.getElementById("tfoot").style.visibility="visible";
    })
   idArray=[];
}
function deleteall(){   
    console.log(tbody);
    var yn=prompt("ARE YOU SURE YOU WANT TO DELETE ALL!(ENTER YES OR NO)")
    console.log(yn)
    if(yn==="yes"||yn==="YES"|| yn==="Yes")
    {
        tbody.innerHTML= "";
        emailArray=[];
        document.getElementById("tfoot").style.visibility="hidden";
    }
    console.log(emailArray);
}
function dbmanipulation(id) {
    console.log("id",id);
    var delrow= document.getElementById(id);
     var aa=delrow.childNodes[1].textContent;
     console.log(aa);
     emailArray = emailArray.filter(email => email !== aa);
     console.log(emailArray);
     console.log(emailArray);
     delrow.remove();
}

 function dbedit(id){
    console.log(`ID WHEN EDIT IS CLICKED FOR:${id} time `,id)
    console.log("before edit:",emailArray);
    console.log("hubhbhu");
    Swal.fire({
        title: 'ARE YOU SURE WANT TO EDIT?', text: 'YOU MUST KNOW USER PASSWORD TO MAKE CHANGES!',icon: 'question',
           confirmButtonText: 'Okay',showDenyButton:true,
           confirmButtonText: 'YES', denyButtonText: `NO`
   }).then((result)=>{
        if(result.isConfirmed){
            document.querySelector(".loginpop").classList.add("editopenpop");
            document.querySelector(".table1").classList.remove("opentable");
            document.querySelector(".table1").classList.add("editopentable");
        }
    });
    var row=document.getElementById(id);
    var name=row.childNodes[1].textContent;
    var username=row.childNodes[2].textContent;
    var dob=row.childNodes[3].textContent;
    var startdate=row.childNodes[4].textContent;
    var enddate=row.childNodes[5].textContent;
    document.getElementById
    document.getElementById("flexibleInput").value=username;
    document.getElementById("name").value=name;
    document.getElementById("dob").value=dob;
    document.getElementById("startdate").value=startdate;
    document.getElementById("enddate").value=enddate;
    emailArray = emailArray.filter(email => email !== username);
    console.log("after edit:",emailArray);
    important=id;
    flag=1;
 }

 function upadtedata()
 {  
    console.log(`Important when update is clicked for${important} time`,important);
    id=important;
    idArray=[]
    var row=document.getElementById(id);
   var username= document.getElementById("flexibleInput").value;
   var name= document.getElementById("name").value;
   var dob=document.getElementById("dob").value;
    var startdate=document.getElementById("startdate").value
    var enddate=document.getElementById("enddate").value
    row.childNodes[1].textContent=name;
    row.childNodes[2].textContent=username;
    row.childNodes[3].textContent=dob;
    row.childNodes[4].textContent=startdate;
    row.childNodes[5].textContent=enddate;
    document.getElementById("flexibleInput").value=""
    document.getElementById("password").value=""
    document.getElementById("cpassword").value=""
    document.getElementById("dob").value="";
    document.getElementById("name").value=""
    document.getElementById("startdate").value=""
    document.getElementById("enddate").value="" 
    emailArray.push(username);
    flag=0; 
 }
  function resetpassword(){
    var confirm=prompt("DO YOU WANT TO RESET PASSWORD");
    if (confirm=="yes"|| confirm=="YES"||confirm=="Yes")
    {
        document.getElementById("secure-div").style.visibility="visible";
    }   
  }
  
    var namearray=[];
    console.log("hello")
   var filtname= document.querySelector(".filtname");
   var filtusers= document.querySelector(".filtusers");
   var filtdob= document.querySelector(".filtdob");
   var filtstartdate= document.querySelector(".filtstartdate");
   var filtenddate= document.querySelector(".filtenddate");
    filtname.addEventListener("change",()=>
    {
       
        for(i=0;i<idArray.length;i++)
        {
            var row=document.getElementById(idArray[i]);
          if( row.childNodes[1].textContent==filtname.value)
           {
             namearray.push(row.id);
            }
        }
        console.log("namearray",namearray);
        // console.log("name",namearray[1].childNodes[1].textContent);
        idArray = idArray.filter(id => !namearray.includes(id.toString()));
        console.log("idarray",idArray);
        for(i=0;i<idArray.length;i++)
        {
            var visible=document.getElementById(idArray[i]);
            visible.style.display="none";
        }
        // if(filtname==""){
        //     visible.style.display="show";
        //    }  
    });
    filtusers.addEventListener("change",()=>
    {
       
        for(i=0;i<idArray.length;i++)
        {
            var row=document.getElementById(idArray[i]);
          if( row.childNodes[2].textContent==filtusers.value)
           {
             namearray.push(row.id);
            }
        }
        console.log("namearray",namearray);
        // console.log("name",namearray[1].childNodes[1].textContent);
        idArray = idArray.filter(id => !namearray.includes(id.toString()));
        console.log("idarray",idArray);
        for(i=0;i<idArray.length;i++)
        {
            var visible=document.getElementById(idArray[i]);
            visible.style.display="none";
        }
    })
 
//  Singup Page...................................................................................................................................................................
function validation(){
    var fname = document.querySelector(".fname").value;
    var lname=document.querySelector(".lname").value;
    var mobile= document.querySelector(".mobile").value;
    var email = document.querySelector(".email").value;
    var password=document.querySelector(".password").value;
    var cpassword=document.querySelector(".cpassword").value;
    var dob=document.querySelector(".date").value;
    console.log("j",dob)
    // var gender=document.querySelector(".gender");
    var isValid = true;
    if (namereg.test(fname)|| fname =="") 
    {
        console.log("Aaa")
        document.querySelector("#errfn").innerHTML ="Please fill the name of the user";
        isValid = false;
    }
    else if(fname[0] !== fname[0].toUpperCase()){
        document.querySelector("#errfn").innerHTML ="First name must start with an uppercase letter";
        isValid=false;
    }
    else {
        document.querySelector("#errfn").innerHTML = "";
        
    }
    if (namereg.test(lname)|| lname =="") 
    {
        console.log("Aaa")
        document.querySelector("#errln").innerHTML ="Please fill the name of the user";
        isValid = false;
    }
    else
    {
        document.querySelector("#errln").innerHTML = "";
      
    }
    if (mobile == "") 
    {
        document.querySelector("#errmb").innerHTML ="please fill the mobile nnumber";
        isValid = false;
    }
    else if(!numberRegex.test(mobile)){
        document.querySelector("#errmb").innerHTML ="Mobile number must of 10 Digits";
        isValid = false;
    }
    else {
        document.querySelector("#errmb").innerHTML = "";
       
    }
    if (email === "") 
    {
        document.querySelector("#erremail").innerText = " please fill the email box.";
        isValid = false;
    }
    else if(!emailRegex.test(email)){
        document.querySelector("#erremail").innerText = " Email is not in proper format";
        isValid = false;
    }
    else {
        document.querySelector("#erremail").innerHTML = "";
    }
    if (password === "") 
    {
        document.querySelector("#errpass").innerHTML = "Please fill the password";
        //  document.querySelector(".password").style.borderColor="red";
         isValid = false;
    }
     else if (!passwordRegex.test(password)) 
    {
        document.querySelector("#errpass").innerHTML = "Password does not match the specified rules";
        // // document.getElementsByClassName("rule").style.visibility="visible";
        // document.getElementsByClassName("password").style.borderColor="red";
         isValid = false;
     }
      else 
     {
         document.querySelector("#errpass").innerHTML = "";
        //  document.querySelector("#rule").style.visibility="hidden";
        // document.querySelector(".password").style.borderColor="green";
        
    }
    if (cpassword === "") {
        document.querySelector("#errcpass").innerHTML = "Please Re-Enter Password";
        document.querySelector(".cpassword").style.borderColor="red";
         isValid = false;
    } 
    else if(cpassword !== password)
    {
        document.querySelector("#errcpass").innerHTML = "Password not matched";
        // document.getElementsByClassName("cpassword").style.borderColor="red";
        isValid = false;
    }
     else 
    {
        document.querySelector("#errcpass").innerHTML = "";
        document.querySelector(".cpassword").style.borderColor="green";
       
    }
    if(dob ===  "")
    {
        document.querySelector("#errdate").innerHTML ="Please fill the Date of Birth";
        isValid = false;
    }
    else 
    {
        document.querySelector("#errdate").innerHTML = "";
        console.log(dob)
    }
    // if(gender == "")
    // {
    //     document.querySelector("#errdate").innerHTML ="please fill the Date of Birth";
    //     isValid = false;
    // }
    // else {
    //     document.querySelector("#errdate").innerHTML = "";
    //     // console.log(dob.value)
    //     isValid=true;
    // }
    if(isValid){
        alert("From Submitted");
        // holdclick();
    }
}
   function holdclick()
  {
    var adrregex=/^\d+[a-zA-Z0-9\s,.'-]*$/i;
    var address=document.querySelector(".address").value
    var country=document.querySelector(".country").value;
    var pincode=document.querySelector(".pincode").value;
    isValid=true;
    if(country === "")
    {
        document.querySelector("#errcountry").innerHTML="Please select country"
    }
    else{
        document.querySelector("#errcountry").innerHTML=""
    }
    if(!adrregex.test(address))
    {
        document.querySelector("#erraddress").innerHTML="Please fill the address"
    }
    else{   
        document.querySelector("#erraddress").innerHTML=""
    }
    if(pincode.length<5)
    {
        document.querySelector("#errpincode").innerHTML="Please Enter 6 Digit pincode"
    }
    else{
        document.querySelector("#errpincode").innerHTML=""
    }
    saveme1(fname,mobile,email,dob,gender,country,address,pincode)
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
    document.querySelector(".tablebody2").appendChild(tr);
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