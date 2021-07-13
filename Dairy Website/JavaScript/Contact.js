function getValue(){
    let node1 = document.getElementById("firstname");
    let fname=node1.value;
    console.log(fname);

    let pass=document.getElementById("pass").value;
    console.log(pass);

    var arr=document.getElementsByName("courses");
    console.log(arr);

    for(let item of arr){
        console.log(item.checked);
        if(item.checked==true){
            console.log(item.value);
        }
    }

    let city = document.getElementById("cities").value;
    console.log(city);
}

function validateForm(){
    let state1 = FormValidate1();
    let state2 = FormValidate2();
    let state3 = FormValidate3();
    let state4 = FormValidate4();
    if(state1 && state2 && state3 && state4){
        returntrue;
    }
    else{
        return false;
    }
}

function FormValidate1() {
    document.getElementById("error1").innerHTML="";
    let fname=document.getElementById("firstname").value;
    if(fname==""){
        document.getElementById("error1").innerHTML="This Field id  Required";
        return false;
    }
    else{
        return true
    }
}

function FormValidate2() {
    let regexp = new RegExp("^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*])");
    
    document.getElementById("error2").innerHTML="";
    
    let password=document.getElementById("pass").value;
    
    if(password==""){
        document.getElementById("error2").innerHTML="This Field id  Required";
        return false;
    }
    
    if (regexp.test(password)!=true)
    {
        console.log(regexp.test(password));
        document.getElementById("error2").innerHTML="Password not according to rule";
        return false;
    }
    return true;
}

function FormValidate3() {
    document.getElementById("error3").innerHTML="";
    let cpassword=document.getElementById("confirmpass").value;
    let password = document.getElementById("pass").value;
    if(cpassword==""){
        document.getElementById("error3").innerHTML="This Field id  Required";
        return false;
    }
    if(cpassword != password){
        document.getElementById("error3").innerHTML="Password should match";
        return false;
    }
    return true;
}

function FormValidate4() {
    document.getElementById("error4").innerHTML="";
    let mobile=document.getElementById("mobile").value;
    if(isNaN(mobile)){
        document.getElementById("error4").innerHTML="Only digits allowed";
        return false;
    }

    if(mobile.length!=10){
        document.getElementById("error4").innerHTML="Only 10 Digits allowed";
        return false;
    }
    return true;
}

function FormValidate5(){
    let PassCheckBox = document.getElementById("ShowpassCheck");
    if(PassCheckBox.checked){
        document.getElementById("pass").type = "text";
        document.getElementById("confirmpass").type = "text";
    }
    if(!PassCheckBox.checked){
        document.getElementById("pass").type = "password";
        document.getElementById("confirmpass").type = "password";
    }
}