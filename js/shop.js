// Function One Especially Select => Option 
var selectOption = document.getElementById("selectOption"); // Select Options
selectOption.addEventListener("click", function (e) {
  // console.log(e.target) // Test

  var booksJson = new XMLHttpRequest(); // Step One Initilaiz
  booksJson.open(
    "GET",
    "https://www.googleapis.com/books/v1/volumes?q=" + e.target.value
  ); // Step Two Server Connection

  booksJson.onreadystatechange = function () {
    if (booksJson.readyState == 4 && booksJson.status == 200) {
      var arr = JSON.parse(booksJson.responseText);

      // console.log(arr.items.length) // Test
      for (var i = 0; i < arr.items.length; i++) {
        // console.log(arr.items[i].volumeInfo.title) // Test

        // console.log( document.querySelectorAll(".righttext h2")[i]) // Test

        document.querySelectorAll(".righttext h2")[i].innerHTML =
          arr.items[i].volumeInfo.title;
        document.querySelectorAll(".righttext .authors")[i].innerHTML =
          arr.items[i].volumeInfo.authors;
        document.querySelectorAll(".leftimg img")[i].src =
          arr.items[i].volumeInfo.imageLinks.smallThumbnail;
        document.querySelectorAll("h4 span")[i].innerHTML =
          arr.items[i].volumeInfo.publishedDate;
          document.querySelectorAll("h5 span")[i].innerHTML = 
          arr.items[i].volumeInfo.pageCount;
        document.querySelectorAll(".righttext p:last-of-type")[i].innerHTML =
          arr.items[i].volumeInfo.description;
        // Add Attribute Title In Pragraph
        document
          .querySelectorAll(".righttext p:last-of-type")
          [i].setAttribute("title", arr.items[i].volumeInfo.description);
          


      }
    }
  };
  booksJson.send();
}); // End The Event Listener




// Function Two Especially Product Tages
var tages = document.getElementById("tagg"); // Select Parent Ul 
tages.addEventListener("click", function (e) {

  // console.log(e.target.title) // Test

  var booksJson = new XMLHttpRequest(); // Step One Initilaiz
  booksJson.open(
    "GET",
    "https://www.googleapis.com/books/v1/volumes?q=" + e.target.title
  ); // Step Two Server Connection

  booksJson.onreadystatechange = function () {
    if (booksJson.readyState == 4 && booksJson.status == 200) {
      var arr = JSON.parse(booksJson.responseText);

      
      for (var i = 0; i < arr.items.length; i++) {
       

        document.querySelectorAll(".righttext h2")[i].innerHTML =
          arr.items[i].volumeInfo.title;
        document.querySelectorAll(".righttext .authors")[i].innerHTML =
          arr.items[i].volumeInfo.authors;
        document.querySelectorAll(".leftimg img")[i].src =
          arr.items[i].volumeInfo.imageLinks.smallThumbnail;
        document.querySelectorAll("h4 span")[i].innerHTML =
          arr.items[i].volumeInfo.publishedDate;
          document.querySelectorAll("h5 span")[i].innerHTML =
          arr.items[i].volumeInfo.pageCount;
        document.querySelectorAll(".righttext p:last-of-type")[i].innerHTML =
          arr.items[i].volumeInfo.description;
        // Add Attribute Title In Pragraph
        document
          .querySelectorAll(".righttext p:last-of-type")
          [i].setAttribute("title", arr.items[i].volumeInfo.description);
        
      }
    }
  };
  booksJson.send();
}); // End The Event Listener


// Function Three Especially Input Search
var searchInput = document.getElementById("searchButton"); // Button Start Search 
var bookSearch = document.getElementById("searccInput"); // Input Search 
searchInput.addEventListener("click", function () {
  // console.log(bookSearch.value);

  var booksJson = new XMLHttpRequest(); // Step One Initilaiz
  booksJson.open(
    "GET",
    "https://www.googleapis.com/books/v1/volumes?q=" + bookSearch.value
  ); // Step Two Server Connection

  booksJson.onreadystatechange = function () {
    if (booksJson.readyState == 4 && booksJson.status == 200) {
      var arr = JSON.parse(booksJson.responseText);
    
      for (var i = 0; i < arr.items.length; i++) {

        document.querySelectorAll(".righttext h2")[i].innerHTML =
          arr.items[i].volumeInfo.title;
        document.querySelectorAll(".righttext .authors")[i].innerHTML =
          arr.items[i].volumeInfo.authors;
        document.querySelectorAll(".leftimg img")[i].src =
          arr.items[i].volumeInfo.imageLinks.smallThumbnail;
        document.querySelectorAll("h4 span")[i].innerHTML =
          arr.items[i].volumeInfo.publishedDate;
          document.querySelectorAll("h5 span")[i].innerHTML =
          arr.items[i].volumeInfo.pageCount;
        document.querySelectorAll(".righttext p:last-of-type")[i].innerHTML =
          arr.items[i].volumeInfo.description;
        // Add Attribute Title In Pragraph
        document
          .querySelectorAll(".righttext p:last-of-type")
          [i].setAttribute("title", arr.items[i].volumeInfo.description);

      }

    }
  };
  booksJson.send();
}); // End The Event Listener



