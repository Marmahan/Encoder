
function encryptme(){
    var name=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var encrypted = CryptoJS.AES.encrypt(name+" " + lname, "alsayed"); //encrypt
    document.getElementById("result").value=encrypted; //show encryption in text field
     
}

function decryptme(){
    var enc=document.getElementById("encode").value;
    var decrypted = CryptoJS.AES.decrypt(enc, "alsayed");
    document.getElementById("backresult").value=decrypted.toString(CryptoJS.enc.Utf8);
}

function clearme(){
    document.getElementById("fname").value="";
    document.getElementById("lname").value="";
    document.getElementById("result").value="";
}

function clearmedec(){
    document.getElementById("encode").value="";
    document.getElementById("backresult").value="";
}