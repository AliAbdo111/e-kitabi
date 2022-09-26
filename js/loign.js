// Select Element Button Inside Form 
var inlog = document.getElementById("in")
var uplog = document.getElementById("up")

// Function One Switch To Up 
function inloglog()
{
    // console.log("testr") // Test 
    uplog.style.transform = "translateX(600px)";
    inlog.style.transform = "translateX(600px)";    


}
// Function Two Switch To In
function uploglog()
{
    console.log("testr")
    uplog.style.transform = "translateX(0)";
    inlog.style.transform = "translateX(-600px)";


}
// Start Chick About Form 
var fName = document.getElementById("fname") // UserName
var femail = document.getElementById("ename") // Email 
var pasOne = document.getElementById("pasOne") // Pas One 
var pasTwo = document.getElementById("pasTwo") // Pas Two 
// Start Function Sign Up 
function sginUp()
{

    if(pasOne.value.length > 5 && pasTwo.value.length > 5 && fName.value.length >= 5)
    {
        if(pasOne.value == pasTwo.value)
        {        
            console.log("true") // Test 
            localStorage.setItem("username", fName.value)
            localStorage.setItem("email", femail.value)
            localStorage.setItem("pas", pasOne.value)
            uplog.setAttribute("action","./index.html")
    
        } else {
    
            console.log("false") // Test 
            
            uplog.setAttribute("action","#")
            alert("Not Valid")
        }
    }


}


// Input Inteface 
var userNameOne = document.querySelector("#lnameTwo") // User Name 
var userPasOne = document.querySelector("#lPasTwo") // User Password
    // local Storage 
    var UserEmailFromLocalStorage = localStorage.getItem("email") // Email From Local Storage
    var UserPasFromLocalStorage = localStorage.getItem("pas") // Password From Local Storage
function sginIn()
{
   
    if(userNameOne.value == UserEmailFromLocalStorage && userPasOne.value == UserPasFromLocalStorage)
    {
        inlog.setAttribute("action","./index.html")

    } else 
    {
        alert("There is no account with this data")
      
    }
   
    
}


function preventBack() {
    window.history.forward();
    }

setTimeout(preventBack(), 0);