// Function Sort By [Page Count]
 function funcSortByPageCount()
  {
   
  
    var booksJson = new XMLHttpRequest(); // Step One Initilaiz
    booksJson.open(
      "GET",
      "https://www.googleapis.com/books/v1/volumes?q=+bookSearch.value"
    ); // Step Two Server Connection
  
    booksJson.onreadystatechange = function () {
      if (booksJson.readyState == 4 && booksJson.status == 200) {
        var respon = JSON.parse(booksJson.responseText);
        

        // Convert Response Object To Array 
        var converToArray = Array.from(respon.items);

      

        // Sort Response By Page Count 
        converToArray.sort(function(a,b) {

          return a.volumeInfo.pageCount - b.volumeInfo.pageCount
        })
       


        for (var i = 0; i < converToArray.length; i++) {

          document.querySelectorAll(".righttext h2")[i].innerHTML =
          converToArray[i].volumeInfo.title;
          document.querySelectorAll(".righttext .authors")[i].innerHTML =
          respon.items[i].volumeInfo.authors;
          document.querySelectorAll(".leftimg img")[i].src =
          converToArray[i].volumeInfo.imageLinks.smallThumbnail;
          document.querySelectorAll("h4 span")[i].innerHTML =
          converToArray[i].volumeInfo.publishedDate;
          document.querySelectorAll("h5 span")[i].innerHTML =
          converToArray[i].volumeInfo.pageCount;
          document.querySelectorAll(".righttext p:last-of-type")[i].innerHTML =
          converToArray[i].volumeInfo.description;
          // Add Attribute Title In Pragraph
          document
            .querySelectorAll(".righttext p:last-of-type")
            [i].setAttribute("title", converToArray[i].volumeInfo.description);
         
        }
  
      }
    };
    booksJson.send();
 

  }








  // Function Sort By [Name Books]
 function funcSortByName()
 {
  
 
   var booksJson = new XMLHttpRequest(); // Step One Initilaiz
   booksJson.open(
     "GET",
     "https://www.googleapis.com/books/v1/volumes?q=" + bookSearch.value
   ); // Step Two Server Connection
 
   booksJson.onreadystatechange = function () {
     if (booksJson.readyState == 4 && booksJson.status == 200) {
       var respon = JSON.parse(booksJson.responseText);
       

       // Convert Response Object To Array 
       var converToArray = Array.from(respon.items);

    
       // Sort Response By Name Books 
       converToArray.sort(function(a,b) {

        if (a.volumeInfo.title <  b.volumeInfo.title )
        {
          return -1;
        } 

        if (a.volumeInfo.title >  b.volumeInfo.title )
        {
          return 1;
        }  

        return 0
        
       })
      


       for (var i = 0; i < converToArray.length; i++) {

         document.querySelectorAll(".righttext h2")[i].innerHTML =
         converToArray[i].volumeInfo.title;
         document.querySelectorAll(".righttext .authors")[i].innerHTML =
         respon.items[i].volumeInfo.authors;
         document.querySelectorAll(".leftimg img")[i].src =
         converToArray[i].volumeInfo.imageLinks.smallThumbnail;
         document.querySelectorAll("h4 span")[i].innerHTML =
         converToArray[i].volumeInfo.publishedDate;
         document.querySelectorAll("h5 span")[i].innerHTML =
         converToArray[i].volumeInfo.pageCount;
         document.querySelectorAll(".righttext p:last-of-type")[i].innerHTML =
         converToArray[i].volumeInfo.description;
         // Add Attribute Title In Pragraph
         document
           .querySelectorAll(".righttext p:last-of-type")
           [i].setAttribute("title", converToArray[i].volumeInfo.description);
        
       }
 
     }
   };
   booksJson.send();


 }
