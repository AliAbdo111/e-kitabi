/* Start Button Top */
var buttonTop = document.getElementsByClassName("top")[0]; // Select Button Scrol Top
// Function Display Hidden Or Show  
function func()
{
    if(window.pageYOffset >= 1200)
    {
        buttonTop.style.display = "block"
    } else 
    {
        buttonTop.style.display = "none"
    }
}
// Function Scrol To Top 
buttonTop.addEventListener("click",function()
{
            //(axic x, axic y)
    window.scrollTo(0, 0) 
})

/*************** End Button Top *********************/


/* Start Slider  */
var ElementSlider = document.querySelector(".nav") // select Parent Img
console.log(ElementSlider)
// Function Click Icon Left
function left()
{
    if(ElementSlider.classList.contains("test")){

        ElementSlider.style.backgroundImage =  "url('../images/HomeTwo.webp')";
        ElementSlider.classList.remove("test")


    } else if(!(ElementSlider.classList.contains("test"))){

        ElementSlider.style.backgroundImage =  "url('../images/Home.webp')";
        ElementSlider.classList.add("test")


    } 
}
// Function Click Icon Right 
function right()
{
    if(ElementSlider.classList.contains("test")){

        ElementSlider.style.backgroundImage =  "url('../images/HomeTwo.webp')";
        ElementSlider.classList.remove("test")
 

    } else if(!(ElementSlider.classList.contains("test"))){

        ElementSlider.style.backgroundImage =  "url('../images/Home.webp')";
        ElementSlider.classList.add("test")
    

    } 
}
// Function Auto Slider With SetInterval 
setInterval(function()
{

    if(ElementSlider.classList.contains("test")){

        ElementSlider.style.backgroundImage =  "url('../images/HomeTwo.webp')";
        ElementSlider.classList.remove("test")
        // console.log("one") // Test 

    } else if(!(ElementSlider.classList.contains("test"))){

        ElementSlider.style.backgroundImage =  "url('../images/Home.webp')";
        ElementSlider.classList.add("test")
        // console.log("two") // Test 

    } 
},2500)
/********************************* End Slider  **********************/


/* Start Login  */

var clickIcon = document.querySelector(".app-text .icons").children[3] 

function overlayLogin()
{
    // Create Div OverLay 
    var divOverLay = document.createElement("div")
    divOverLay.setAttribute("class","overlay")
    document.body.appendChild(divOverLay)


    // Create Div Parent (UserName - Email)
    var appDiv = document.createElement("div")
    var textAppDiv = document.createTextNode("login")
    appDiv.appendChild(textAppDiv)
    appDiv.setAttribute("class","appDiv")
    
    document.body.appendChild(appDiv)

    // Create Input User Name 
    var inputUserName = document.createElement("input")
    inputUserName.setAttribute("class","userName") // Need Value Soon 
    inputUserName.setAttribute("placeholder","Username") 
    inputUserName.setAttribute("type","text")


    // Create Input Email 
    var inputEmail = document.createElement("input")
    inputEmail.setAttribute("class","userEmail") // Need Value Soon 
    inputEmail.setAttribute("placeholder","Email") 
    inputEmail.setAttribute("type","text")

    // Create Input addres 
    var inputAddres = document.createElement("input")
    inputAddres.setAttribute("class","userAddres")
    inputAddres.setAttribute("placeholder","Address") 
    inputAddres.setAttribute("type","text")

    // Create Button 
    var Button = document.createElement("button")
    Button.innerHTML = "login"
    Button.setAttribute("class","userButton")

    // Create Span Close 
    var spanClose = document.createElement("span")
    var textSpan = document.createTextNode("x")
    spanClose.setAttribute("class","spanClose")
    spanClose.appendChild(textSpan)


    // Appind Inputs Inside Parent Div 
    appDiv.appendChild(inputUserName)
    appDiv.appendChild(inputEmail)
    appDiv.appendChild(inputAddres)
    appDiv.appendChild(Button)
    appDiv.appendChild(spanClose)

}

// Function Close Login 
document.addEventListener("click", function(e){

    // Chick Does It Contain Class => spanClose
    if(e.target.classList.contains("spanClose"))
    {
        document.querySelector(".overlay").remove()
        document.querySelector(".appDiv").remove()

    }
})



// Start Send Data To Local Storage 

document.addEventListener("click",function(e){



    // Select User Name 
    var userNameValued = document.querySelector(".userName")
        // Select Email  
        var userEmailValued = document.querySelector(".userEmail")
            // Select Address  
            var userAddressValued = document.querySelector(".userAddres")
                // Format Use Email 
                 var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // Chick because On The Flay 
        if(e.target.classList.contains("userButton"))
        {

            if(userNameValued.value.length > 4 && userEmailValued.value.match(mailformat))
            {
                localStorage.setItem("username",userNameValued.value)
                localStorage.setItem("email",userEmailValued.value)
                localStorage.setItem("adress",userAddressValued.value)
                // Show Username User 
                document.querySelector(".user").innerHTML = userNameValued.value
                // Add Color Icon Login
                document.querySelector(".fa-user").style.color = "#ce7852"
                // Option If Not Deleted ( OverLay && AppDive )
                userNameValued.value = ""
                userEmailValued.value = ""
                userAddressValued.value = ""

                // Remove OverLay And AppDiv 
                document.querySelector(".overlay").remove()
                document.querySelector(".appDiv").remove()
                // console.log("Valid") // Test 
            } else {

                userNameValued.style.border = "1px solid red"
                // console.log("No Valid") // Test 
                alert("No Valid Data Tray Again") 
            }
        }
})


// ChicK About Local Storage Is There Inside Username 
if(window.localStorage.getItem("username"))
{
    // Get Value From Local Storge 
    document.querySelector(".user").innerHTML = window.localStorage.getItem("username")
    // Add Color Icon Login
    document.querySelector(".fa-user").style.color = "#ce7852"

}



// Start Section Add To Cart 
var buttonCart = document.getElementsByClassName("add") 
var noti = document.getElementById("noti") 
for(but of buttonCart)
{   
    but.addEventListener("click", function(e){
    
        var addNum = Number(noti.getAttribute("data-count"))
        document.cookie = "item=" + addNum; // Set Cookie
        noti.setAttribute("data-count", addNum + 1)

        console.log(addNum)
        console.log(noti.setAttribute("data-count", addNum + 1)) 

        // Copy And Past Parent Button Calld (Add To Cart) Element 
        var parentButton = e.target.parentNode;
        var cloneParentButton = parentButton.cloneNode(true)

        cloneParentButton.lastElementChild.classList.add("remove")
        cloneParentButton.lastElementChild.innerHTML = "Remove" // Change Content Button 

        // Add Button buy now 
        var buyNow = document.createElement("button")
        buyNow.innerHTML = "Buy Now"
        buyNow.setAttribute("class", "buy")
        cloneParentButton.appendChild(buyNow)
        

        var ItemCart = document.querySelector(".ItemCart")
        ItemCart.appendChild(cloneParentButton)

    })

}

// Exite Window Cart With Element Span 
var exit = document.querySelector(".exit")
exit.addEventListener("click", function(e)
{
    // console.log(e.target.parentNode)
    e.target.parentNode.classList.toggle("display");

})

// Open Window Cart Wuth Icon Cart From Navbar 
var ItemCart = document.querySelector(".ItemCart")
noti.addEventListener("click", function () {

    console.log(ItemCart.classList.contains("ItemCart"))
    if (ItemCart.classList.contains("ItemCart"))
    {
        ItemCart.classList.toggle("display")
        console.log(ItemCart)
    }

  });

// Start Remove Eelement From Section Add To Cart 
document.addEventListener("click", function(e)
{
    if(e.target.classList.contains("remove"))
    {
        e.target.parentNode.remove()
        var addNum = Number(noti.getAttribute("data-count"))
        noti.setAttribute("data-count", addNum - 1)
    }


})



// Funnction Log Out 
var out = document.querySelector(".out i")

out.addEventListener("click", function(e) {

    // localStorage.clear() 
    document.querySelector(".user").innerHTML = ""
    window.location.href = "./login.html"
})


